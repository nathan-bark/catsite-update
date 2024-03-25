import './Button.styles.scss'

const Button = ({onClick, buttonText}) => {
    return (
        <button className='btn-main' onClick={onClick}>{buttonText}</button>
    )
}

export default Button;