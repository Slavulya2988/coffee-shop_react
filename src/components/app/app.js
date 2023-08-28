import './app.css';
import '../header/header';
import Header from '../header/header';
import About from '../about/about';
import Find from '../find/find';
import Catalog from '../catalog/catalog';
import Footer from '../footer/footer';

function App() {

    const data = [
        {productName: 'Aromatico', productType: 'Coffee', productWeight: '1 kg', country: 'Brazil', price: '6.99', id: 1},
        {productName: 'Puzanno', productType: 'Coffee', productWeight: '1 kg', country: 'Brazil', price: '6.99', id: 2},
        {productName: 'Truffalo', productType: 'Coffee', productWeight: '1 kg', country: 'Kenya', price: '8.99', id: 3},
        {productName: 'Basttardo', productType: 'Coffee', productWeight: '1 kg', country: 'Kenya', price: '8.99', id: 4},
        {productName: 'Grinadgo', productType: 'Coffee', productWeight: '1 kg', country: 'Columbia', price: '16.99', id: 5},
        {productName: 'Lafaretto', productType: 'Coffee', productWeight: '1 kg', country: 'Columbia', price: '16.99', id: 6}
    ]


    return (
        <div className="app">
            <div className="wrapper">
                <Header/>
                <main className="page">
                    <About/>
                    <Find/>
                    <Catalog data = {data}/>
                </main>
                <Footer/>
            </div>

        </div>
    )
}

export default App;
