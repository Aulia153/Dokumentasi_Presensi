import Button from "./Button";

const RoleCard = ({
    icon,
    title,
    description,
    button,
    to,
    badge 
}) => {
   return (
    <div className="role-card">
        {/* Icon */}
        <div className="role-icon">
            {icon}
        </div>

        {/* Badge */}
        <div className="role-badge">
            {badge}
        </div>

        {/* Title */}
        <h3>
            {title}
        </h3>

        {/* Description */}
        <p>
            {description}
        </p>

        {/* Button */}
        <a href={to} className="role-button">
            {button}
        </a>

    </div>

   );
};

export default RoleCard