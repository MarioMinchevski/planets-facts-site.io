import { Link } from "react-router-dom";
import { NavbarItemType } from "../../utils/types";

export function NavbarItem({ name }: NavbarItemType) {
    return (
        <li className={`navbar__menu-item planet-${name.toLowerCase()}`}>
            <Link to={`/planet/${name}/overview`}>
                {name}
            </Link>
        </li>
    );
}
