function Button(props) {
    return (
        <button onClick={props.handleDisplay}>
            {props.btnLabel}
        </button>
    );
}

export default Button;