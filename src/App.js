import Welcome from "./components/Welcome";
import Counter from "./components/Counter";
import Conditional from "./components/Conditional";
import ListRendering from "./components/ListRendering";
import Styling from "./components/Styling";

import "./App.css";
import HelloWorld from "./components/HelloWorld/HelloWorld";
// import FormHandling from "./components/FormHandling";

import Navbar from "./components/Navbar";
import Homepage from "./pages/Homepage";
import AboutPage from "./pages/Aboutpage";
import ContactPage from "./pages/ContactPage";
import PostPage from "./pages/Postpage";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/about" element={<AboutPage />} />

        <Route path="/contact" element={<ContactPage />} />

        <Route path="/" element={<Homepage />} />

        <Route path="/post" element={<PostPage />} />
      </Routes>

      {/* <Welcome name="Hari" address="Kathmandu">
        <p>Hello</p>
      </Welcome> */}

      {/* <Welcome name="Hari" address="Kathmandu" /> */}
      {/* <Counter /> */}

      {/* <Conditional /> */}

      {/* <ListRendering /> */}

      {/* <Styling />

      <HelloWorld /> */}

      {/* <FormHandling /> */}

      {/* <Navbar />
      <Homepage />
      <AboutPage />
      <ContactPage /> */}
    </>
  );
}

export default App;
