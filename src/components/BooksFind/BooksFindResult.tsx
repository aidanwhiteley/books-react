import { BooksProps } from "./BooksFindResultRoute";
import BooksTable from "../BooksTable/BooksTable";

export default function BooksFindResult(props: BooksProps) {

    return (
        <>
            <h3>Books matching your selection</h3>
            <BooksTable {...props} />
        </>
    )
}