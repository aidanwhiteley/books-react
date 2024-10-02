import DataTable, { TableColumn } from 'react-data-table-component';
import { BooksProps } from "../../routes/BooksRecentRoute";
import ReactPaginate from 'react-paginate';

export default function BooksTable(props: BooksProps) {

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
        // const newOffset = event.selected * itemsPerPage % items.length;
        console.log('User requested page number ' + event.selected );
        //setItemOffset(newOffset);
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