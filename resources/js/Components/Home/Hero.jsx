import { useEffect } from 'react'
import Counter from '@/Components/Home/Counter'

export default function Hero() {

    useEffect(() => {

        if (window.AOS) {
            window.AOS.init()
            window.AOS.refresh()
        }

        if (window.GLightbox) {
            window.GLightbox({
                selector: '.glightbox'
            })
        }

    }, [])

    return (

        <section id="hero" className="hero section">

            {/* Background */}
            <div className="hero-background">
                <div className="hero-overlay"></div>
            </div>

            <div className="container" data-aos="fade-up" data-aos-delay="100">

                {/* TEXT */}
                <div className="row justify-content-center text-center">

                    <div className="col-lg-10">

                        <div
                            className="hero-content"
                            data-aos="fade-up"
                            data-aos-delay="200"
                        >

                            <h1>
                                شركة الواجهة لتصميم المواقع والدعاية والإعلان
                            </h1>

                            <p>
                                نقدم خدمات تصميم المواقع الإلكترونية،
                                برمجة المتاجر الإلكترونية،
                                تصميم الهوية البصرية،
                                وإدارة الحملات الإعلانية والسوشيال ميديا
                                باحترافية تساعد نشاطك التجاري على النمو والظهور بقوة على الإنترنت.
                            </p>

                            <div
                                className="hero-btns"
                                data-aos="fade-up"
                                data-aos-delay="300"
                            >

                                <a
                                    href="https://wa.me/201044946388"
                                    className="btn btn-primary"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    تواصل واتساب
                                </a>

                                <a
                                    href="https://www.facebook.com/eloghaa"
                                    className="btn btn-outline"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <i className="bi bi-facebook"></i>
                                    صفحتنا على فيسبوك
                                </a>

                            </div>

                        </div>

                    </div>

                </div>

                {/* IMAGE */}
                <div className="row justify-content-center">

                    <div className="col-lg-8">

                        <div
                            className="hero-image-container"
                            data-aos="zoom-in"
                            data-aos-delay="400"
                        >

                            <div className="hero-image">

                                <img
                                    src="/assets/img/about/about-15.jpg"
                                    alt="شركة الواجهة لتصميم المواقع"
                                    className="img-fluid"
                                />

                                <div className="image-decoration"></div>

                            </div>

                        </div>

                    </div>

                </div>

                {/* STATS */}
                <div className="row justify-content-center">

                    <div className="col-lg-10">

                        <div
                            className="hero-stats"
                            data-aos="fade-up"
                            data-aos-delay="500"
                        >

                            {/* Item 1 */}
                            <div className="stat-item">

                                <div className="stat-icon">
                                    <i className="bi bi-window"></i>
                                </div>

                                <h3>
                                    <Counter end={150} suffix="+" />
                                </h3>

                                <p>موقع إلكتروني</p>

                            </div>

                            {/* Item 2 */}
                            <div className="stat-item">

                                <div className="stat-icon">
                                    <i className="bi bi-people"></i>
                                </div>

                                <h3>
                                    <Counter end={300} suffix="+" />
                                </h3>

                                <p>عميل سعيد</p>

                            </div>

                            {/* Item 3 */}
                            <div className="stat-item">

                                <div className="stat-icon">
                                    <i className="bi bi-megaphone"></i>
                                </div>

                                <h3>
                                    <Counter end={95} suffix="%" />
                                </h3>

                                <p>نجاح الحملات الإعلانية</p>

                            </div>

                            {/* Item 4 */}
                            <div className="stat-item">

                                <div className="stat-icon">
                                    <i className="bi bi-geo-alt"></i>
                                </div>

                                <h3>
                                    <Counter end={7} suffix="+" />
                                </h3>

                                <p>سنوات خبرة</p>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </section>

    )
}