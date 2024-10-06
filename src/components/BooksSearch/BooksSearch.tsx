import { BooksProps } from "../../routes/BooksRecentRoute";
import BooksTable from "../BooksTable/BooksTable";

export default function BooksSearch(props: BooksProps) {

    return (
        <>
            <h2>Books matching your search</h2>
            <BooksTable {...props} />
        </>
    )
}