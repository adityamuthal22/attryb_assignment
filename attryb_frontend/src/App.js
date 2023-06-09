import "./App.css";
import MainRoutes from "./pages/MainRoutes";
import Navbar from "./pages/Navbar"
import Footer from "./pages/Footer"
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  
  return (
    <div className="App">
      <Navbar />
      <MainRoutes />
      <ToastContainer />
      <Footer />
    </div>
  );
}

export default App;
