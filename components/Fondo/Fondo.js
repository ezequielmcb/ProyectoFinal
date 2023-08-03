import "./fondo.css"

function Fondo(props) {
    const { fon } = props;

    return (
        <div className="imgs">
            <div className="background"></div>
            <div className="img">
                <img src={fon} alt="Shower" />
            </div>
        </div>
    )
}

export default Fondo;