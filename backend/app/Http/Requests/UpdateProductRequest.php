<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateProductRequest extends FormRequest
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
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'name'        => ['sometimes', 'min:3', 'max:40'],
            'preco'       => ['sometimes', 'numeric', 'min:0'],
            'ano'         => ['sometimes', 'integer', 'between:2000,2025'],
            'imagem'      => ['sometimes','file'],
            'category_id' => ['sometimes'],
            'quantidade'  => ['sometimes', 'integer', 'min:0'],
        ];
    }
}
