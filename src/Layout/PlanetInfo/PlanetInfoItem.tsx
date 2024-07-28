import { PlanetInfoItemType } from "../../utils/types";

export function PlanetInfoItem({ title, value }: PlanetInfoItemType) {
    return (
        <div className="planet__info-item">
            <span className="info__item-title">{title}</span>
            <span className="info__item-text">{value}</span>
        </div>
    )
}