import React from "react"
import api from "../utils/Api"
import Card from "./Card"

const Main = (props) => {

  const [ currentUser, setCurrentUser ] = React.useState(null)
  const [ cards, setCards ] = React.useState([])


  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const [ userInfoRes, cardsInfoRes ] = await Promise.all([
          api.getUser(),
          api.getCard()
        ])
        setCurrentUser({
          name: userInfoRes.name,
          about: userInfoRes.about,
          avatar: userInfoRes.avatar,
          id: userInfoRes._id
        })
        setCards(cardsInfoRes)
      } catch ( err ) {
        console.error(err)
      }
    }
    fetchData()
  }, [])

  return (
    <main className="main">

      <section className="profile">

        <div className="profile__avatar-container">
          <button onClick={ props.onEditAvatar } className="profile__avatar-edit"></button>
          <img className="profile__avatar" src={ currentUser && currentUser.avatar } alt="Аватар профиля"/>
        </div>

        <div className="profile__info">
          <h1 className="profile__name">{ currentUser && currentUser.name }</h1>
          <button onClick={ props.onEditProfile } type="button"
                  className="profile__edit-button profile__edit-button-link"></button>
          <p className="profile__about">{ currentUser && currentUser.about }</p>
        </div>

        <button onClick={ props.onAddPlace } type="button" className="profile__add-button"></button>

      </section>

      <section className="elements">
        { cards.map((card) => (
          <div className="elements__item" key={ card._id }>
            <Card
              card={ card }
              onCardClick={ props.onCardClick }
            />
          </div>
        )) }
      </section>

    </main>
  )
}

export default Main