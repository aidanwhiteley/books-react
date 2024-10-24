import { redirect, Params } from "react-router-dom";
import { deleteBookReview } from "../../apis/HttpDataApis";

export async function action({params}: {params: Params<string>}) {

    await deleteBookReview(params.id!);
    return redirect("/");
}