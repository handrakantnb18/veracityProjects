import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

export function RouterComponent() {

    return(
        <BrowserRouter>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
            </nav>

            <Routes>
                <Route path="/"  />
            </Routes>
        </BrowserRouter>
    );
}