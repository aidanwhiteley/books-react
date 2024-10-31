import { useLoaderData, LoaderFunction } from "react-router-typesafe";
import UserAdmin from "./UserAdmin";
import { getUserProfiles } from '../../apis/HttpDataApis';

export const loader = (async () => {
  return await getUserProfiles();
}) satisfies LoaderFunction;


export default function UserAdminRoute() {

  const users = useLoaderData<typeof loader>();

  console.log('Saw these users: ', users)

  return (
    <UserAdmin users={users} />
  )

}