<?php

namespace App\Http\Requests;

use Illuminate\Contracts\Validation\ValidationRule;
use Illuminate\Foundation\Http\FormRequest;

class StoreProductRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'name'        => ['required', 'min:3', 'max:40'],
            'preco'       => ['required', 'numeric', 'min:0'],
            'ano'         => ['required', 'integer', 'between:2000,2025'],
            'imagem'      => ['file'],
            'category_id' => ['required'],
            'quantidade'  => ['required', 'integer', 'min:0'],
        ];
    }
}
