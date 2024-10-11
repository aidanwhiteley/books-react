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
      <p>This should not be seen!</p>
    )
}
