const Card = (props) => {

  function handleClick() {
    props.onCardClick(props.card)
  }
  return (
    <>
      <button
        type="button"
        className="elements__delete-button"
      />
      <img
        onClick={handleClick}
        src={ props.card.link }
        alt={ props.card.name }
        className="elements__photo"
      />
      <div className="elements__container">
        <h2 className="elements__place">{ props.card.name }</h2>
        <div className="elements__like-container">
          <button className="elements__like-button" type="button"></button>
          <p className="elements__like-count">{ props.card.likes.length }</p>
        </div>
      </div>
    </>
  )
}

export default Card