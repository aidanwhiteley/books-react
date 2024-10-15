import './BookCreateEdit.css';
import { Form } from "react-router-dom";
import { BookCreateProps } from "./BookCreateEditRoute";
import { Typeahead } from 'react-bootstrap-typeahead';
import 'react-bootstrap-typeahead/css/Typeahead.css';
import 'react-bootstrap-typeahead/css/Typeahead.bs5.css';
import purify from "dompurify";

export default function BookCreateEdit(props: BookCreateProps) {

    console.log('create props: ' + JSON.stringify(props));

    let errorDisplay = '';
    if (props.errorMessages.length === 1) {
        errorDisplay = '<div class="alert alert-warning" role="alert">' + props.errorMessages[0] + '</div>'
    } else if (props.errorMessages.length > 1) {
        const messages = props.errorMessages.map((message) =>
            '<li>' + message + '</li>');
        errorDisplay = '<div class="alert alert-warning" role="alert"><ul>' + messages.join(' ') + '</ul></div>'
    }

    const genreDisplay = props.genres.map(aGenre => {
        const text = aGenre.countOfBooks > 1 ? ' books' : ' book';
        return {
            label: aGenre.genre + ' (' + aGenre.countOfBooks + text + ')',
            genre: aGenre.genre
        }
    });

    return (
        <>

            <div className="row">
                <div className="col-md-12">

                    <div className="header">
                        <h4 className="title">Enter your review of a book you have read</h4>
                    </div>

                    <div className="content">

                        <div id="message" dangerouslySetInnerHTML={{__html: purify.sanitize(errorDisplay)}}></div>

                        <Form name="bookForm" method="post" className="row g-3">
                            <div className="col-md-6">
                                <label htmlFor="title">Book Title</label>
                                <input type="text" id="title" name="title" className="form-control" placeholder="Enter the book title" 
                                    min="1" max="100" required />
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="author">Author</label>
                                <input type="text" id="author" name="author" className="form-control" placeholder="Enter the authors name" 
                                    min="1" max="75" required />
                            </div>
                            <div className="col-md-4">
                                <label htmlFor="rating">Your Rating Of The Book</label>
                                <select id="rating" name="rating" className="form-control">
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
                                    inputProps={{ name: 'genre' }}
                                    newSelectionPrefix="Add a new genre: "
                                    options={genreDisplay}
                                    //selected={genre}
                                />
                            </div>

                            <div className="col-md-12">
                                <label htmlFor="summary">Your review / summary</label>
                                <textarea id="summary" name="summary" rows={8} className="form-control" placeholder="What did you think of the book?" 
                                    aria-describedby="summaryHelpBlock" required></textarea>
                                <small id="summaryHelpBlock" className="form-text">
                                    Enter anything you like that may help someone else to decide whether the book is worth reading or not. Probably best not to say what the ending is!<br/>
                                    Remember: all entries are publicly visible.
                                </small>
                            </div>
                        
                            <div className="col-md-8">
                                <h5>A google book title</h5>
                                <p>
                                    <img className="rounded pull-left googleBookImageImport" src="https://example.com/" alt="A book cover image from Google" />
                                </p>
                                <p>
                                    'By: Some Google author data'
                                </p>
                            </div>
                            <div className="panel googleBookText col-md-4">
                                <h5 className="googleBookConfirm">Have we found the right book?</h5>
                                <p>Does this look like the book you've read? If not, please try the scroll buttons to see alternatives and then click the check box if you find a good match.</p>
                                <p>If none of the options look like a good match, please untick the check box.</p>
                                <nav aria-label="Paging">
                                    <ul className="pager">
                                        <li> <a href="#">&laquo; Previous</a></li>
                                        <li><a href="">Next &raquo;</a></li>
                                    </ul>
                                </nav>

                                <div className="form-group">
                                    <input id="google" type="checkbox" className="form-control border-input" />
                                </div>
                                
                                <input id="googleBookId" name="googleBookId" type="hidden"  />
                            </div>

                            <div className="text-center">
                                <button type="submit" className="btn btn-info btn-fill btn-wd">Save Book Details</button>
                            </div>
                        </Form>
                    </div>
                </div>
            </div>
        </>
    )
}