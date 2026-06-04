import { BrowserRouter } from "react-router-dom";
import NavigationRouter from "./MachineCoding/navbar/NavigationRouter";
import Navbar from "./MachineCoding/navbar/Navbar";
import './style.css'

const App = () => {
  return (
    <BrowserRouter>
      <div className="navbar__container">
        <Navbar />
        <NavigationRouter />
      </div>
    </BrowserRouter>
  );
};

export default App;
