import { NavLink } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div>
            <h2>Oops!!!</h2>

            <NavLink to='/'><button className="btn btn-primary"> Go Back Home</button></NavLink>
        </div>
    );
};

export default ErrorPage;