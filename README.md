# Notes #

1. in server side app, set 
   `postLogonUrl: http://localhost:5173/?logged-on=y`



export default function TandCs() {

    return (
        <>
            <div className="container-fluid">
                <div className="row">

                    <div className="col-md-12">
                        <div className="help">

                            <h1>Help, Information &amp; T&amp;Cs</h1>
                            <p>{import.meta.env.VITE_APPLICATION_NAME}</p>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}