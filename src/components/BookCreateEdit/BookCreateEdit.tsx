import './BookCreateEdit.css';
import { Form } from "react-router-dom";
import { BookCreateProps } from "./BookCreateEditRoute";
import { Typeahead } from 'react-bootstrap-typeahead';
import 'react-bootstrap-typeahead/css/Typeahead.css';
import 'react-bootstrap-typeahead/css/Typeahead.bs5.css';
import { getGoogleBooks, GoogleBookSearchResult } from "../../apis/HttpDataApis";
import { useState, MouseEvent, useEffect } from "react";

export default function BookCreateEdit(props: BookCreateProps) {

    const [googleBookSearchResult, setGoogleBooksSearchResult] = useState<GoogleBookSearchResult>();
    const [currentGoogleBook, setCurrentGoogleBook] = useState<number>(0);
    const [isGoogleSearched, setGoogleSearched] = useState(false);
    const [googleBookMatch, setGoogleBookmatched] = useState(false);

    let errorDisplay = <span></span>;
    if (props.errorMessages.length === 1) {
        errorDisplay = <div className="alert alert-warning" role="alert"> {props.errorMessages[0]} </div>
    } else if (props.errorMessages.length > 1) {
        const messages = props.errorMessages.map((message) =>  <li>{message}</li> );
        errorDisplay = <div className="alert alert-warning" role="alert"><ul> {messages} </ul></div>
    }

    const genreDisplay = props.genres.map(aGenre => {
        const text = aGenre.countOfBooks > 1 ? ' books' : ' book';
        return {
            label: aGenre.genre + ' (' + aGenre.countOfBooks + text + ')',
            genre: aGenre.genre
        }
    });

    const defaultSelected = genreDisplay.filter(aGenre => {
        return aGenre.genre === props.book?.genre;
    })

    useEffect(() => {
        if (props.googleBooks && props.googleBooks.items) {
            setGoogleBooksSearchResult(props.googleBooks);
            setGoogleSearched(true);
            if (props.book?.googleBookId) { 
                for (let i = 0; i < props.googleBooks.items.length - 1; i++) {
                    if (props.googleBooks.items[i].id === props.book.googleBookId) {
                        setCurrentGoogleBook(i);
                        setGoogleBookmatched(true);
                        break;
                    }
                }
            }
        }
    }, [props.book?.googleBookId, props.googleBooks]);

    const onAuthorBlur = async () => {
        const title = (document.getElementById('title') as HTMLInputElement).value;
        const author = (document.getElementById('author') as HTMLInputElement).value;

        const googleBooks = await getGoogleBooks(title, author)
        setGoogleSearched(true);
        setCurrentGoogleBook(0);
        if (googleBooks) {
            setGoogleBooksSearchResult(googleBooks);
        }
    }

    const onClickPrevious = (e: MouseEvent<HTMLButtonElement>) => {
        if (currentGoogleBook > 0) {
            setCurrentGoogleBook(previousValue => previousValue - 1);
        }
        e.preventDefault();
    }

    const onClickNext = (e: MouseEvent<HTMLButtonElement>) => {
        if (googleBookSearchResult && (currentGoogleBook < (googleBookSearchResult.totalItems - 1))) {
            setCurrentGoogleBook(previousValue => previousValue + 1);
        }
        e.preventDefault();
    }

    const onClickBookMatch = () => {
        setGoogleBookmatched(previousValue => !previousValue);
    }

    const getGoogleBookId = () => {
        if (googleBookMatch) {
            return googleBookSearchResult!.items[currentGoogleBook].id;
        } else {
            return '';
        }
    }

    const bookId = props.bookId ? props.bookId : '';

    const isUpdate = props.book?.title;
    const heading = isUpdate ? 'Update your book review' : 'Enter your review of a book you have read';
    const submitText = isUpdate ? 'Update book review' : 'Save book review';

    return (
        <>

            <div className="row">
                <div className="col-md-12">

                    <div className="header">
                        <h4 className="title">{heading}</h4>
                    </div>

                    <div className="content">

                        <div id="message">{errorDisplay}</div>

                        {/* The rather odd looking "key" field on the form is to ensure that the defaultValue field is not
                            "remebered" from one use of the form to another. Otherwise going from (say) the "update review" use
                            of this Form to the "create review" use of the Form would leave the value from the "update review" 
                            use in place at the "create review" use.
                            I am not sure why - I _think_ it might be due to the browser remember the implict form state but
                            I'm guessing really. */}
                        <Form name="bookForm" method="post" className="row g-3" key={JSON.stringify(props.book)}>
                            <input id="bookId" name="bookId" type="hidden" value={bookId} />

                            <div className="col-md-6">
                                <label htmlFor="title">Book Title</label>
                                <input type="text" id="title" name="title" className="form-control" placeholder="Enter the book title" 
                                    min="1" max="100" required defaultValue={props.book?.title} />
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="author">Author</label>
                                <input type="text" id="author" name="author" className="form-control" placeholder="Enter the authors name" 
                                    min="1" max="75" required onBlur={onAuthorBlur} defaultValue={props.book?.author} />
                            </div>
                            <div className="col-md-4">
                                <label htmlFor="rating">Your Rating Of The Book</label>
                                <select id="rating" name="rating" className="form-control" defaultValue={props.book?.rating}>
                                    {props.ratings.map((rating, index) => {
                                        return (
                                            <option key={index}>
                                                {rating}
                                            </option>
                                        );
                                    })}
                                </select>
                            </div>
                            <div className="col-md-8">
                                <label htmlFor="genre">Genre</label>
                                <Typeahead
                                    placeholder="Enter the books main genre"
                                    id="genre"
                                    clearButton
                                    allowNew
                                    defaultSelected={defaultSelected}
                                    inputProps={{ name: 'genre' }}
                                    newSelectionPrefix="Add a new genre: "
                                    options={genreDisplay}
                                    //selected={genre}
                                />
                            </div>

                            <div className="col-md-12">
                                <label htmlFor="summary">Your review / summary</label>
                                <textarea id="summary" name="summary" rows={8} className="form-control" placeholder="What did you think of the book?" 
                                    aria-describedby="summaryHelpBlock" required defaultValue={props.book?.summary}></textarea>
                                <small id="summaryHelpBlock" className="form-text">
                                    Enter anything you like that may help someone else to decide whether the book is worth reading or not. Probably best not to say what the ending is!<br/>
                                    Remember: all entries are publicly visible.
                                </small>
                            </div>

                            {(isGoogleSearched && googleBookSearchResult && (googleBookSearchResult.totalItems === 0)) && 
                                <div className="alert alert-warning" role="alert">
                                    We didn't find any matching books on Google Books. This may be correct but please do check what is entered 
                                    in the <b>Book Title</b> and <b>Author</b> fields above.
                                </div>
                            }
                        
                            {(isGoogleSearched && googleBookSearchResult && googleBookSearchResult.totalItems > 0) &&
                                <>
                                    <div className="col-md-8">
                                        <h5>{googleBookSearchResult.items[currentGoogleBook].volumeInfo && googleBookSearchResult.items[currentGoogleBook].volumeInfo.title}</h5>
                                        <p>
                                            {(googleBookSearchResult.items[currentGoogleBook].volumeInfo && googleBookSearchResult.items[currentGoogleBook].volumeInfo.imageLinks &&
                                                googleBookSearchResult.items[currentGoogleBook].volumeInfo.imageLinks.thumbnail) &&
                                                <img className="rounded float-start googleBookImageImport" src={googleBookSearchResult.items[currentGoogleBook].volumeInfo.imageLinks.thumbnail.replace('http://', 'https://')} alt="A book cover image from Google" />
                                            }
                                            {googleBookSearchResult.items[currentGoogleBook].volumeInfo.description ? googleBookSearchResult.items[currentGoogleBook].volumeInfo.description : 'No description available'}
                                        </p>
                                        {(googleBookSearchResult.items[currentGoogleBook].volumeInfo && googleBookSearchResult.items[currentGoogleBook].volumeInfo.authors) &&
                                            <p>
                                                By: {googleBookSearchResult.items[currentGoogleBook].volumeInfo.authors}
                                            </p>
                                        }
                                    </div>
                                    <div className="col-md-4">
                                        <div className="googleBookText card">
                                            <h5>Have we found the right book?</h5>
                                            <p>Does this look like the book you've read? If not, please try the scroll buttons to see alternatives and then click the check box if you find a good match.</p>
                                            <p>If none of the options look like a good match, please untick the check box.</p>

                                            <div className="bookMatchControl d-flex align-items-center justify-content-center">
                                                <input className="form-check-input" type="checkbox" defaultChecked={googleBookMatch} id="checkBoxBookMatch" onClick={onClickBookMatch}
                                                    aria-label="Click if book matches" />
                                            </div>

                                            <div className="btn-toolbar justify-content-between" role="toolbar" aria-label="Toolbar with button groups">
                                                <button type="button" disabled={currentGoogleBook === 0} onClick={onClickPrevious} className="btn btn-outline-primary previous-button" >&laquo; Previous</button>
                                                <button type="button" disabled={currentGoogleBook === (googleBookSearchResult.totalItems -1)} onClick={onClickNext} className="btn btn-outline-primary next-button">Next &raquo;</button>
                                            </div>
                                            
                                            <input id="googleBookId" name="googleBookId" type="hidden" value={getGoogleBookId()} />
                                        </div>
                                    </div>
                                </>
                            }

                            <div className="text-center">
                                <button type="submit" className="btn btn-info btn-fill btn-wd">{submitText}</button>
                            </div>
                        </Form>
                    </div>
                </div>
            </div>
        </>
    )
}