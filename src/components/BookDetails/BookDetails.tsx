import { BookProps } from "./BookDetailsRoute";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import "./BossDetails.css";
import { sanitizeHtml } from "../../utils/textutils";
import Button from 'react-bootstrap/Button';
import { useNavigate, Form } from 'react-router-dom';

export default function BookDetails(props: BookProps) {

    const navigate = useNavigate();

    const book = props.book;
    let bookCover : string | null = '';
    if (book.googleBookDetails && book.googleBookDetails.volumeInfo && book.googleBookDetails.volumeInfo.imageLinks) {
        bookCover = book.googleBookDetails.volumeInfo.imageLinks.thumbnail ? book.googleBookDetails.volumeInfo.imageLinks.thumbnail
            : book.googleBookDetails.volumeInfo.imageLinks.smallThumbnail;
    }
    const altText = 'Picture of book cover for ' + book.title;
    const displayGooglePreview = book.googleBookDetails && book.googleBookDetails.accessInfo.embeddable &&
        book.googleBookDetails.accessInfo.viewability !== 'NO_PAGES';

    const comments = book.comments.map((aComment, index) => 
         <li key={index} className="comment-entry">On {aComment.entered[2]}/{aComment.entered[1]}/{aComment.entered[0]}  {aComment.owner.fullName} commented - {aComment.commentText}</li>
    );

    const handleBookUpdateClicked = () => {
        navigate('/books/edit/' + book.id);
    }

    const handleBookDeleteClicked = () => {
        navigate('/books/delete/' + book.id);
    }

    return (

        <>
            <div className="">
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
                                        <a href={"https://books.google.co.uk/books?id=" + book.googleBookId + "&printsec=frontcover#v=onepage&q&f=true&gbpv=1"} target="_blank">
                                            <img className="" src="/images/gbs_preview_button1.gif" />
                                        </a>
                                    </p>
                                }
                                <p className="reviewDetail"><b>Reviewer's Summary:</b><span className="reviewDetailSummary">{book.summary}</span></p>

                                {(book.createdBy && book.createdBy.fullName) &&
                                    <p><b>Reviewer:</b> {book.createdBy.fullName}</p>
                                }  
                            </div>

                            {book.allowUpdate &&
                                <Button variant="outline-primary" className="me-4" onClick={handleBookUpdateClicked}>Update this book review</Button>
                            }
                            {book.allowDelete &&
                                <Form
                                    method="post"
                                    action={'/books/delete/' + book.id}
                                    onSubmit={(event) => {
                                    if (
                                        !confirm(
                                            "Please confirm you want to delete this book review."
                                        )
                                    ) {
                                        event.preventDefault();
                                    }
                                    }}
                                >
                                    <Button className="mt-4" type="submit" variant="outline-danger">Delete this book review</Button>
                                </Form>
                            }
                            
                        </Tab>

                        {(book.googleBookDetails && book.googleBookDetails.volumeInfo) &&
                            <Tab eventKey="googleBookSummary" title="Google Book Summary">
                                <div className="bookInfo">
                                    {bookCover && 
                                        <img src={bookCover.replace('http://', 'https://')} className="float-start rounded img-thumbnail me-3" alt={altText} />
                                    }
                                    <p><b>Google Summary: </b></p>
                                    <div id="googleSummaryDetail" dangerouslySetInnerHTML={{__html: sanitizeHtml(book.googleBookDetails.volumeInfo.description)}}></div>
                                </div>
                            </Tab>
                        }

                        <Tab eventKey="reviewComments" title="Review Comments">

                            {(comments.length === 0) && 
                                <p className="mt-4">No comments have been left on this book review yet</p>
                            }

                            {(comments.length > 0) && 
                                <ul>{comments}</ul>
                            }

                            {book.allowComment &&
                                <Button variant="outline-primary" className="me-4">Comment on this book review</Button>
                            }
                        </Tab>
                    </Tabs>
                </div>
            </div>
        </>
    )
}