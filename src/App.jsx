import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Logement from "./pages/Logement";
import NotFound from "./pages/NotFound";
import "./styles/App.css";
import {
    BrowserRouter as Router,
    Route,
    Routes,
  } from "react-router-dom";


const App = () => {
    return (
        <div className="App">
            <Router>
                <Header/>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/about" element={<About/>}/>
                    <Route path={"/Logement/:id"} element={<Logement/>}/>
                    <Route path="*" element={<NotFound/>}/>
                </Routes>
                <Footer/>
            </Router>
        </div>
    );
}

export default App;
