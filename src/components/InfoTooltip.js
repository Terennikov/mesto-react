import PopupWithForm from './PopupWithForm'
import registerIcon from '../images/ok.svg'
import notRegisterIcon from '../images/notOk.svg'

const InfoTooltip = props => {
	const textValidate = 'Вы успешно зарегистрировались!'
	const textNotValidate = 'Что-то пошло не так! Попробуйте ещё раз.'

	return (
		<PopupWithForm
			isOpen={props.isOpen}
			onClose={props.onClose}
			name='infoTooltip'
			title={props.isValidateInfoTooltip ? textValidate : textNotValidate}
			icon={props.isValidateInfoTooltip ? registerIcon : notRegisterIcon}
		/>
	)
}

export default InfoTooltip