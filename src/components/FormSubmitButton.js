const FormSubmitButton = (props) => {

    console.log(props.buttonText)
    return (
      <button type="submit" className="popup__submit-button">
         { props.buttonText }
      </button>
    )
  }
  
  export default FormSubmitButton