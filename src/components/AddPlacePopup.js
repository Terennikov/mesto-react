import PopupWithForm from "./PopupWithForm"
import FormInput from "./FormInput"
import FormSubmitButton from "./FormSubmitButton"

const AddPlacePopup = (props) => {
  return (
    <PopupWithForm
      isOpen={ props.isOpen }
      onClose={ props.onClose }
      buttonText={"Создать"}
      title="Новое место"
      name="add"
    >
      <FormInput
        placeholder="Название"
        required="required"
        type="text"
        name="card-name"
        minLength="2"
        maxLength="30"
      />
      <FormInput
        placeholder="Ссылка на картинку"
        required="required"
        type="url"
        name="card-url"
      />
    
    </PopupWithForm>
  )
}

export default AddPlacePopup