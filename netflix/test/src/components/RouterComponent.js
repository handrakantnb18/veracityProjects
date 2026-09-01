import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function Home() {

}

function About() {

}

function Contact() {

}

export function RouterComponent() {

    return(
        <BrowserRouter>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
            </nav>

            <Routes>
                <Route path="/"  element={<Home />} />
                <Route path="/about"  element={<About />} />
                <Route path="/"  element={<Contact />} />
            </Routes>
        </BrowserRouter>
    );
}