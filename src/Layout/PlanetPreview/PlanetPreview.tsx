import { PlanetPreviewType } from "../../utils/types";

export function PlanetPreview({ images }: PlanetPreviewType) {
    const { geology, internal, planet } = images

    return (
        <>
            <div className="planet-preview-image-box">
                <img src={planet} alt="" />
            </div>
        </>
    )
}   