import { BookProps } from "../../routes/BookDetailsRoute";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import "./BossDetails.css";

export default function BookDetails(props: BookProps) {

    const book = props.book;
    const bookCover = book.googleBookDetails.volumeInfo.imageLinks.thumbnail ? book.googleBookDetails.volumeInfo.imageLinks.thumbnail
            : book.googleBookDetails.volumeInfo.imageLinks.smallThumbnail;
    const altText = 'Picture of book cover for ' + book.title;

    return (

        <>
            <div className="card">
                <div className="bookContent">
                    <Tabs defaultActiveKey="bookDetails" id="book-tabs" className="mb-3">

                        <Tab eventKey="bookDetails" title="Book Details">
                            <div className="bookInfo">
                                {bookCover && 
                                    <img src={bookCover.replace('http://', 'https://')} className="float-start rounded img-thumbnail me-3" alt={altText} />
                                }
                                
                                <p><b>Title: </b>{book.title}</p>
                                <p><b>Author: </b>{book.author}</p>
                                <p className="rating"><b>Rating: </b>{book.rating.toLocaleLowerCase()}</p>
                                <p><b>Review Date: </b>{book.createdDateTime[2] + '-' + book.createdDateTime[1] + '-' + book.createdDateTime[0]}</p>
                                <p><b>Genre: </b>{book.genre}</p>
                                <p className="reviewDetail"><b>Reviewer's Summary:</b><span className="reviewDetailSummary">{book.summary}</span></p>
                            </div>
                        </Tab>

                        <Tab eventKey="googleBookSummary" title="Google Book Summary">
                            Google book summary
                        </Tab>

                    </Tabs>
                </div>
            </div>
        </>
    )
}