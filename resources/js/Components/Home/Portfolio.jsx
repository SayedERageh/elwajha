import { useEffect, useState, useRef } from 'react'
import axios from 'axios'

export default function Portfolio() {

    const isotope = useRef(null)

    const [projects, setProjects] = useState([])
    const [categories, setCategories] = useState([])
    const [filterKey, setFilterKey] = useState('*')

    // 🔥 API URL
    const API_URL = import.meta.env.VITE_APP_URL

    // 📦 Fetch Data
    useEffect(() => {

        const fetchData = async () => {

            try {

                const [categoriesRes, projectsRes] = await Promise.all([
                    axios.get(`${API_URL}/api/categories`),
                    axios.get(`${API_URL}/api/portfolios`)
                ])

                setCategories(categoriesRes.data)
                setProjects(projectsRes.data)

            } catch (error) {

                console.error('Error fetching data:', error)

            }

        }

        fetchData()

    }, [API_URL])

    // 🔥 Isotope Init
    useEffect(() => {

        if (!projects.length) return

        const grid = document.querySelector('.portfolio-grid')

        if (window.Isotope && grid) {

            isotope.current = new window.Isotope(grid, {
                itemSelector: '.portfolio-item',
                layoutMode: 'fitRows'
            })

        }

        return () => {

            if (isotope.current) {
                isotope.current.destroy()
            }

        }

    }, [projects])

    // 🔥 Filter
    useEffect(() => {

        if (isotope.current) {

            isotope.current.arrange({
                filter: filterKey
            })

        }

    }, [filterKey])

    return (

        <section id="portfolio" className="portfolio section">

            {/* Title */}
            <div
                className="container section-title"
                data-aos="fade-up"
            >

                <span className="description-title">
                    ســابــقــة الاعـــمــال
                </span>

                <h2>
                    ســابــقــة الاعــمــال
                </h2>

                <p>
                    كل مشروع قمنا بتنفيذه يمثل قصة نجاح جديدة مع شركة الواجهة، حيث نجمع بين الإبداع، الأداء، والتصميم الاحترافي لتحقيق أفضل تجربة رقمية لعملائنا.
                </p>

            </div>

            <div
                className="container"
                data-aos="fade-up"
                data-aos-delay="100"
            >

                {/* Filters */}
                <div
                    className="portfolio-filters-wrapper"
                    data-aos="fade-up"
                >

                    <ul className="portfolio-filters isotope-filters">

                        <li
                            className={filterKey === '*' ? 'filter-active' : ''}
                            onClick={() => setFilterKey('*')}
                        >
                            All Projects
                        </li>

                        {categories.map((cat) => (

                            <li
                                key={cat.id}
                                className={
                                    filterKey === `.filter-${cat.slug}`
                                        ? 'filter-active'
                                        : ''
                                }
                                onClick={() =>
                                    setFilterKey(`.filter-${cat.slug}`)
                                }
                            >
                                {cat.name}
                            </li>

                        ))}

                    </ul>

                </div>

                {/* Grid */}
                <div
                    className="row gy-4 portfolio-grid isotope-container"
                    data-aos="fade-up"
                    data-aos-delay="200"
                >

                    {projects.map((project) => (

                        <div
                            key={project.id}
                            className={`col-lg-4 col-md-6 portfolio-item isotope-item filter-${project.category?.slug}`}
                        >

                            <div className="portfolio-card">

                                {/* Image */}
                                <div className="image-container">

                                    <img
                                        src={`${API_URL}/uploads/${project.image}`}
                                        className="img-fluid"
                                        alt={project.title}
                                        loading="lazy"
                                    />

                                    {/* Overlay */}
                                    <div className="overlay">

                                        <div className="overlay-content">

                                            {/* Zoom */}
                                            <a
                                                href={`${API_URL}/uploads/${project.image}`}
                                                className="glightbox zoom-link"
                                                title={project.title}
                                            >
                                                <i className="bi bi-zoom-in"></i>
                                            </a>

                                            {/* Details */}
                                            <a
                                                href={
                                                    project.demo_url
                                                        ? project.demo_url
                                                        : '#'
                                                }
                                                className="details-link"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <i className="bi bi-arrow-right"></i>
                                            </a>

                                        </div>

                                    </div>

                                </div>

                                {/* Content */}
                                <div className="content">

                                    <h3>
                                        {project.title}
                                    </h3>

                                    <p>
                                        {project.short_description}
                                    </p>

                                </div>

                            </div>

                        </div>

                    ))}

                </div>

            </div>

        </section>

    )

}