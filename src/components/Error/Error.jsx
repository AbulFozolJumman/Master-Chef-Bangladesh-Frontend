import { useRouteError } from "react-router-dom";
import "./Error.css"
export default function ErrorPage() {
    const error = useRouteError();
    console.error(error);

    return (
        <div id="error-page">
            <h1>Oopsss!</h1>
            <h2>Sorry, an unexpected error has occurred.</h2>
            <h2>
                <i>{error.statusText || error.message}</i>
            </h2>
        </div>
    );
}