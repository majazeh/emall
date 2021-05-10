<?php

namespace App\Models;

use Closure;
use Exception;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Http\UploadedFile;
use Illuminate\Pagination\LengthAwarePaginator;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\Http;

class API extends Model{
    protected $guarded = [];

    public function __construct(array $data = [])
    {
        $attributes = Arr::except($data, array_keys($this->with));
        foreach($this->with as $with => $model){
            if(isset($data[$with])){

                $this->setRelation($with, is_array($data[$with]) ? $model::hydrate((array) $data[$with]) : new $model((array) $data[$with]));
            }
        }
        parent::__construct($attributes);
    }

    public static function exec(String $endpoint, String $method = 'GET', array $data = [], Closure $callback = null){
        $endpoint = join('/', [trim(env('ENDPOINT'), '/'), trim($endpoint, '/')]);

        $headers       = array(
            'Accept: application/json',
            'charset: utf-8'
        );
        $response = Http::get($endpoint, [
            'name' => 'Taylor',
            'page' => 1,
        ]);
        $response->onError(function($response){
            abort($response->getStatusCode(), $response->toPsrResponse()->getReasonPhrase());
        });
        if($callback){
            return $callback($response);
        }
        $body = $response->object();
        return static::fakeModel($body);
    }


    public static function fakeModel(object $body){
        if(isset($body->data) && is_object($body->data)){
            $result = new static((array) $body->data);
            $result->common($body->data, $body);
        }elseif(is_array($body->data) && isset($body->meta->current_page)){
            $models = [];
            foreach($body->data as $data){
                $model = new static((array) $data);
                $model->common($data, $body);
                $models[] = $model;
            }
            $result = new LengthAwarePaginator($models, $body->meta->total, $body->meta->per_page, $body->meta->current_page);
        }elseif(is_array($body->data)){
            $result = new Collection($body->data);

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
}
