import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export default function Header() {
    const category = useSelector((state) => state.category || []);

    return (
        <nav className="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
            <div className="container">
                {/* Use Link but open external link with window.open */}
                <Link
                    className="navbar-brand"
                    to="/"
                    onClick={() => window.open('https://www.linkedin.com/in/abhishekthakur22', '_blank', 'noopener noreferrer')}
                >
                    TazaKhabar
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        {/* Render categories */}
                        {category.length > 0 ? (
                            category.map((cat, index) => (
                                <li className="nav-item text-capitalize" key={index}>
                                    <Link className="nav-link" to={`/category/${cat}`}>
                                        {cat}
                                    </Link>
                                </li>
                            ))
                        ) : (
                            <li className="nav-item">
                                <span className="nav-link text-muted">No categories available</span>
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        </nav>
    );
}
