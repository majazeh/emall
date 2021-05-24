<?php

namespace App\Models;

use Closure;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Http\UploadedFile;
use Illuminate\Pagination\LengthAwarePaginator;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\Http;
use Illuminate\Validation\ValidationException;

class API extends Model{
    public $response;
    protected $guarded = [];

    public function __construct(array $data = [])
    {
        parent::__construct();
        $this->setRawAttributes($data);
    }

    public function setRawAttributes(array $data, $sync = false)
    {
        $attributes = Arr::except($data, array_keys($this->with));
        foreach($this->with as $with => $model){
            if(isset($data[$with])){

                $this->setRelation($with, is_array($data[$with]) ? $model::hydrate((array) $data[$with]) : new $model((array) $data[$with]));
            }
        }
        return parent::setRawAttributes($attributes, $sync);
    }

    public static function exec(String $endpoint, String $method = 'GET', array $data = [], Closure $callback = null){
        $endpoint = join('/', [trim(env('ENDPOINT'), '/'), trim($endpoint, '/')]);

        $headers       = array(
            'Accept' => 'application/json',
            'charset' => 'utf-8'
        );
        if(session('user') && isset(session('user')->response->token)){
            $headers['Authorization'] = 'Bearer '.session('user')->response->token;
        }
        $method = strtolower($method);
        $response = Http::withHeaders($headers);
        foreach($data as $key => $param){
            if($param instanceof UploadedFile){
                $response->attach(
                    $key, file_get_contents($param), $param->getClientOriginalName()
                );
                unset($data[$key]);
            }
        }
        $response = $response->$method($endpoint, $data);
        $response->onError(function($response) use ($endpoint){
            if($response->getStatusCode() == 422){
                throw ValidationException::withMessages((array) $response->object()->errors);
            }
            if(config('app.env') == 'local'){
                dd([
                    $endpoint,
                    $response->collect()
                ]);
                echo $response->body();
                exit();
            }
            abort($response->getStatusCode(), $response->toPsrResponse()->getReasonPhrase());
        });
        if(!$response->object()){
            echo $response->body();
            exit();
        }
        if($callback){
            return $callback($response);
        }
        return static::fakeModel($response->object());
    }


    public static function fakeModel($body){
        if(!is_object($body)) return $body;
        if(isset($body->data) && is_object($body->data)){
            $result = new static((array) $body->data);
            $result->common($body->data, $body);
        }elseif(isset($body->data) && is_array($body->data) && isset($body->meta->current_page)){
            $models = [];
            foreach($body->data as $data){
                $model = new static((array) $data);
                $model->common($data, $body);
                $models[] = $model;
            }
            $result = new LengthAwarePaginator($models, $body->meta->total, $body->meta->per_page, $body->meta->current_page);
        }elseif(isset($body->data) &&  is_array($body->data)){
            $result = static::hydrate($body->data);
        }
        if(isset($result)){
            $result->response = $body;
            return $result;
        }
        return $body;
    }

    public function common($data, object $body){
        // $this->response = $body;
    }

    public static function apiPost(String $endpoint, array $data = [], Closure $callback = null){
        return static::exec($endpoint, 'POST', $data);
    }

    public static function apiGet(String $endpoint, array $data = [], Closure $callback = null){
        return static::exec($endpoint, 'GET', $data);
    }

    public static function apiPut(String $endpoint, array $data = [], Closure $callback = null){
        return static::exec($endpoint, 'PUT', $data);
    }

    public static function apiDelete(String $endpoint, array $data = [], Closure $callback = null){
        return static::exec($endpoint, 'DELETE', $data);
    }

    public function response(array $data = []){
        return response()->json(array_merge(['data' => $this->toArray()], $data));
    }
}
