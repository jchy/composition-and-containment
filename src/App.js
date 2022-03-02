import { useState } from "react";
import { Form } from "./Form/form";
import "./styles.css";

const initState = {
  name: "",
  password: ""
};

export default function App() {
  const [userData, setUserData] = useState(initState);

  const { name, password } = userData;

  const handleUserInput = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userData);
  };

  return (
    <div className="App">
      <h3>Composition and Containment</h3>
      <div>
        <Form handleSubmit={handleSubmit}>
          <input
            placeholder="name"
            type="text"
            name="name"
            value={name}
            onChange={handleUserInput}
          />
          <br />
          <input
            placeholder="password"
            type="password"
            name="password"
            value={password}
            onChange={handleUserInput}
          />
          <br />
          <input type="submit" />
        </Form>
      </div>
    </div>
  );
}
