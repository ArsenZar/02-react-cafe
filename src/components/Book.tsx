import clsx from "clsx";
import css from "./book.module.css";

interface Book {
    id: string;
    name: string;
}

interface BookTypes {
    type?: "success" | "error";
}

const books: Book[] = [
    { id: "id-1", name: "JS for beginners" },
    { id: "id-2", name: "React basics" },
    { id: "id-3", name: "React Query overview" },
];

export default function App({ type }: BookTypes) {
    return (
        <>
            <h1>Books of the week</h1>
            <ul>
                {books.map((book) => (
                    <li className={ clsx(css.li, type && css[type]) } key={book.id}>{book.name}</li>
                ))}
            </ul>
        </>
    );
}
