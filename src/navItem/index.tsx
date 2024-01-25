import { NavLink } from "react-router-dom";
import "./navItem.css"
import { useState } from "react";

interface navProps {
    name: string;
    path: string;
    nested: boolean;
    sub_navs?: { name: string, path: string, sub_navs?: { name: string, path: string }[] }[]
}

const NavItem = ({ name, path, sub_navs, nested }: navProps) => {
    const [isHovered, setIsHovered] = useState(false);
    return (
        <div onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} style={{ position: "relative" }}>
            <NavLink to={path} className={`nav-link ${isHovered ? 'hovered' : ''}`} >{name} {sub_navs && <span className="arrow-down">
                <svg width="20" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg"><path d="M1395 736q0 13-10 23l-466 466q-10 10-23 10t-23-10L407 759q-10-10-10-23t10-23l50-50q10-10 23-10t23 10l393 393 393-393q10-10 23-10t23 10l50 50q10 10 10 23z" ></path></svg></span>} </NavLink>
            {
                sub_navs && <div className={`sub-navs ${isHovered ? 'show' : ''} ${nested ? 'nested' : ''}`}>
                    {
                        sub_navs.map((n) => <NavItem name={n.name} path={n.path} sub_navs={n.sub_navs} nested={true} />)
                    }
                </div>
            }

        </div>
    )
}

export default NavItem
