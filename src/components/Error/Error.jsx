import { useRouteError } from "react-router-dom";
import "./Error.css"
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
        </div>
    );
}