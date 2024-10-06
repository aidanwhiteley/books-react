import DataTable, { TableColumn } from 'react-data-table-component';
import { BooksProps } from "../../routes/BooksRecentRoute";
import ReactPaginate from 'react-paginate';
import { useNavigate, Link, useLocation } from "react-router-dom";
import "./BooksTable.css";

export default function BooksTable(props: BooksProps) {

    const navigate = useNavigate();
    const location = useLocation();

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
        return <Link className="book-link" to={'/book/' + row.id}> {row.title} </Link>;
    }

    const formatFirstCharCapital = (aString: string) => {
        const lower = aString.toLowerCase();
        return lower.substring(0, 1).toUpperCase() + lower.substring(1);
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
            format: row => formatFirstCharCapital(row.rating)
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
        // console.log('path: ' + location.pathname);
        // console.log('search: ' + location.search);
        // const url = location.pathname + location.search.split("&page=")[0]
        //navigate(url + '&page=' + (event.selected + 1));

        const searchParams = new URLSearchParams(location.search);
        console.log('searchParams: ' + searchParams);
        let queryString = '';
        let count = 0;
        for (const [key, value] of searchParams) {
            if (count === 0) {
                if (key === 'page') {
                    queryString = '?page=' + (event.selected + 1);
                } else {
                    queryString = '?' + key + '=' + value;
                }
            } else {
                if (key === 'page') {
                    queryString = '&page=' + (event.selected + 1);
                } else {
                    queryString = '&' + key + '=' + value;
                }
            } 
            count++;
        }
        if (count === 0) {
            queryString = '?page=' + (event.selected + 1);
        }

        console.log('New querystring: ' + queryString);
        const url = location.pathname + queryString;
        navigate(url);
    };

    return (
        <>
            <DataTable columns={columns} data={data} />

            <div id="pagination" className="h-100 d-flex align-items-center justify-content-center mt-4">
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
            </div>
        </>
    )
}