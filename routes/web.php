<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/


Route::delete('/carros/{id}', 'CarrosController@deleteCarrosbyId');

Route::get('/carros', 'CarrosController@getCarros');
Route::post('/carros', 'CarrosController@setCarros');
Route::get('/carros/{id}', 'CarrosController@getCarrosbyId');
Route::put('/carros/{id}', 'CarrosController@setCarrosbyId');

Route::get('/', function () {
    return view('welcome');
});
