import './App.scss';
import Router from './Router/Router';

function App() {

    // const name = "Axel Carandang";
    // const element = <h1>Yo {name}</h1>;

    return (
        <div className="App">
            <Router/>
            {/* <header className="App-header">
             <img src={logo} className="App-logo" alt="logo" />
             <p>
             {element}
             <Hello name="Axel Carandang" />
             <Card title="OK" description="trop de puissance" image={bee} imagealt="LOGO"/>
             <JsxExemple />

             </p>
             </header> */}
        </div>
    );
}

export default App;
