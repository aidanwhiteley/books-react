import { BooksFindProps } from "./BooksFindRoute";
import { Typeahead, TypeaheadRef } from 'react-bootstrap-typeahead';
import { Option } from 'react-bootstrap-typeahead/types/types';
import 'react-bootstrap-typeahead/css/Typeahead.css';
import 'react-bootstrap-typeahead/css/Typeahead.bs5.css';
import { useState, createRef } from "react";
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
    const refAuthor = createRef<TypeaheadRef>();
    const refGenre = createRef<TypeaheadRef>();
    const refRating = createRef<TypeaheadRef>();
    const refReader = createRef<TypeaheadRef>();

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

    const inputSelected = author.length > 0 || genre.length > 0 || rating.length > 0 || reader.length > 0;

    return (
        <>
            <h2>Find a book review</h2>

            {inputSelected &&
                <p className="searchResultsMsg d-md-none fst-italic">Scroll down to see search results</p>
            }
            {!inputSelected &&
                <p className="searchResultsMsg d-md-none">&nbsp;</p>
            }

            <div className="container">
                <div className="row">
                    <div className="col-sm mb-4">
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
                                        // This is to close virtual keyboard on phone/tablet after select choice
                                        refRating.current!.blur();
                                        navigate('rating/' + encodeURIComponent(selected[0] as string));
                                    }
                                }
                                }
                                options={ratingDisplay}
                                selected={rating}
                                highlightOnlyResult
                                ref={refRating}
                            />
                        </Form.Group>
                    </div>
                    <div className="col-sm mb-4">
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
                                        const selectedOption = selected[0] as any;
                                        refAuthor.current!.blur();
                                        navigate('author/' + encodeURIComponent(selectedOption['author']));
                                    }
                                }
                                }
                                options={authorsDisplay}
                                selected={author}
                                highlightOnlyResult
                                ref={refAuthor}
                            />
                        </Form.Group>
                    </div>
                    <div className="col-sm mb-4">
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
                                        const selectedOption = selected[0] as any;
                                        refGenre.current!.blur();
                                        navigate('genre/' + encodeURIComponent(selectedOption['genre']));
                                    }
                                }
                                }
                                options={genreDisplay}
                                selected={genre}
                                highlightOnlyResult
                                ref={refGenre}
                            />
                        </Form.Group>
                    </div>
                    {userProfile && (userProfile.highestRole === 'ROLE_EDITOR' || userProfile.highestRole === 'ROLE_ADMIN') &&
                        <div className="col-sm mb-4">
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
                                            const selectedOption = selected[0] as any;
                                            refReader.current!.blur();
                                            navigate('reader/' + encodeURIComponent(selectedOption['reader']));
                                        }
                                    }
                                    }
                                    options={readerDisplay}
                                    selected={reader}
                                    highlightOnlyResult
                                    ref={refReader}
                                />
                            </Form.Group>
                        </div>
                    }
                </div>
            </div>

            <hr />

            <Outlet />
        </>
    )
}