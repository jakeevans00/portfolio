import type { PageLoad } from './$types';

export const load: PageLoad = async ({ fetch }) => {
    const response = await fetch('/api/notes');
    const notes = await response.json();
    return { notes };
};