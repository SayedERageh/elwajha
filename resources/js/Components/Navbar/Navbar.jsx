import { Link, usePage } from '@inertiajs/react'
import { useState, useEffect } from 'react'

export default function Navbar() {

    const { serviceCategories = [] } = usePage().props

    const [mobileOpen, setMobileOpen] = useState(false)
    const [dropdownOpen, setDropdownOpen] = useState(false)
    const [deepDropdownOpen, setDeepDropdownOpen] = useState(null)

    // ==========================================
    // Mobile Menu Lock
    // ==========================================

    useEffect(() => {

        if (mobileOpen) {
            document.body.classList.add('mobile-nav-active')
        } else {
            document.body.classList.remove('mobile-nav-active')
        }

        return () => {
            document.body.classList.remove('mobile-nav-active')
        }

    }, [mobileOpen])


    // ==========================================
    // Close Mobile Menu
    // ==========================================

    const closeMobileMenu = () => {
        setMobileOpen(false)
        setDropdownOpen(false)
        setDeepDropdownOpen(null)
    }


    return (

        <header
            id="header"
            className="header d-flex align-items-center sticky-top"
            dir="rtl"
        >

            <div className="container position-relative d-flex align-items-center justify-content-between">


                {/* ==========================================
                    LOGO
                ========================================== */}

                <Link
                    href="/"
                    className="logo d-flex align-items-center me-auto me-xl-0"
                    onClick={closeMobileMenu}
                >

                    <h1 className="sitename">
                        الواجهة
                    </h1>

                </Link>


                {/* ==========================================
                    NAVIGATION
                ========================================== */}

                <nav
                    id="navmenu"
                    className={`navmenu ${mobileOpen ? 'mobile-nav-active' : ''}`}
                >

                    <ul>

                        {/* الرئيسية */}

                        <li>
                            <Link
                                href="/"
                                onClick={closeMobileMenu}
                            >
                                الرئيسية
                            </Link>
                        </li>


                        {/* من نحن */}

                        <li>
                            <Link
                                href="/about"
                                onClick={closeMobileMenu}
                            >
                                من نحن
                            </Link>
                        </li>


                        {/* ==========================================
                            الخدمات
                        ========================================== */}

                        <li
                            className={`dropdown ${dropdownOpen ? 'active' : ''}`}
                        >

                            <Link
                                href="/services"
                                onClick={(e) => {

                                    if (window.innerWidth < 1200) {
                                        e.preventDefault()
                                        setDropdownOpen(!dropdownOpen)
                                    }

                                }}
                            >

                                <span>
                                    خدماتنا
                                </span>

                                <i className="bi bi-chevron-down toggle-dropdown"></i>

                            </Link>


                            {/* SERVICES DROPDOWN */}

                            <ul>

                                {/* جميع الخدمات */}

                                <li>
                                    <Link
                                        href="/services"
                                        onClick={closeMobileMenu}
                                    >
                                        جميع الخدمات
                                    </Link>
                                </li>


                                {/* CATEGORIES */}

                                {serviceCategories.map((category) => (

                                    <li
                                        key={category.id}
                                        className={`dropdown ${
                                            deepDropdownOpen === category.id
                                                ? 'active'
                                                : ''
                                        }`}
                                    >

                                        <Link
                                            href="#"
                                            onClick={(e) => {

                                                if (window.innerWidth < 1200) {

                                                    e.preventDefault()

                                                    setDeepDropdownOpen(
                                                        deepDropdownOpen === category.id
                                                            ? null
                                                            : category.id
                                                    )

                                                }

                                            }}
                                        >

                                            <span>
                                                {category.name}
                                            </span>

                                            <i className="bi bi-chevron-down toggle-dropdown"></i>

                                        </Link>


                                        {/* SERVICES */}

                                        <ul>

                                            {category.services?.map((service) => (

                                                <li key={service.id}>

                                                    <Link
                                                        href={`/services/${service.slug}`}
                                                        onClick={closeMobileMenu}
                                                    >

                                                        {service.name}

                                                    </Link>

                                                </li>

                                            ))}

                                        </ul>

                                    </li>

                                ))}

                            </ul>

                        </li>


                        {/* أعمالنا */}

                        <li>
                            <Link
                                href="/portfolio"
                                onClick={closeMobileMenu}
                            >
                                أعمالنا
                            </Link>
                        </li>


                        {/* الباقات */}

                        <li>
                            <Link
                                href="/pricing"
                                onClick={closeMobileMenu}
                            >
                                الباقات
                            </Link>
                        </li>


                        {/* تواصل معنا */}

                        <li>
                            <Link
                                href="/contact"
                                onClick={closeMobileMenu}
                            >
                                تواصل معنا
                            </Link>
                        </li>


                        {/* المقالات */}

                        <li>
                            <Link
                                href="/blog"
                                onClick={closeMobileMenu}
                            >
                                المقالات
                            </Link>
                        </li>

                    </ul>


                    {/* ==========================================
                        MOBILE TOGGLE
                    ========================================== */}

                    <button
                        className="mobile-nav-toggle d-xl-none"
                        onClick={() => setMobileOpen(!mobileOpen)}
                        type="button"
                        aria-label="فتح القائمة"
                    >

                        <i
                            className={`bi ${
                                mobileOpen
                                    ? 'bi-x'
                                    : 'bi-list'
                            }`}
                        ></i>

                    </button>

                </nav>


                {/* ==========================================
                    SOCIAL LINKS
                ========================================== */}

                <div className="header-social-links">

                    {/* Facebook */}

                    <a
                        href="https://www.facebook.com/eloghaa"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="Facebook"
                    >

                        <i className="bi bi-facebook"></i>

                    </a>


                    {/* WhatsApp */}

                    <a
                        href="https://wa.me/201044946388"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="WhatsApp"
                    >

                        <i className="bi bi-whatsapp"></i>

                    </a>

                </div>

            </div>

        </header>

    )
}
  
