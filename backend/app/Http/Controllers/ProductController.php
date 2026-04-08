<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreProductRequest;
use App\Http\Requests\UpdateProductRequest;
use App\Models\Product;
use Illuminate\Support\Facades\Storage;
use Pest\Support\Str;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;
use Throwable;

class ProductController extends Controller
{
    protected $product;

    public function __construct(Product $product)
    {
        $this->product = $product;
    }

    /**
     * Display a listing of the resource.
     */
    public function index(): JsonResponse
    {
        $product = $this->product->with('category')->get();

        return response()->json($product, Response::HTTP_OK);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreProductRequest $request): JsonResponse
    {
        $data = $request->validated();

        if ($request->hasFile('imagem')) {
            $path = $request->file('imagem')->store('products', 'public');
            $data['imagem'] = url('storage/'.$path);
        }

        $product = $this->product->create($data);
        $id = $product->id;
        $product_category = $this->product->with('category')->findOrFail($id);

        return response()->json($product_category, Response::HTTP_CREATED);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id): JsonResponse
    {
        $product = $this->product->with('category')->findOrFail($id);

        return response()->json($product, Response::HTTP_OK);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateProductRequest $request, string $id)
    {
        $product = $this->product->with('category')->findOrFail($id);
        $data = $request->validated();

        if ($request->hasFile('imagem')) {
            try {
                $image_name = basename($product->imagem);
                Storage::disk('public')->delete('products/'.$image_name);
            } catch (Throwable $e) {
                echo $e;
            } finally {
                $path = $request->file('imagem')->store('products', 'public');
                $data['imagem'] = url('storage/'.$path);
            }
        }

        $product->update($data);

        return response()->json($product, Response::HTTP_OK);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $product = $this->product->findOrFail($id);
        $product->delete();

        return response()->json(['Message' => 'Produto deletado com sucesso']);
    }

    public function buy(string $id)
    {
        $product = $this->product->findOrFail($id);

        if ($product->quantidade <= 0) {
            return response()->json(['message' => 'Produto esgotado'], 400);
        }

        $product->quantidade -= 1;
        $product->save();

        return response()->json(['message' => 'Compra realizada com sucesso', 'quantidade' => $product->quantidade], 200);
    }
}
