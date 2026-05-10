import { useEffect, useState, useRef } from 'react'
import axios from 'axios'

export default function Portfolio() {

    const isotope = useRef(null)

    const [projects, setProjects] = useState([])
    const [categories, setCategories] = useState([])
    const [filterKey, setFilterKey] = useState('*')

    // 📦 fetch data
    useEffect(() => {

        axios.get('http://127.0.0.1:8000/api/categories')
            .then(res => setCategories(res.data))

        axios.get('http://127.0.0.1:8000/api/portfolios')
            .then(res => setProjects(res.data))

    }, [])

    // 🔥 Isotope init
    useEffect(() => {

        if (window.Isotope) {

            const grid = document.querySelector('.portfolio-grid')

            if (grid) {
                isotope.current = new window.Isotope(grid, {
                    itemSelector: '.portfolio-item',
                    layoutMode: 'fitRows'
                })
            }
        }

        return () => isotope.current?.destroy()

    }, [projects])

    // 🔥 filter
    useEffect(() => {
        if (isotope.current) {
            isotope.current.arrange({ filter: filterKey })
        }
    }, [filterKey])

    return (
        <section id="portfolio" className="portfolio section">

            {/* Title */}
            <div className="container section-title" data-aos="fade-up">
                <span className="description-title">Portfolio</span>
                <h2>Portfolio</h2>
                <p>
                    Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit
                </p>
            </div>

            <div className="container" data-aos="fade-up" data-aos-delay="100">

                {/* Filters */}
                <div className="portfolio-filters-wrapper" data-aos="fade-up">

                    <ul className="portfolio-filters isotope-filters">

                        <li
                            className={filterKey === '*' ? 'filter-active' : ''}
                            onClick={() => setFilterKey('*')}
                        >
                            All Projects
                        </li>

                        {categories.map(cat => (
                            <li
                                key={cat.id}
                                className={filterKey === `.filter-${cat.slug}` ? 'filter-active' : ''}
                                onClick={() => setFilterKey(`.filter-${cat.slug}`)}
                            >
                                {cat.name}
                            </li>
                        ))}

                    </ul>

                </div>

                {/* Grid */}
                <div className="row gy-4 portfolio-grid isotope-container" data-aos="fade-up" data-aos-delay="200">

                    {projects.map(project => (

                        <div
                            key={project.id}
                            className={`col-lg-4 col-md-6 portfolio-item isotope-item filter-${project.category?.slug}`}
                        >

                            <div className="portfolio-card">

                                <div className="image-container">

                                    <img
                                        src={`http://127.0.0.1:8000/uploads/${project.image}`}
                                        className="img-fluid"
                                        alt={project.title}
                                        loading="lazy"
                                    />

                                    <div className="overlay">

                                        <div className="overlay-content">

                                            <a
                                                href={`http://127.0.0.1:8000/uploads/${project.image}`}
                                                className="glightbox zoom-link"
                                                title={project.title}
                                            >
                                                <i className="bi bi-zoom-in"></i>
                                            </a>

                                            <a
                                                href={project.demo_url || `/uploads/${project.slug}`}
                                                className="details-link"
                                            >
                                                <i className="bi bi-arrow-right"></i>
                                            </a>

                                        </div>

                                    </div>

                                </div>

                                <div className="content">
                                    <h3>{project.title}</h3>
                                    <p>{project.short_description}</p>
                                </div>

                            </div>

                        </div>

                    ))}

                </div>

            </div>

        </section>
    )
}