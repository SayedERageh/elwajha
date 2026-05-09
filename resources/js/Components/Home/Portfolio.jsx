import { useEffect, useRef, useState } from 'react'

export default function Portfolio() {

    const isotope = useRef(null)
    const [filterKey, setFilterKey] = useState('*')

    useEffect(() => {

        // GLightbox
        if (window.GLightbox) {
            window.GLightbox({
                selector: '.glightbox'
            })
        }

        // Isotope
        if (window.Isotope) {

            const grid = document.querySelector('.portfolio-grid')

            if (grid) {
                isotope.current = new window.Isotope(grid, {
                    itemSelector: '.portfolio-item',
                    layoutMode: 'fitRows'
                })
            }
        }

        return () => {
            if (isotope.current) {
                isotope.current.destroy()
            }
        }

    }, [])

    useEffect(() => {

        if (isotope.current) {
            isotope.current.arrange({
                filter: filterKey
            })
        }

    }, [filterKey])

    return (
        <section id="portfolio" className="portfolio section">

            {/* Section Title */}
            <div className="container section-title" data-aos="fade-up">
                <span className="description-title">Portfolio</span>
                <h2>Portfolio</h2>
                <p>
                    Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit
                </p>
            </div>

            <div className="container" data-aos="fade-up" data-aos-delay="100">

                <div className="portfolio-filters-wrapper" data-aos="fade-up" data-aos-delay="100">

                    <ul className="portfolio-filters">

                        <li
                            className={filterKey === '*' ? 'filter-active' : ''}
                            onClick={() => setFilterKey('*')}
                        >
                            All Projects
                        </li>

                        <li
                            className={filterKey === '.filter-branding' ? 'filter-active' : ''}
                            onClick={() => setFilterKey('.filter-branding')}
                        >
                            Branding
                        </li>

                        <li
                            className={filterKey === '.filter-web' ? 'filter-active' : ''}
                            onClick={() => setFilterKey('.filter-web')}
                        >
                            Web Design
                        </li>

                        <li
                            className={filterKey === '.filter-print' ? 'filter-active' : ''}
                            onClick={() => setFilterKey('.filter-print')}
                        >
                            Print Design
                        </li>

                        <li
                            className={filterKey === '.filter-motion' ? 'filter-active' : ''}
                            onClick={() => setFilterKey('.filter-motion')}
                        >
                            Motion
                        </li>

                    </ul>

                </div>

                <div
                    className="row gy-4 portfolio-grid"
                    data-aos="fade-up"
                    data-aos-delay="200"
                >

                    {/* Item 1 */}
                    <div className="col-lg-4 col-md-6 portfolio-item filter-branding">

                        <div className="portfolio-card">

                            <div className="image-container">

                                <img
                                    src="/assets/img/portfolio/portfolio-3.webp"
                                    className="img-fluid"
                                    alt="Brand Identity"
                                    loading="lazy"
                                />

                                <div className="overlay">

                                    <div className="overlay-content">

                                        <a
                                            href="/assets/img/portfolio/portfolio-3.webp"
                                            className="glightbox zoom-link"
                                            title="Brand Identity Project"
                                        >
                                            <i className="bi bi-zoom-in"></i>
                                        </a>

                                        <a
                                            href="/portfolio-details"
                                            className="details-link"
                                        >
                                            <i className="bi bi-arrow-right"></i>
                                        </a>

                                    </div>

                                </div>

                            </div>

                            <div className="content">
                                <h3>Brand Identity</h3>
                                <p>Corporate branding and visual identity system</p>
                            </div>

                        </div>

                    </div>

                    {/* Item 2 */}
                    <div className="col-lg-4 col-md-6 portfolio-item filter-web">

                        <div className="portfolio-card">

                            <div className="image-container">

                                <img
                                    src="/assets/img/portfolio/portfolio-7.webp"
                                    className="img-fluid"
                                    alt="E-commerce Platform"
                                    loading="lazy"
                                />

                                <div className="overlay">

                                    <div className="overlay-content">

                                        <a
                                            href="/assets/img/portfolio/portfolio-7.webp"
                                            className="glightbox zoom-link"
                                            title="E-commerce Platform"
                                        >
                                            <i className="bi bi-zoom-in"></i>
                                        </a>

                                        <a
                                            href="/portfolio-details"
                                            className="details-link"
                                        >
                                            <i className="bi bi-arrow-right"></i>
                                        </a>

                                    </div>

                                </div>

                            </div>

                            <div className="content">
                                <h3>E-commerce Platform</h3>
                                <p>Modern online shopping experience</p>
                            </div>

                        </div>

                    </div>

                    {/* Item 3 */}
                    <div className="col-lg-4 col-md-6 portfolio-item filter-print">

                        <div className="portfolio-card">

                            <div className="image-container">

                                <img
                                    src="/assets/img/portfolio/portfolio-portrait-5.webp"
                                    className="img-fluid"
                                    alt="Magazine Design"
                                    loading="lazy"
                                />

                                <div className="overlay">

                                    <div className="overlay-content">

                                        <a
                                            href="/assets/img/portfolio/portfolio-portrait-5.webp"
                                            className="glightbox zoom-link"
                                            title="Magazine Design"
                                        >
                                            <i className="bi bi-zoom-in"></i>
                                        </a>

                                        <a
                                            href="/portfolio-details"
                                            className="details-link"
                                        >
                                            <i className="bi bi-arrow-right"></i>
                                        </a>

                                    </div>

                                </div>

                            </div>

                            <div className="content">
                                <h3>Magazine Design</h3>
                                <p>Editorial layout and typography</p>
                            </div>

                        </div>

                    </div>

                    {/* Item 4 */}
                    <div className="col-lg-4 col-md-6 portfolio-item filter-motion">

                        <div className="portfolio-card">

                            <div className="image-container">

                                <img
                                    src="/assets/img/portfolio/portfolio-8.webp"
                                    className="img-fluid"
                                    alt="Motion Graphics"
                                    loading="lazy"
                                />

                                <div className="overlay">

                                    <div className="overlay-content">

                                        <a
                                            href="/assets/img/portfolio/portfolio-8.webp"
                                            className="glightbox zoom-link"
                                            title="Motion Graphics"
                                        >
                                            <i className="bi bi-zoom-in"></i>
                                        </a>

                                        <a
                                            href="/portfolio-details"
                                            className="details-link"
                                        >
                                            <i className="bi bi-arrow-right"></i>
                                        </a>

                                    </div>

                                </div>

                            </div>

                            <div className="content">
                                <h3>Motion Graphics</h3>
                                <p>Animated visual storytelling</p>
                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </section>
    )
}