import { useQuery } from "@tanstack/react-query"
import { fetchAllPLanets } from "../../utils/getAllPlanets"
import { NavbarItem } from "./NavbarItem"

export function Navbar() {
    const { data: allPlanets, error, isLoading } = useQuery({
        queryKey: ['planetsData'],
        queryFn: fetchAllPLanets
    })

    if (error) return <div>Error loading</div>
    if (isLoading) return <div>Loading...</div>

    return (
        <>
            <nav className="navbar">
                <h1>the planets</h1>
                <ul className="navbar__menu">
                    {allPlanets?.map((el, idx) =>
                        <NavbarItem key={`${el.name}-${idx}`} {...el} />
                    )}
                </ul>
            </nav>
        </>
    )
}