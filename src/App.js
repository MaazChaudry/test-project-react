import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {
  return (
    <>
      <Navbar title="texttupils" aboutText="AboutText Tupils" />
      <div className="container my-3">
        <TextForm heading="Enter The text to analyze below" />
      </div>
    </>
  );
}

export default App;
