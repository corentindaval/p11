import Header from '../components/header.jsx'
import Partie_erreur from '../components/erreur.jsx'
import Footer from '../components/footer.jsx'


function Page_erreur() {
    console.log("test 404");
    return (
        <div>
            <Header />
            <Partie_erreur />
            <Footer />
        </div>
    )
}


export default Page_erreur