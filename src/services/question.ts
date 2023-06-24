import { get } from './ajax';

export async function getQuestionById(id: string) {
    const url = `/api/stat/${id}`
    const data = await get(url);
    return data;
}