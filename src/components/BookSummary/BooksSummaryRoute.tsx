import { useLoaderData, LoaderFunction} from "react-router-typesafe";
import BooksSummary from "./BooksSummary";
import { getSummaryStats } from '../../apis/HttpDataApis';

export const loader = (async () => {
  return await getSummaryStats();
}) satisfies LoaderFunction;


export default function BooksSummaryRoute() {

  const summaryStats = useLoaderData<typeof loader>();

  return (
    <BooksSummary {...summaryStats} />
  )

}