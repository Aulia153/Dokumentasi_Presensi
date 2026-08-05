import { useState } from "react";
import { HiChevronDown, HiChevronRight } from "react-icons/hi2";

const AccordionMenu = ({ menu, activeItem, onSelect }) => {
    const [open,setOpen] = useState(menu.id === "login");

    const Icon = menu.icon;

    return(
        <div className="mb-2">

            {/*Header*/}
            <button 
                onClick={() => setOpen(!open)}
                className="flex items-center justify-between w-full rounded-xl px-4 py-3 hover:bg-slate-100 transition">
                    
                    <div className="flex items-center gap-3">
                        <icon className="text-blue-600 text-xl"/>
                        <span className="font-medium">
                            {menu.title}
                        </span>
                    </div>

                    {menu.children.length > 0 && (
                        open ? <HiChevronDown/> : <HiChevronRight/>
                    )}
                </button>

                {/* Isi Dropdown */}

                {open && (
                    <div className="ml-10 mt-1 space-y-1">
                        {menu.children.map((child)=>(
                            <button key={child.id}
                            onClick={()=>onSelect(child)}

                            className={`block w-full text-left rounded-lg px-3 py-2 text-sm transition
                                ${
                                    activeItem?.id===child.id
                                    ? "bg-blue-100 text-blue-700 font-semibold"
                                    : "hover:bg-slate-100"
                                }`
                            }
                        >

                            {child.title}
                        </button>

                        ))}
                    </div>
                )}
            </div>
    );
};

export default AccordionMenu;