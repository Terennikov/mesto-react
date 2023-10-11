const FormInput = (props) => {
    return (
      <>
        <input
          type={ props.type }
          id={ props.name }
          name={ props.name }
          placeholder={ props.placeholder }
          className={ `popup__input popup__input_type_${ props.name }` }
          minLength={ props.minlength }
          maxLength={ props.maxlength }
          required={ props.required }
        />
        <span className={ `popup__error` } id={`err-${props.name }`}></span>
      </>
    )
  }
  
  export default FormInput