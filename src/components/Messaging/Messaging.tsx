import {PropsWithChildren} from 'react';

export interface Props {
    message: string;
}

export default function Messaging(props:  PropsWithChildren<Props>) {

    return (
        <>
            {props.message && 
                <div className="container">
                    <div className="alert alert-primary" role="alert">
                        {props.message}
                    </div>
                </div>
            }
        </>
    )
}