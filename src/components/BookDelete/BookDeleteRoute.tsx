import { redirect } from "react-router-dom";
import { deleteBookReview } from "../../apis/HttpDataApis";

export async function action({ params }) {

    await deleteBookReview(params.id);
    return redirect("/");
}