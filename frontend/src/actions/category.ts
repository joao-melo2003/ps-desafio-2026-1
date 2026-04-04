'use server'

import { api } from '@/services/api'
import { revalidatePath } from 'next/cache'

export async function createCategory(form: FormData) {
    const resp = await api('POST', '/category', { data: form });

    if (!resp.error) {
        revalidatePath('/admin/categorias');
    }

    return JSON.stringify(resp);
}

export async function updateCategory(form: FormData) {
    const resp = await api('POST', `/category/${form.get('id')}`, { data: form });

    if (!resp.error) {
        revalidatePath('/admin/categorias');
    }

    return JSON.stringify(resp);
}

export async function destroyCategory(id: string) {

    const resp = await api('DELETE', `/category/${id}`);

    if (!resp.error) {
        revalidatePath('/admin/categorias');
    }

    return JSON.stringify(resp);
}
