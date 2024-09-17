import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params, fetch }) => {
    const response = await fetch('/api/notes');
    const notes = await response.json();
    const note = notes.find((b: any) => b.urlPath === params.slug);

    if (!note) {
        throw new Error('Blog not found');
    }

    return { note };
};