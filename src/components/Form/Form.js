import './Form.css';
function Form(props) {
    return (
        <div className="form">
            <h2 className="form__title">{props.title}</h2>
            <form className="form__container" onSubmit={props.handleSubmit}>
                {props.children}
                <button type="submit" className= {`form__save ${props.disabledButton ? '' : 'form__save_disabled'} `}  disabled={!props.disabledButton} >{props.buttonText}</button>
            </form>
        </div>
    )
}
export default Form