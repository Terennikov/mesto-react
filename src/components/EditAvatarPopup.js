import PopupWithForm from "./PopupWithForm"
import FormInput from "./FormInput"
import FormSubmitButton from "./FormSubmitButton"

const EditAvatarPopup = (props) => {
  return (
    <PopupWithForm
      isOpen={ props.isOpen }
      onClose={ props.onClose }
      title="Обновить аватар"
      name="avatar"
      buttonText={"Сохранить"}
    >
      <FormInput
        type="url"
        name="avtar"
        placeholder="Ссылка на картинку"
        required="required"
      />
    </PopupWithForm>
  )
}

export default EditAvatarPopup