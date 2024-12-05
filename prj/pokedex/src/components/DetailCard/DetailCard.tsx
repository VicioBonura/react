import './DetailCard.css';

const DetailCard = (props: PokemonDetailResult) => {
  return (
    <div className="DetailCard">
      <h2>{props.name}</h2>
      <p>Weight: {props.weight}</p>
      <img src={props.mainImageUrl} alt={props.name} />
    </div>
  );
};

export default DetailCard;