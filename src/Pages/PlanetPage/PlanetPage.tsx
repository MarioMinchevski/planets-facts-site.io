import { useQuery } from "@tanstack/react-query";
import { Navigate, useParams } from "react-router-dom";
import { getSpecificPlanet } from "../../utils/getSpecificPlanet";
import { validPlanets } from "../../utils/globalVars";
import { PlanetInfoItemType, PlanetType } from "../../utils/types";
import { PlanetPreview } from "../../Layout/PlanetPreview/PlanetPreview";
import { PlanetDesc } from "../../Layout/PlanetDesc/PlanetDesc";
import { PlanetInfo } from "../../Layout/PlanetInfo/PlanetInfo";

export function PlanetPage() {
    const { name, section } = useParams<{ name: string; section?: string }>();

    console.log(section, '|', name);

    if (!validPlanets.includes(name!)) {
        return <Navigate to="/planet/Mercury" replace />;
    }

    const { data: specificPlanetData, isLoading, error } = useQuery<PlanetType>({
        queryKey: ['specificPlanetData', name],
        queryFn: () => {
            if (name) {
                return getSpecificPlanet(name);
            }
            throw new Error("Name parameter is missing");
        },
    });

    if (!specificPlanetData) {
        return <div>No data found</div>;
    }

    const planetInfoConfig: PlanetInfoItemType[] = [
        {
            title: 'Rotation',
            value: specificPlanetData.rotation
        },
        {
            title: 'Revolution Time',
            value: specificPlanetData.revolution
        },
        {
            title: 'Radius',
            value: specificPlanetData.radius
        },
        {
            title: 'Temeperature',
            value: specificPlanetData.temperature
        }
    ]

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error...</div>;

    return (
        <div className="planet-page">
            <div className="planet-page-main">
                <PlanetPreview {...specificPlanetData} />
                <div className="planet-overview-info">
                    <PlanetDesc
                        {...specificPlanetData}
                        currentSection={section || "overview"}
                    />
                </div>
            </div>
            <PlanetInfo infoItems={planetInfoConfig} />
        </div>
    );
}
