import DataTable, { TableColumn } from 'react-data-table-component';
import { Rating, BooksQueryResult } from "../../apis/HttpDataApis";

export default function BooksTable(props: BooksQueryResult) {

    interface DataRow {
        title: string;
        author: string;
        rating: string;
        reviewDate: string;
        genre: string,
        bookAppUrl: string
    }

    const columns: TableColumn<DataRow>[] = [
        {
            name: 'Title',
            selector: row => row.title,
        },
        {
            name: 'Author',
            selector: row => row.author,
        },
        {
            name: 'Rating',
            selector: row => row.rating,
        },
        {
            name: 'Review Date',
            selector: row => row.reviewDate,
        },
        {
            name: 'Genre',
            selector: row => row.genre,
        },
    ];

    const data = props.content.map(aBook => {
        return {
            id: aBook.id,
            title: aBook.title,
            author: aBook.author,
            rating: aBook.rating,
            reviewDate: aBook.createdDateTime[2] + '-' + aBook.createdDateTime[1] + '-' + aBook.createdDateTime[0],
            genre: aBook.genre,
            bookAppUrl: '/book/' + aBook.id,
        }
    });

    return (
        <>
            <DataTable columns={columns} data={data} />
        </>
    )
}