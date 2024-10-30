import { LoaderFunction } from "react-router-typesafe";
import { logoff } from "../../apis/HttpDataApis";

// eslint-disable-next-line react-refresh/only-export-components
export const loader = (async () => {

  await logoff();
  return null;

}) satisfies LoaderFunction;

export default function LogoffRoute() {

  window.location.href = "/?logged-out=y";

  return (
    <p>We are currently logging you out of {import.meta.env.VITE_APPLICATION_NAME}</p>
  )
}
