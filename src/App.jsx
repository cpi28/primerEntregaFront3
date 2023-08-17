import { useState } from "react";
import reactLogo from "./assets/react.svg";
import Form from "./components/Form";
import Card from "./components/Card";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const [submittedData, setSubmittedData] = useState();

  const handleSubmit = (formData) => {
    setSubmittedData(formData);
    console.log(formData);
  };

  return (
    <>
      <div>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Formulario React</h1>
      <div className="form">
        <Form onSubmit={handleSubmit} />
      </div>
      {submittedData && (
        <div className="submitted-data">
          <Card data={submittedData} />
        </div>
      )}
      <Footer />
    </>
  );
}

export default App;
