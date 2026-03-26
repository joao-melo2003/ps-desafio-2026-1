<?php

use App\Http\Controllers\CategoryController;
use App\Http\Controllers\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Symfony\Component\HttpFoundation\Response;

// Retorna sempre ok
Route::middleware(['auth:sanctum'])->group(function () {
    Route::get('/profile', function (Request $request) {
        return response()->json(Auth::user(), Response::HTTP_OK);
    });
});

// protegido por admin
Route::middleware(['auth:sanctum', 'can:admin'])->group(function () {
    Route::apiResource('/users', UserController::class);
    // Route::apiResource('/category', CategoryController::class);
});

// cria um usuario
Route::post('/users', [UserController::class, 'store']);

// so um teste basico
Route::get('/', function () {
    return ['Laravel' => app()->version()];
});

// Route::get('/category', [CategoryController::class, 'index']);
// Route::post('/category', [CategoryController::class, 'store']);
// Route::get('/category/{id}', [CategoryController::class, 'show']);
// Route::put('/category/{id}', [CategoryController::class, 'update']);
// Route::delete('/category/{id}', [CategoryController::class, 'destroy']);

Route::apiResource('/category', CategoryController::class);

require __DIR__.'/auth.php';
