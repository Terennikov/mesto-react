import PopupWithForm from "./PopupWithForm"
import FormInput from "./FormInput"
import FormSubmitButton from "./FormSubmitButton"

const EditProfilePopup = (props) => {
  return (
    <PopupWithForm
      isOpen={ props.isOpen }
      onClose={ props.onClose }
      title="Редактировать профиль"
      name="edit"
      buttonText={"Сохранить"}
    >
      <FormInput
        placeholder="Имя"
        required="required"
        type="text"
        name="name"
        minLength="2"
        maxLength="40"
      />
      <FormInput
        placeholder="Занятие"
        required="required"
        type="text"
        name="about"
        minLength="2"
        maxLength="200"
      />
    </PopupWithForm>
  )
}

export default EditProfilePopup