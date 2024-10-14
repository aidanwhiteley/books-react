import './BookCreateEdit.css';
import { Form } from "react-router-dom";
import { ChangeEvent, useState } from "react";
import { BookCreateProps } from "./BookCreateEditRoute";
import { Typeahead } from 'react-bootstrap-typeahead';
import { Option } from 'react-bootstrap-typeahead/types/types';
import 'react-bootstrap-typeahead/css/Typeahead.css';
import 'react-bootstrap-typeahead/css/Typeahead.bs5.css';

export default function BookCreateEdit(props: BookCreateProps) {

    const [rating, setRating] = useState('');
    const [genre, setGenre] = useState<Option[]>([]);

    const genreDisplay = props.genres.map(aGenre => {
        const text = aGenre.countOfBooks > 1 ? ' books' : ' book';
        return {
            label: aGenre.genre + ' (' + aGenre.countOfBooks + text + ')',
            genre: aGenre.genre
        }
    });

    const onRatingChangeHandler = (event) => {
        setRating(event.target.value);
        console.log("Saw rating: " + event.target.value);
    };

    const onGenreChangeHandler = (selected) => {
        setGenre(selected);
        console.log("Saw genre: ", selected);
    }

    return (
        <>

            <div className="row">
                <div className="col-md-12">

                    <div className="header">
                        <h4 className="title">Enter your review of a book you have read</h4>
                    </div>

                    <div className="content">

                        <Form name="bookForm" className="row g-3">
                            <div className="col-md-6">
                                <label htmlFor="title">Book Title</label>
                                <input type="text" id="title" className="form-control" placeholder="Enter the book title" 
                                    value="" min="2" max="100" required />
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="author">Author</label>
                                <input type="text" id="author" className="form-control" placeholder="Enter the authors name" 
                                    value="" min="1" max="75" required />
                            </div>
                            <div className="col-md-4">
                                <label htmlFor="rating">Your Rating Of The Book</label>
                                <select id="rating" className="form-control" onChange={onRatingChangeHandler}>
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
                                    newSelectionPrefix="Add a new genre: "
                                    onChange={onGenreChangeHandler}
                                    options={genreDisplay}
                                    //selected={genre}
                                    onInputChange={(text: string, e: ChangeEvent<HTMLInputElement>) => {
                                        console.log("On input change: " + text, e);
                                        setGenre({"genre": text, label: text})
                                    }}
                                />
                            </div>

                            <div className="col-md-12">
                                <label htmlFor="summary">Your review / summary</label>
                                <textarea id="summaryArea" rows={8} name="summary" className="form-control" placeholder="What did you think of the book?" 
                                    value="" aria-describedby="summaryHelpBlock" required></textarea>
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