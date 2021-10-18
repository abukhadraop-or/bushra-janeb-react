import Home from "components/homePage/HomePage";
import "./App.css";
import Nav from "./components/navbar/Navbar";
function App() {
  const links = [
    { name: "Home", to: "/home", id: 1 },
    { name: "SignIn", to: "/signUp", id: 2 },
    { name: "SignUp", to: "/login", id: 3 },
  ];
  return (
    <>
      <Nav links={links} />
      <Home />
    </>
  );
}
export default App;
