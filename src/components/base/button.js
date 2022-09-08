import "./button.css"
const button = ({ onClick }) => {



    return (

        <div className="new" onClick={onClick}>
            <p>+</p>
        </div>
    )
}

export default button