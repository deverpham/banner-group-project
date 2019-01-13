<?php

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

//Api Doc
Route::get('/api-docs', function () {
    return view('api-docs');
});
Route::get('/api-doc-builder', function () {
    return view('api-doc-builder.index');
});


Route::get('/', function () {
    return view('welcome');
});
