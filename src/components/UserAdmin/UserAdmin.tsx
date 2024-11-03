import DataTable, { TableColumn } from 'react-data-table-component';
import { UserProfile } from '../../apis/HttpDataApis';
import './UserAdmin.css';
import Button from 'react-bootstrap/Button';
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import { useFetcher } from "react-router-dom";

type UsersProps = {
    users: UserProfile[];
};

export default function UserAdmin({ users }: UsersProps) {

    const fetcher = useFetcher();

    interface DataRow {
        id: string;
        fullName: string;
        authProvider: string;
        email: string,
        highestRole: string,
        picture: string,
        firstLogon: Date,
        lastLogon: Date,
    }

    const formatPicture = (row: DataRow) => {
        return (row.picture && row.authProvider === 'GOOGLE') ? <img src={row.picture} alt='profile pic' /> : '';
    }

    const RoleSelector = (props: {row: DataRow}) => (
        <fetcher.Form method="post">
            <input type="hidden" name="intent" value="access" />
            <input type="hidden" name="userId" value={props.row.id} />
            <DropdownButton variant="outline-info" size="sm" key={props.row.id} title={props.row.highestRole}>
            <Dropdown.Item as="button" type="submit" name="level" value="user">User</Dropdown.Item>
            <Dropdown.Item as="button" type="submit" name="level" value="editor">Editor</Dropdown.Item>
            <Dropdown.Item as="button" type="submit" name="level" value="admin">Admin</Dropdown.Item>
            </DropdownButton>
        </fetcher.Form>
      );

    const columns: TableColumn<DataRow>[] = [
        {
            name: 'Name',
            selector: row => row.fullName,
            wrap: true,
            sortable: true,
        },
        {
            name: 'Auth provider',
            selector: row => row.authProvider,
            sortable: true,
        },
        {
            name: 'Email',
            selector: row => row.email ? row.email : 'n/a',
            wrap: true,
            sortable: true,
        },
        {
            name: 'Role',
            selector: row => row.highestRole,
            cell: row => <RoleSelector row={row} />
        },
        {
            name: 'Picture',
            selector: row => row.picture,
            format: row => formatPicture(row),
        },
        {
            name: 'First logon',
            selector: row => row.firstLogon.getTime(),
            format: (row) => row.firstLogon.getDay() + '/' + row.firstLogon.getMonth() + '/' + row.firstLogon.getFullYear(),
            sortable: true
        },
        {
            name: 'Last logon',
            selector: row => row.lastLogon.getTime(),
            format: row => row.lastLogon.getDay() + '/' + row.lastLogon.getMonth() + '/' + row.lastLogon.getFullYear(),
            sortable: true
        },
        {
            name: 'Delete',
            button: true,
            cell: (row) => <fetcher.Form method="post">
                <input type="hidden" name="intent" value="delete" />
                <Button id={row.id} type="submit" name="userId" value={row.id} variant="outline-danger" size="sm">Delete User</Button>
            </fetcher.Form>,
        }
    ];

    const tableData = users.map(aUser => {
        return {
            id: aUser.id,
            fullName: aUser.fullName ? aUser.fullName : '',
            authProvider: aUser.authProvider,
            email: aUser.email ? aUser.email : 'n/a',
            highestRole: aUser.highestRole,
            picture: aUser.picture ? aUser.picture : '',
            firstLogon: new Date(aUser.firstLogon[0], aUser.firstLogon[1], aUser.firstLogon[2]),
            lastLogon: new Date(aUser.lastLogon[0], aUser.lastLogon[1], aUser.lastLogon[2])
        }
    })

    return (

        <>
            <h2>{import.meta.env.VITE_APPLICATION_NAME} users</h2>

            <div id="users-table">
                <DataTable columns={columns}
                    data={tableData}
                    pagination
                    responsive
                    striped />
            </div>
        </>
    )

}