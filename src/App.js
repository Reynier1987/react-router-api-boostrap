import { Routes, Route } from "react-router-dom";
import { About } from "./pages/About";
import { Home } from "./pages/Home";
import { Users } from "./pages/Users";
import { NavBar } from "./component/NavBar";
import { Search } from "./pages/Search";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/users/*" element={<Users />} />
        <Route path="/search" element={<Search/>}/>
      </Routes>
    </>
  );
}

export default App;
