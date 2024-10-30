import { Book, Comment } from "../../apis/HttpDataApis"
import Button from 'react-bootstrap/Button';
import { useFetcher } from "react-router-dom";
import './Comments.css';

type BookProps = {
    aBook: Book;
};

export default function Comments({ aBook }: BookProps) {

    const fetcher = useFetcher();

    const formatComment = (aComment: Comment) => {
        const comment = !aComment.deleted ?
            'On ' + aComment.entered[2] + '/' + aComment.entered[1] + '/' + aComment.entered[0] + ' ' + aComment.owner.fullName + ' commented - ' + aComment.commentText :
            <del>Comment deleted by {aComment.deletedBy}</del>
        return comment;
    }

    const comments = aBook.comments.map((aComment: Comment) =>
        <li key={aComment.id} className="comment-entry">

            {formatComment(aComment)}

            {(aComment.allowDelete && !aComment.deleted) &&
                <fetcher.Form method="post">
                    <input type="hidden" id="bookId" name="bookId" value={aBook.id} />
                    <input type="hidden" id="commentId" name="commentId" value={aComment.id} />
                    <Button type="submit" id="comment-delete" name="intent" className="btn-sm" value="delete" variant="outline-danger">
                        Delete comment?
                    </Button>
                </fetcher.Form>
            }
        </li>
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
                <>
                    <fetcher.Form name="commentForm" method="post" className="row g-3" key={JSON.stringify(aBook)}>

                        <label htmlFor="comment">Your review comments</label>
                        <textarea id="comment" name="comment" rows={4} className="form-control" placeholder="What did you think of the book review?"
                            aria-describedby="commentHelpBlock" required></textarea>
                        <small id="commentHelpBlock" className="form-text">
                            Do you have a comment about the book or the review of the book? If so, enter it here.
                            HTML formatting is not supported.<br />
                            Remember: all entries are publicly visible.
                        </small>

                        <input type="hidden" id="bookId" name="bookId" value={aBook.id} />

                        <Button type="submit" id="comment-add" name="intent" value="add" variant="outline-primary" className="me-4">Comment on this book review</Button>
                    </fetcher.Form>
                </>
            }

        </>
    )
}