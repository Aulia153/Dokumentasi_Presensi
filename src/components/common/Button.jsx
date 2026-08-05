import { Link } from "react-router-dom";

const Button = ({ to, children }) => {
    return (
        <Link to={to} className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-6 py-3 font-medium text-white transition hover:bg-blue-700">
            {children}
        </Link>
    );
};

export default Button;