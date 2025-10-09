import PocketBase from 'pocketbase';
import { SECRET_EMAIL, SECRET_PASSWORD, PB_URL } from '$env/static/private';

export async function load() {
    const pb = new PocketBase(PB_URL);
    let records = [];

    try {
        // Try to authenticate
        await pb.admins.authWithPassword(SECRET_EMAIL, SECRET_PASSWORD);

        // Fetch the first 2 posts (sorted by newest)
        const response = await pb.collection('posts').getList(1, 2, {
            sort: '-created',
        });

        // Create slug for each record
        records = response.items.map(record => {
            record.slug = record.title
                .toLowerCase()
                .replace(/\s+/g, '-')      // spaces → hyphens
                .replace(/[^\w-]+/g, '')   // remove special chars
                + `-${record.id}`;         // append id
            return record;
        });
    } catch (error) {
        console.error('⚠️ PocketBase fetch failed:', error);
        // Continue rendering the page without blog data
        records = [];
    }

    return {
        records
    };
}
