import { Link, useParams } from "react-router-dom";
import { PlanetNavConfingItemType } from "../../utils/types";
import { formatNavItemText } from "../../utils/formatTextFunc";

export function PlanetNavItem({ navItemNum, navItemText }: PlanetNavConfingItemType) {
    const { name } = useParams()

    return (
        <li className="planet-nav__item">
            <Link to={`/planet/${name}/${formatNavItemText(navItemText)}`}>
                <span className="nav-item-num">{navItemNum}</span>
                <span className="nav-item-text">{navItemText}</span>
            </Link>
        </li>
    )
}