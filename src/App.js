import About from "./Components/About";
import Contact from "./Components/Contact";
import Experience from "./Components/Experience";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Portfolio from "./Components/Portfolio";
import Socialinks from "./Components/Socialinks";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Home></Home>
      <Socialinks></Socialinks>
      <About></About>
      <Portfolio></Portfolio>
      <Experience></Experience>
      <Contact></Contact>
    </div>
  );
}

export default App;
