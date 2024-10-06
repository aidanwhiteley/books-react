import DataTable, { TableColumn } from 'react-data-table-component';
import { BooksProps } from "../../routes/BooksRecentRoute";
import ReactPaginate from 'react-paginate';
import { useNavigate, Link } from "react-router-dom";

export default function BooksTable(props: BooksProps) {

    const navigate = useNavigate();

    interface DataRow {
        id: string;
        title: string;
        author: string;
        rating: string;
        reviewDate: string;
        genre: string,
        bookAppUrl: string
    }

    const formatTitle = (row: DataRow) => {
        return <Link to={'/book/' + row.id}> {row.title} </Link>;
    }

    const columns: TableColumn<DataRow>[] = [
        {
            name: 'Title',
            selector: row => row.author,
            format: row => formatTitle(row)
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

    const content = props.booksQueryResult.content;
    const pageData = props.booksQueryResult.page;

    const data = content.map(aBook => {
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

    type CurrentPage = {selected: number};

    const handlePageClick = (event: CurrentPage) => {
        navigate('/books/recent?page=' + (event.selected + 1));
      };

    return (
        <>
            <DataTable columns={columns} data={data} />

            <ReactPaginate
                nextLabel="next >"
                onPageChange={handlePageClick}
                pageRangeDisplayed={3}
                marginPagesDisplayed={2}
                pageCount={pageData.totalPages}
                previousLabel="< previous"
                pageClassName="page-item"
                pageLinkClassName="page-link"
                previousClassName="page-item"
                previousLinkClassName="page-link"
                nextClassName="page-item"
                nextLinkClassName="page-link"
                breakLabel="..."
                breakClassName="page-item"
                breakLinkClassName="page-link"
                containerClassName="pagination"
                activeClassName="active"
                renderOnZeroPageCount={null}
            />
        </>
    )
}