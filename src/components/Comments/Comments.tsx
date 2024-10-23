import { Book, Comment } from "../../apis/HttpDataApis"
import Button from 'react-bootstrap/Button';

type BookProps = {
    aBook: Book;
  };

export default function Comments({aBook}: BookProps) {

    const comments = aBook.comments.map((aComment: Comment, index: number) => 
        <li key={index} className="comment-entry">On {aComment.entered[2]}/{aComment.entered[1]}/{aComment.entered[0]}  {aComment.owner.fullName} commented - {aComment.commentText}</li>
    );

    return (

        <>

            {(aBook.comments.length === 0) && 
                <p className="mt-4">No comments have yet been left on this book review</p>
            }

            {(aBook.comments.length > 0) && 
                <ul>{comments}</ul>
            }


            {aBook.allowComment &&
                <Button variant="outline-primary" className="me-4">Comment on this book review</Button>
            }

        </>
    )
}