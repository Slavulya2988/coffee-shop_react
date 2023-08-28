import './app.css';
import '../header/header';
import Header from '../header/header';
import About from '../about/about';
import Find from '../find/find';
import Catalog from '../catalog/catalog';
import Footer from '../footer/footer';

function App() {
    return (
        <div className="app">
            <div className="wrapper">
                <Header/>
                <main className="page">
                    <About/>
                    <Find/>
                    <Catalog/>
                </main>
            <Footer/>
            </div>

        </div>
    )
}

export default App;
