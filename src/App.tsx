import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import CheckOut from "./pages/CheckOut";
import Contact from "./pages/Contact";

import Header from "./components/layouts/header";
import Footer from "./components/layouts/footer";

function App() {
    return (
        <div>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/checkout" element={<CheckOut />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
            <Footer />
        </div>
    );
}

export default App;
