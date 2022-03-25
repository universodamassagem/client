import "./styles.css"

const RedButton = ({children, size}) => {
    return (
        <button className={`RedButton RedButton--${size}`}> 
            {children}
        </button>

    )
}

export default RedButton