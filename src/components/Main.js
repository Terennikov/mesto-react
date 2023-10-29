import React, { useContext } from "react"
import api from "../utils/Api"
import Card from "./Card"
import { CurrentUserContext } from "./CurrentUserContext"

const Main = (props) => {
  const currentUser = useContext(CurrentUserContext)
  
  return (
    <main className="main">

      <section className="profile">
        <div className="profile__avatar-container">
          <button onClick={ props.onEditAvatar } className="profile__avatar-edit"></button>
          <img className="profile__avatar" src={ currentUser && currentUser.avatar } alt="Аватар профиля"/>
        </div>

        <div className="profile__info">
          <h1 className="profile__name">{ currentUser && currentUser.name }</h1>
          <p className="profile__about">{ currentUser && currentUser.about }</p>
        </div>
        
        <button onClick={ props.onEditProfile } type="button"
                className="profile__edit-button profile__edit-button-link"></button>
        <button onClick={ props.onAddPlace } type="button" 
                className="profile__add-button"></button>
      </section>

      <section className="elements">
        { props.cards.map((card) => (
          <div className="elements__item" key={ card._id }>
            <Card
              card={ card }
              onCardClick={ props.onCardClick }
              isOwn={card.owner._id}
              onCardLike={props.onCardLike}
              onCardDelete={props.onCardDelete}
            />
          </div>
        )) }
      </section>

    </main>
  )
}

export default Main