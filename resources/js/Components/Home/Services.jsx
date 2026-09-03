import { useEffect } from 'react'

export default function Services({ categories = [] }) {

    const API_URL = import.meta.env.VITE_APP_URL

    useEffect(() => {

        // إعادة تشغيل AOS بعد تحميل الخدمات
        if (window.AOS) {
            window.AOS.refresh()
        }

        // تفعيل GLightbox
        if (window.GLightbox) {
            window.GLightbox({
                selector: '.glightbox'
            })
        }

    }, [categories])


    return (

        <section
            id="services"
            className="services section"
        >

            {/* =====================================================
                PAGE TITLE
            ====================================================== */}

            <div
                className="container section-title"
                data-aos="fade-up"
            >

                <span className="description-title">
                    خــدمــاتــنــا
                </span>

                <h2>
                    خــدمــاتــنــا
                </h2>

                <p>
                    نقدم مجموعة متكاملة من الخدمات الرقمية
                    لمساعدة الشركات والأفراد على تطوير أعمالهم
                    وتحقيق حضور احترافي ومميز على الإنترنت.
                </p>

            </div>


            {/* =====================================================
                CATEGORIES
            ====================================================== */}

            <div className="container">

                {categories.map((category) => (

                    <div
                        key={category.id}
                        className="services-category"
                        data-aos="fade-up"
                    >

                        {/* =================================================
                            CATEGORY TITLE
                        ================================================== */}

                        <div className="section-title mb-4">

                            <span className="description-title">
                                {category.name}
                            </span>

                            <h2>
                                {category.name}
                            </h2>

                        </div>


                        {/* =================================================
                            SERVICES GRID
                        ================================================== */}

                        <div className="row gy-4">

                            {(category.services || []).map((service) => (

                                <div
                                    key={service.id}
                                    className="col-lg-4 col-md-6"
                                    data-aos="fade-up"
                                >

                                    <div className="portfolio-card">


                                        {/* =================================
                                            IMAGE
                                        ================================== */}

                                        <div className="image-container">

                                            <img
                                                src={
                                                    service.image
                                                        ? `${API_URL}/uploads/${service.image}`
                                                        : '/assets/img/services-bg.jpg'
                                                }
                                                className="img-fluid"
                                                alt={service.name}
                                                loading="lazy"
                                            />


                                            {/* =============================
                                                OVERLAY
                                            ============================== */}

                                            <div className="overlay">

                                                <div className="overlay-content">

                                                    {/* Zoom */}

                                                    <a
                                                        href={
                                                            service.image
                                                                ? `${API_URL}/uploads/${service.image}`
                                                                : '/assets/img/services-bg.jpg'
                                                        }
                                                        className="glightbox zoom-link"
                                                        title={service.name}
                                                    >

                                                        <i className="bi bi-zoom-in"></i>

                                                    </a>


                                                    {/* Details */}

                                                    <a
                                                        href={`/services/${service.slug}`}
                                                        className="details-link"
                                                        title="اكتشف الخدمة"
                                                    >

                                                        <i className="bi bi-arrow-left"></i>

                                                    </a>

                                                </div>

                                            </div>

                                        </div>


                                        {/* =================================
                                            CONTENT
                                        ================================== */}

                                        <div className="content">

                                            <h3>
                                                {service.name}
                                            </h3>


                                            {service.short_description && (

                                                <p>
                                                    {service.short_description}
                                                </p>

                                            )}

                                        </div>

                                    </div>

                                </div>

                            ))}


                            {/* =============================================
                                NO SERVICES
                            ============================================== */}

                            {(!category.services ||
                                category.services.length === 0) && (

                                <div className="col-12">

                                    <p className="text-center">
                                        لا توجد خدمات في هذا القسم حالياً.
                                    </p>

                                </div>

                            )}

                        </div>

                    </div>

                ))}


                {/* =====================================================
                    NO CATEGORIES
                ====================================================== */}

                {categories.length === 0 && (

                    <div
                        className="text-center"
                        data-aos="fade-up"
                    >

                        <p>
                            لا توجد خدمات متاحة حالياً.
                        </p>

                    </div>

                )}

            </div>

        </section>

    )
}