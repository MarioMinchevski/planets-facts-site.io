import { useParams } from "react-router-dom"
import { PlanetNavItem } from "./PlanetNavItem"

const planetNavConfig = [
    {
        navItemNum: "01",
        navItemText: "Overview"
    },
    {
        navItemNum: "02",
        navItemText: "Internal Structure"
    },
    {
        navItemNum: "03",
        navItemText: "Surface Geology"
    },
]

export function PlanetNav() {

    const { name } = useParams()

    return (
        <>
            <ul className={`planet-nav__menu ${name?.toLowerCase()}`}>
                {planetNavConfig.map((el, idx) =>
                    <PlanetNavItem key={`${el.navItemText}-${idx}`} {...el} />
                )}
            </ul>
        </>
    )
}