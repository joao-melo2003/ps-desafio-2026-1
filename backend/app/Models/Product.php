<?php

namespace App\Models;

use Illuminate\Support\Facades\Storage;
use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Product extends Model
{
    /** @use HasFactory<\Database\Factories\ProductFactory> */
    use HasFactory, HasUuids;

    protected $fillable = [
        'name',
        'preco',
        'ano',
        'imagem',
        'category_id',
        'quantidade',
    ];

    public function category():BelongsTo{
        return $this->belongsTo(Category::class, 'category_id', 'id');
    }

    protected static function booted()
    {
        self::deleted(function(Product $product){
            try{
                $image_name = explode('products/', $product['imagem']);
                Storage::disk('public')->delete('products/'.$image_name[1]);
            }catch(\Throwable $e){
                echo $e;
            }
        });
    }
}
