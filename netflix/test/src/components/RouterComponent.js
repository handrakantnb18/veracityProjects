import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

export function RouterComponent() {

    return(
        <BrowserRouter>
            <nav>
                <link to="/">Home</link>
                <link to="/about">About</link>
                <link to="/contact">Contact</link>
            </nav>

            <Routes>
                <Route path="/"  />
            </Routes>
        </BrowserRouter>
    );
}