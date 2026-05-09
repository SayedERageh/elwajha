import { useEffect } from 'react'

export default function Testimonials() {

    useEffect(() => {

        if (window.Swiper) {

            new window.Swiper('.testimonials-slider', {
                loop: true,
                speed: 800,
                autoplay: {
                    delay: 5000,
                },
                slidesPerView: 1,
                spaceBetween: 30,
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },
                breakpoints: {
                    768: {
                        slidesPerView: 2,
                    },
                    1200: {
                        slidesPerView: 3,
                    },
                },
            })

        }

        if (window.AOS) {
            window.AOS.init()
        }

    }, [])

    return (

        <section id="testimonials" className="testimonials section light-background">

            {/* TITLE */}
            <div className="container section-title" data-aos="fade-up">

                <span className="description-title">
                    آراء العملاء
                </span>

                <h2>
                    ماذا يقول عملاؤنا عن شركة الواجهة
                </h2>

                <p>
                    ثقة عملائنا هي أهم دليل على جودة خدماتنا في تصميم المواقع
                    والدعاية والإعلان وتحسين الظهور على Google.
                </p>

            </div>

            <div className="container" data-aos="fade-up" data-aos-delay="100">

                <div className="testimonials-slider swiper">

                    <div className="swiper-wrapper">

                        {/* ITEM 1 */}
                        <div className="swiper-slide">

                            <div className="testimonial-card">

                                <div className="testimonial-content">
                                    <p>
                                        شركة محترفة جدًا في تصميم المواقع،
                                        موقعنا أصبح أسرع وشكله احترافي وزاد عدد العملاء بشكل واضح.
                                    </p>
                                </div>

                                <div className="testimonial-profile">

                                    <div className="rating">★★★★★</div>

                                    <div className="profile-info">

                                        <img
                                            src="/assets/img/person/person-m-8.webp"
                                            alt="عميل شركة الواجهة"
                                        />

                                        <div>
                                            <h3>أحمد محمد</h3>
                                            <h4>صاحب مشروع تجاري</h4>
                                        </div>

                                    </div>

                                </div>

                            </div>

                        </div>

                        {/* ITEM 2 */}
                        <div className="swiper-slide">

                            <div className="testimonial-card">

                                <div className="testimonial-content">
                                    <p>
                                        أفضل شركة تعاملت معها في تصميم المواقع،
                                        دعم فني سريع واحترافية عالية جدًا في التنفيذ.
                                    </p>
                                </div>

                                <div className="testimonial-profile">

                                    <div className="rating">★★★★★</div>

                                    <div className="profile-info">

                                        <img
                                            src="/assets/img/person/person-f-2.webp"
                                            alt="عميلة شركة الواجهة"
                                        />

                                        <div>
                                            <h3>سارة علي</h3>
                                            <h4>مديرة تسويق</h4>
                                        </div>

                                    </div>

                                </div>

                            </div>

                        </div>

                        {/* ITEM 3 */}
                        <div className="swiper-slide">

                            <div className="testimonial-card">

                                <div className="testimonial-content">
                                    <p>
                                        ساعدوني أطلع موقعي في نتائج البحث الأولى على Google
                                        وزودوا التفاعل بشكل كبير.
                                    </p>
                                </div>

                                <div className="testimonial-profile">

                                    <div className="rating">★★★★★</div>

                                    <div className="profile-info">

                                        <img
                                            src="/assets/img/person/person-m-3.webp"
                                            alt="عميل SEO"
                                        />

                                        <div>
                                            <h3>محمد حسن</h3>
                                            <h4>صاحب متجر إلكتروني</h4>
                                        </div>

                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                    {/* Pagination */}
                    <div className="swiper-pagination"></div>

                </div>

            </div>

        </section>

    )
}