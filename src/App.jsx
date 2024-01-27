import Header from "./components/Header";
import "./App.css"
import routes from "./routes/index";
import {useRoutes} from "react-router-dom";
import Footer from "./components/Footer";

function App() {
    const element = useRoutes(routes);
    return (
      <div className="App">
          <Header/>
          {element}
          <Footer/>
      </div>
    );
}

export default App;
