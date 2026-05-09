import { Link } from '@inertiajs/react'
import { useState, useEffect } from 'react'

export default function Navbar() {

    const [mobileOpen, setMobileOpen] = useState(false)
    const [dropdownOpen, setDropdownOpen] = useState(false)
    const [deepDropdownOpen, setDeepDropdownOpen] = useState(false)

    // Mobile Menu Lock
    useEffect(() => {

        if (mobileOpen) {
            document.body.classList.add('mobile-nav-active')
        } else {
            document.body.classList.remove('mobile-nav-active')
        }

    }, [mobileOpen])

    return (

        <header id="header" className="header d-flex align-items-center sticky-top" dir='rtl'>

            <div className="container position-relative d-flex align-items-center justify-content-between">

                {/* LOGO */}
                <Link href="/" className="logo d-flex align-items-center me-auto me-xl-0">

                    <h1 className="sitename">
                        الواجهة
                    </h1>

                </Link>

                {/* NAV */}
                <nav id="navmenu" className="navmenu">

                    <ul>

                        <li>
                            <Link href="/">الرئيسية</Link>
                        </li>

                        <li>
                            <Link href="/about">من نحن</Link>
                        </li>

                        <li>
                            <Link href="/services">خدماتنا</Link>
                        </li>

                        <li>
                            <Link href="/portfolio">أعمالنا</Link>
                        </li>

                        <li>
                            <Link href="/pricing">الباقات</Link>
                        </li>

                        <li>
                            <Link href="#contact">تواصل معنا</Link>
                        </li>

                        {/* DROPDOWN */}
                        <li className={`dropdown ${dropdownOpen ? 'dropdown-active' : ''}`}>

                            <button
                                type="button"
                                className="dropdown-btn"
                                onClick={() => setDropdownOpen(!dropdownOpen)}
                            >

                                <span>المزيد</span>
                                <i className="bi bi-chevron-down"></i>

                            </button>

                            <ul>

                                <li><a href="#faq">الأسئلة الشائعة</a></li>

                                <li><a href="#testimonials">آراء العملاء</a></li>

                                <li className={`dropdown ${deepDropdownOpen ? 'dropdown-active' : ''}`}>

                                    <button
                                        type="button"
                                        className="dropdown-btn"
                                        onClick={() => setDeepDropdownOpen(!deepDropdownOpen)}
                                    >

                                        <span>تفاصيل الخدمات</span>
                                        <i className="bi bi-chevron-down"></i>

                                    </button>

                                    <ul>

                                        <li><a href="#">تصميم مواقع</a></li>
                                        <li><a href="#">متاجر إلكترونية</a></li>
                                        <li><a href="#">أنظمة إدارة</a></li>

                                    </ul>

                                </li>

                            </ul>

                        </li>

                    </ul>

                    {/* MOBILE TOGGLE */}
                    <button
                        className="mobile-nav-toggle d-xl-none"
                        onClick={() => setMobileOpen(!mobileOpen)}
                    >

                        <i className={`bi ${mobileOpen ? 'bi-x' : 'bi-list'}`}></i>

                    </button>

                </nav>

                {/* CTA BUTTON (IMPORTANT 🔥) */}
                <div className="header-social-links">

                    <a
                        href="https://www.facebook.com/eloghaa"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <i className="bi bi-facebook"></i>
                    </a>        <a
   href="https://wa.me/201044946388"
                           target="_blank"
                        rel="noreferrer"
                    >
                        <i className="bi bi-whatsapp"></i>
                    </a>

                </div>

            </div>

        </header>

    )
}