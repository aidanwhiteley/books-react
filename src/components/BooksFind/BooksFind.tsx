import { BooksFindProps } from "../../routes/BooksFindRoute";
import BooksTable from "../BooksTable/BooksTable";
import { Typeahead } from 'react-bootstrap-typeahead';
import { Option } from 'react-bootstrap-typeahead/types/types';
import 'react-bootstrap-typeahead/css/Typeahead.css';
import 'react-bootstrap-typeahead/css/Typeahead.bs5.css';
import { useState } from "react";
import Form from 'react-bootstrap/Form';
import './BooksFind.css';
import { Author } from "../../apis/HttpDataApis";

export default function BooksFind(props: BooksFindProps) {

    const [author, setAuthor] = useState<Option[]>([]);

    const authorsDisplay = props.authors.map(anAuthor => {
        const text = anAuthor.countOfBooks > 1 ? ' books' : ' book';
        return {
            label: anAuthor.author + ' (' + anAuthor.countOfBooks + text + ')'
        }
    });

    return (
        <>
            <h2>Find a book review</h2>

            <Form.Group>
                <Form.Label>Find Reviews By Author</Form.Label>
                <Typeahead
                    placeholder="Choose a author..."
                    id="authors-select"
                    clearButton
                    onChange={(selected) => setAuthor(selected)}
                    options={authorsDisplay}
                    selected={author}
                    highlightOnlyResult
                    />
            </Form.Group>
            <hr/>

            {/* <BooksTable {...props} /> */}
        </>
    )
}