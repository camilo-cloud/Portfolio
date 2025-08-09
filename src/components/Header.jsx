import { useState, useEffect, useRef } from "react";
import "./Header.css";
import logo from "/src/assets/images/logo.jpg";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Ref to detect clicks outside the menu
    const navRef = useRef(null);

    // Function to toggle mobile menu visibility
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    // Close menu when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (navRef.current && !navRef.current.contains(event.target)) {
                setIsMenuOpen(false);
            }
        };

        // Only add listener when menu is open
        if (isMenuOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        }

        // Cleanup listener
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isMenuOpen]);

    return (
        <header>
            <div className="header__container">
                <div className="header__logo">
                    <a href="#" className="header__logo-link">
                        <img
                            className="header__logo-img"
                            src={logo}
                            alt="Portrait of Camilo Cuartas"
                        />
                        <h2 className="header__logo-text">CAMILO CUARTAS</h2>
                    </a>
                </div>

                {/* Mobile menu toggle button */}
                <button
                    className="header__menu-toggle"
                    onClick={toggleMenu}
                    aria-label="Toggle menu"
                >
                    ☰
                </button>

                {/* Navigation links */}
                <nav
                    ref={navRef}
                    className={`header__nav ${isMenuOpen ? "active" : ""}`}
                >
                    <ul className="header__nav-list">
                        <li className="header__nav-item">
                            <a href="#projects" onClick={() => setIsMenuOpen(false)}>PROJECTS</a>
                        </li>
                        <li className="header__nav-item">
                            <a href="#about" onClick={() => setIsMenuOpen(false)}>ABOUT</a>
                        </li>
                        <li className="header__nav-item">
                            <a href="#contact" onClick={() => setIsMenuOpen(false)}>CONTACT</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}
