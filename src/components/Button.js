const Button = ({onClick, children, btnStyle, btnSize, className}) => {
    const styles = ['btn-primary', 'btn-outline'];
    const sizes = ['btn-medium', 'btn-large'];
    
    const checkBtnStyle = styles.includes(btnStyle) ? btnStyle : styles[0];
    const checkBtnSize = sizes.includes(btnSize) ? btnSize : sizes[0];

    return (
        <button onClick={onClick} className={`${checkBtnStyle} ${checkBtnSize} ${className ? `btn ${className}` : 'btn'}`}>{children}</button>
    );
}

export default Button;