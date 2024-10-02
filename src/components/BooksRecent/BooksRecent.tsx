import { BooksProps } from "../../routes/BooksRecentRoute";
import BooksTable from "../BooksTable/BooksTable";

export default function BooksRecent(props: BooksProps) {

    return (
        <>
            <h2>Recently reviewed books</h2>
            <BooksTable {...props} />
        </>
    )
}