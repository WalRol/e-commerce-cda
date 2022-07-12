import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';

import Main from './components/Main/Main';

function App() {
    return (
        <>
            <Header />
            <Main saludo="Bienvenidos" numero={10} />
            <Footer />
        </>
    );
}

export default App;
