import "./NameCard.css";

type NameCardProps = {
    name: string;
}

const NameCard = ({name}: NameCardProps) => {
    return  <div className="name-card--container">
                <div className="name-card--title">{name}</div>
            </div>
}

export default NameCard;