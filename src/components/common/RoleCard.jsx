import Button from "./Button";

const RoleCard = ({
    icon,
    title,
    description,
    button,
    to 
}) => {
    return (
        <div className="rounded-3xl border border-slate-300 bg-white 
        shadow-[8px_8px_0px_#1e293b] p-8 transition hover:-translate-y-2">
            
            <div className="text-5xl mb-5">
                {icon}
            </div>

            <h2 className="text-2xl font-bold mb-2">
                {title}
            </h2>

            <p className="text-slate-500 mb-8">
                {description}
            </p>

            <Button to={to}>
                {Button}
            </Button>

        </div>
    )
}

export default RoleCard