import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

export default function Header() {
    let category = useSelector(state => state.category)
    return (
        <nav className="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
            <div className="container">
                <Link className="navbar-brand" to={'https://www.youtube.com/@mechieTech'}>News</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        {
                            category.length > 0 && category.map((cat, index) => (
                                <li className="nav-item text-capitalize" key={index}>
                                    <Link className="nav-link" to={`/category/${cat}`}>{cat}</Link>
                                </li>
                            ))
                        }
                        
                    </ul>
                </div>
            </div>
        </nav>
    )
}
