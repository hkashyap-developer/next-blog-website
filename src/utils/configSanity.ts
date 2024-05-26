import { createClient } from 'next-sanity';

export const client = createClient({
    projectId: "rwjgdb80",
    dataset: "production", 
    apiVersion: "v2022-03-07", 
    useCdn: true
});