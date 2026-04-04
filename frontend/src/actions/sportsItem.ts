'use server'

import { api } from '@/services/api'
import { revalidatePath } from 'next/cache'

export async function createSportsItem(form: FormData) {
    const resp = await api('POST', '/products', { data: form });

    if (!resp.error) {
        revalidatePath('/admin/artigos-esportivos');
    }

    return JSON.stringify(resp)
}

export async function updateSportsItem(form: FormData) {
    const resp = await api('POST', `/products/${form.get('id')}`, { data: form });

    if (!resp.error) {
        revalidatePath('/admin/artigos-esportivos');
    }

    return JSON.stringify(resp)
}

export async function destroySportsItem(id: string) {
    const resp = await api('DELETE', `/products/${id}`);

    if (!resp.error) {
        revalidatePath('/admin/artigos-esportivos');
    }

    return JSON.stringify(resp)
}
