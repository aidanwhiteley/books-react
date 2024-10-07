import { BookProps } from "../../routes/BookDetailsRoute";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import "./BossDetails.css";
import purify from "dompurify";

export default function BookDetails(props: BookProps) {

    const book = props.book;
    const bookCover = book.googleBookDetails.volumeInfo.imageLinks.thumbnail ? book.googleBookDetails.volumeInfo.imageLinks.thumbnail
            : book.googleBookDetails.volumeInfo.imageLinks.smallThumbnail;
    const altText = 'Picture of book cover for ' + book.title;
    const displayGooglePreview = book.googleBookDetails && book.googleBookDetails.accessInfo.embeddable &&
        book.googleBookDetails.accessInfo.viewability !== 'NO_PAGES';

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
                                {displayGooglePreview &&
                                    <p>
                                    <b className="me-3">Book Preview:</b>
                                        <a href={"https://books.google.co.uk/books?id=" + book.googleBookId + "&printsec=frontcover#v=onepage&q&f=true"} target="_blank">
                                            <img className="" src="/images/gbs_preview_button1.gif" />
                                        </a>
                                    </p>
                                }
                                <p className="reviewDetail"><b>Reviewer's Summary:</b><span className="reviewDetailSummary"
                                    dangerouslySetInnerHTML={{__html: purify.sanitize(book.summary)}}></span></p>
                            </div>
                        </Tab>

                        <Tab eventKey="googleBookSummary" title="Google Book Summary">
                            <div className="bookInfo">
                                {bookCover && 
                                    <img src={bookCover.replace('http://', 'https://')} className="float-start rounded img-thumbnail me-3" alt={altText} />
                                }
                                <p><b>Google Summary: </b></p>
                                <div id="googleSummaryDetail" dangerouslySetInnerHTML={{__html: purify.sanitize(book.googleBookDetails.volumeInfo.description)}}></div>
                            </div>
                        </Tab>

                    </Tabs>
                </div>
            </div>
        </>
    )
}