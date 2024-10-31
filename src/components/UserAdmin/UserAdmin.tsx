import DataTable, { TableColumn } from 'react-data-table-component';
import { Role, UserProfile } from '../../apis/HttpDataApis';

type UsersProps = {
    users: UserProfile[];
};

export default function UserAdmin({ users }: UsersProps) {

    interface DataRow {
        id: string;
        fullName: string;
        authProvider: string;
        email: string,
        highestRole: string,
        link: string,
        picture: string,
        firstLogon: string,
        lastLogon: string,
        firstVisit: boolean
    }

    const formatPicture = (row: DataRow) => {
        // return <Link className="book-link" to={'/book/' + row.id}> {row.title} </Link>;
        return (row.picture && row.link) ? <a href={row.link}><img src={row.picture} alt='profile pic' /></a> : '';  
    }

    const columns: TableColumn<DataRow>[] = [
        {
            name: 'Name',
            selector: row => row.fullName,
        },
        {
            name: 'Auth provider',
            selector: row => row.authProvider
        },
        {
            name: 'Email',
            selector: row => row.email ? row.email : 'n/a'
        },
        {
            name: 'Role',
            selector: row => row.highestRole,
        },
        {
            name: 'Link',
            selector: row => row.link ? row.link : '',
        },
        {
            name: 'Picture',
            selector: row => row.picture,
            format: row => formatPicture(row),
        }
    ];

    return (

        <>
            <p>There will be some user admin stuff here!</p>
        </>
    )

}