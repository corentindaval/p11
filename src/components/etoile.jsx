import etoilepleine from '../assets/etoile_pleine.png'
import etoilevide from '../assets/etoile_vide.png'


function Etoiles(props) {

    const { nbetoiles } = props;
    if (nbetoiles == 0) {
        return (
            <span id="etoiles">
                <img className="etoile" src={etoilevide} />
                <img className="etoile" src={etoilevide} />
                <img className="etoile" src={etoilevide} />
                <img className="etoile" src={etoilevide} />
                <img className="etoile" src={etoilevide} />
            </span>
        )
    } else if (nbetoiles == 1) {
        return (
            <span id="etoiles">
                <img className="etoile" src={etoilepleine} />
                <img className="etoile" src={etoilevide} />
                <img className="etoile" src={etoilevide} />
                <img className="etoile" src={etoilevide} />
                <img className="etoile" src={etoilevide} />
            </span>
        )
    } else if (nbetoiles == 2) {
        return (
            <span id="etoiles">
                <img className="etoile" src={etoilepleine} />
                <img className="etoile" src={etoilepleine} />
                <img className="etoile" src={etoilevide} />
                <img className="etoile" src={etoilevide} />
                <img className="etoile" src={etoilevide} />
            </span>
        )
    } else if (nbetoiles == 3) {
        return (
            <span id="etoiles">
                <img className="etoile" src={etoilepleine} />
                <img className="etoile" src={etoilepleine} />
                <img className="etoile" src={etoilepleine} />
                <img className="etoile" src={etoilevide} />
                <img className="etoile" src={etoilevide} />
            </span>
        )
    } else if (nbetoiles == 4) {
        return (
            <span id="etoiles">
                <img className="etoile" src={etoilepleine} />
                <img className="etoile" src={etoilepleine} />
                <img className="etoile" src={etoilepleine} />
                <img className="etoile" src={etoilepleine} />
                <img className="etoile" src={etoilevide} />
            </span>
        )
    } else if (nbetoiles == 5) {
        return (
            <span id="etoiles">
                <img className="etoile" src={etoilepleine} />
                <img className="etoile" src={etoilepleine} />
                <img className="etoile" src={etoilepleine} />
                <img className="etoile" src={etoilepleine} />
                <img className="etoile" src={etoilepleine} />
            </span>
        )
    }
}

export default Etoiles