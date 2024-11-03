import { useLoaderData, LoaderFunction, ActionFunction } from "react-router-typesafe";
import UserAdmin from "./UserAdmin";
import { getUserProfiles, deleteUser, updateUserAccess } from '../../apis/HttpDataApis';

export const loader = (async () => {
  return await getUserProfiles();
}) satisfies LoaderFunction;


export const action = (async ({ request }) => {

  const formData = await request.formData();
  const user = Object.fromEntries(formData);
  const intent = formData.get("intent");
  const userid = user.userId as string;

  if (intent === 'delete') {
    return await deleteUser(userid);
  } else if (intent === 'access') {
    const level = formData.get("level");
    if (level === 'user') {
      return await updateUserAccess(userid, false, false);
    } else if (level === 'editor') {
      return await updateUserAccess(userid, false, true);
    } else if (level === 'admin') {
      return await updateUserAccess(userid, true, true);
    }
    
  }

  console.error('Unexpected intent or access level: ' + intent + ' ' + formData.get("level"));
  return null

}) satisfies ActionFunction

export default function UserAdminRoute() {

  const users = useLoaderData<typeof loader>();

  return (
    <UserAdmin users={users} />
  )

}