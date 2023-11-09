import { CurrentUserContext } from "./CurrentUserContext"
import { useContext } from "react"

const Card = (props) => {
  const currentUser = useContext(CurrentUserContext)
  const isOwn = props.card.owner._id === currentUser.id
  const isLiked = props.card.likes.some(i => i._id === currentUser.id)
  const cardLikeButtonClassName = `elements__like-button ${ isLiked && "elements__like-button_activ" }`

  function handleClick() {
    props.onCardClick(props.card)
  }

  function handleLikeClick () {
    props.onCardLike(props.card)
  }

  function handleDeleteClick () {
    props.onCardDelete(props.card)
  }

  return (
    <>
    {isOwn && (<button type="button" onClick={handleDeleteClick} className="elements__delete-button"/> )}
      <img
        onClick={ handleClick }
        src={ props.card.link }
        alt={ props.card.name }
        className="elements__photo"
      />
      <div className="elements__container">
        <h2 className="elements__place">{ props.card.name }</h2>
        <div className="elements__like-container">
          <button className={ cardLikeButtonClassName } type="button" onClick={handleLikeClick}></button>
          <p className="elements__like-count">{ props.card.likes.length }</p>
        </div>
      </div>
    </>
  )
}

export default Card