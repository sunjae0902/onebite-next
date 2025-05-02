import { BookData } from "@/types";

export default async function fetchBookItem(id: number) : Promise<BookData | null> {
    const url = `https://onebite-books-server-main-six-taupe.vercel.app/book/${id}`;
    
    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error();
        }
        return response.json();
    } catch (err) {
        console.log(err);
        return null;
    }
}