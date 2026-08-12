import { useState } from "react";
import { HiChevronDown, HiChevronRight } from "react-icons/hi2";

const AccordionMenu = ({ menu, activeItem, onSelect }) => {
    const [open,setOpen] = useState(false);

    const Icon = menu.icon;

    const handleMenuClick = () => {
        if (menu.children?.length > 0) {
            setOpen(!open);
        }
    };

    return (
        <div className="mb-2">
            {/* Menu Parent */}
            <button type="button" 
                onClick={handleMenuClick}
                className="w-full flex items-center justify-between px-4 py-3 rounded-xl text-left transition hover:bg-slate-100">

                <div className="flex items-center gap-3">
                    {Icon && (
                        <Icon className="text-xl text-blue-600" />
                    )}

                    <span className="font-semibold text-slate-700">
                        {menu.title}
                    </span>
                </div>

                {menu.children?.length > 0 && (
                    open ? (
                        <HiChevronDown className="text-slate-500" />
                    ) : (
                        <HiChevronRight className="text-slate-500" />
                    )
                )}
            </button>

            {/* Sub Mnu */}
            {open && menu.children?.length > 0 && (
                <div className="ml-5 mt-1 pl-3 border-l-2 border-slate-200 space-y-1">
                    
                    {menu.children.map((child) => {

                        const isActive = activeItem?.id === child.id;

                        return (
                            <button 
                                key={child.id}
                                type="button"
                                onClick={() => onSelect(child)}
                                className={`w-full text-left px-3 py-2.5 rounded-lg text-sm transition
                                    ${
                                        isActive 
                                            ? "bg-blue-50 text-blue-700 font-semibold border-l-2 border-blue-600"
                                            : "text-slate-600 hover:bg-slate-50 hover:text-blue-600"
                                    }
                                `}
                            >
                                {child.title}
                            </button>
                        );
                    })}
                </div>

            )}
        </div>
    );
};

export default AccordionMenu;