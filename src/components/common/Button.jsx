import { Link } from "react-router-dom";

const Button = ({ to, children, className = "" }) => {
    return (
        <Link to={to} className={`inline-flex items-center justify-center rounded-xl bg-blue-600 px-6 py-3 font-medium text-white transition-colors duration-200 hover:bg-blue-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 ${className}`}>
            {children}
        </Link>
    );
};

export default Button;