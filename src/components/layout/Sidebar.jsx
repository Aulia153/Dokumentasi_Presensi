import tutorialData from "../../data/tutorialData";
import AccordionMenu from "../tutorial/Accordion";

const Sidebar = ({activeItem, setActiveItem}) => {

    return (
        <aside className="bg-white rounded-3xl border border-slate-200 shadow-[8px_8px_0px_#1e293b] p-5 h-fit">

            <h2 className="text-xl font-bold mb-6">
                Tutorial Admin
            </h2>

            {tutorialData.map((menu) => (
                <AccordionMenu 
                    key={menu.id}
                    menu={menu}
                    activeItem={activeItem}
                    onSelect={setActiveItem}
                />
            ))}
        </aside>
    );
};

export default Sidebar;