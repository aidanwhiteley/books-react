import { useLoaderData, LoaderFunction} from "react-router-typesafe";
import BooksSummary from "./BooksSummary";

export const loader = (async () => {
  return await void;
}) satisfies LoaderFunction;


export default function BooksSummaryRoute() {

  const summaryStats = useLoaderData<typeof loader>();

  return (
    <BooksSummary />
  )

}