import { Link, useRouteError } from "react-router-dom";
import "./Error.css"

// This is default Error page
export default function ErrorPage() {
    const error = useRouteError();
    console.error(error);

    return (
        <div id="error-page">
            <img src="https://static.vecteezy.com/system/resources/thumbnails/021/570/600/small/website-error-screen-free-png.png" alt="" />
            <h1>Oopsss!</h1>
            <h2>Sorry, an unexpected error has occurred.</h2>
            <h2>
                <i>{error.statusText || error.message}</i>
            </h2>
            <Link to="/">
                <button className="btn btn-primary">Go to Home</button>
            </Link>
        </div>
    );
}