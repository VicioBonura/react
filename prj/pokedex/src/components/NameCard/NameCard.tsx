import "./NameCard.css";
import PokeIcon from "../../assets/poke.webp";

type NameCardProps = {
    name: string;
    mainImageUrl: string;
    onClick?: () => void;
}

const NameCard = ({name, mainImageUrl, onClick}: NameCardProps) => {
    return  <div className="name-card--container" onClick={onClick} role="button" tabIndex={0}>
                <img className="name-card--image" src={mainImageUrl || PokeIcon} /><div className="name-card--title">{name}</div>
            </div>
}

export default NameCard;