import { BooksFindProps } from "./BooksFindRoute";
import { Typeahead } from 'react-bootstrap-typeahead';
import { Option } from 'react-bootstrap-typeahead/types/types';
import 'react-bootstrap-typeahead/css/Typeahead.css';
import 'react-bootstrap-typeahead/css/Typeahead.bs5.css';
import { useState } from "react";
import Form from 'react-bootstrap/Form';
import './BooksFind.css';
import { Outlet } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { useUserProfile } from '../../components/Root/RootRoute';

export default function BooksFind(props: BooksFindProps) {

    const [author, setAuthor] = useState<Option[]>([]);
    const [genre, setGenre] = useState<Option[]>([]);
    const [rating, setRating] = useState<Option[]>([]);
    const [reader, setReader] = useState<Option[]>([]);

    const navigate = useNavigate();

    const { userProfile } = useUserProfile();

    const authorsDisplay = props.authors.map(anAuthor => {
        const text = anAuthor.countOfBooks > 1 ? ' books' : ' book';
        return {
            label: anAuthor.author + ' (' + anAuthor.countOfBooks + text + ')',
            author: anAuthor.author
        }
    });

    const genreDisplay = props.genres.map(aGenre => {
        const text = aGenre.countOfBooks > 1 ? ' books' : ' book';
        return {
            label: aGenre.genre + ' (' + aGenre.countOfBooks + text + ')',
            genre: aGenre.genre
        }
    });

    const readerDisplay = props.readers.map(aReader => {
        const text = aReader.countOfBooks > 1 ? ' books' : ' book';
        return {
            label: aReader.reader + ' (' + aReader.countOfBooks + text + ')',
            reader: aReader.reader
        }
    });

    const ratingDisplay = ['Great', 'Good', 'Ok', 'Poor', 'Terrible'];

    return (
        <>
            <h2>Find a book review</h2>

            <div className="container">
                <div className="row">
                    <div className="col-sm">
                        <Form.Group>
                            <Form.Label>Find Reviews By Rating</Form.Label>
                            <Typeahead
                                placeholder="Select a review rating"
                                id="genre-select"
                                clearButton
                                onChange={(selected) => {
                                        setRating(selected);
                                        if (selected && selected[0]) {
                                            setGenre(new Array<Option>());
                                            setAuthor(new Array<Option>());
                                            setReader(new Array<Option>());
                                            navigate('rating/' + encodeURIComponent(selected[0] as string));  
                                        }
                                    }
                                }
                                options={ratingDisplay}
                                selected={rating}
                                highlightOnlyResult
                                />
                        </Form.Group>
                    </div>
                    <div className="col-sm">
                        <Form.Group>
                            <Form.Label>Find Reviews By Author</Form.Label>
                            <Typeahead
                                placeholder="Start typing an author's name..."
                                id="authors-select"
                                clearButton
                                onChange={(selected) => {
                                        setAuthor(selected);
                                        if (selected && selected[0]) {
                                            setGenre(new Array<Option>());
                                            setRating(new Array<Option>());
                                            setReader(new Array<Option>());
                                            // eslint-disable-next-line @typescript-eslint/no-explicit-any
                                            const selectedOption =  selected[0] as any;
                                            navigate('author/' + encodeURIComponent( selectedOption['author']) );
                                        }
                                    }
                                }
                                options={authorsDisplay}
                                selected={author}
                                highlightOnlyResult
                                />
                        </Form.Group>
                    </div>
                    <div className="col-sm">           
                        <Form.Group>
                            <Form.Label>Find Reviews By Genre</Form.Label>
                            <Typeahead
                                placeholder="Start typing a genre..."
                                id="genre-select"
                                clearButton
                                onChange={(selected) => {
                                        setGenre(selected);
                                        if (selected && selected[0]) {
                                            setAuthor(new Array<Option>());
                                            setRating(new Array<Option>());
                                            setReader(new Array<Option>());
                                            // eslint-disable-next-line @typescript-eslint/no-explicit-any
                                            const selectedOption =  selected[0] as any;
                                            navigate('genre/' + encodeURIComponent(selectedOption['genre']));
                                        }
                                    }
                                }
                                options={genreDisplay}
                                selected={genre}
                                highlightOnlyResult
                                />
                        </Form.Group>
                    </div>
                    {userProfile && (userProfile.highestRole === 'ROLE_EDITOR' || userProfile.highestRole === 'ROLE_ADMIN') &&
                        <div className="col-sm">           
                            <Form.Group>
                                <Form.Label>Find Reviews By Reviewer</Form.Label>
                                <Typeahead
                                    placeholder="Start typing a reviewer..."
                                    id="reader-select"
                                    clearButton
                                    onChange={(selected) => {
                                            setReader(selected);
                                            if (selected && selected[0]) {
                                                setAuthor(new Array<Option>());
                                                setRating(new Array<Option>());
                                                setGenre(new Array<Option>());
                                                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                                                const selectedOption =  selected[0] as any;
                                                navigate('reader/' + encodeURIComponent(selectedOption['reader']));
                                            }
                                        }
                                    }
                                    options={readerDisplay}
                                    selected={reader}
                                    highlightOnlyResult
                                />
                            </Form.Group>
                        </div>
                    }
                </div>
            </div>
                              
            <hr/>

            <Outlet />
        </>
    )
}