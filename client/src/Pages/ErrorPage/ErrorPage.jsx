import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div>
            error page
            <Link to={'/'}>Home</Link>
        </div>
    );
};

export default ErrorPage;