export default function About() {

    return (

        <section id="about" className="about section" dir="rtl">

            {/* SECTION TITLE */}
            <div
                className="container section-title"
                data-aos="fade-up" 
            >

                <span className="description-title">
                    من نحن
                </span>

                <h2>
                    شركة الواجهة
                </h2>

                <p>
                    شركة متخصصة في تصميم المواقع الإلكترونية
                    والدعاية والإعلان وصناعة الهوية الرقمية
                    للشركات والأنشطة التجارية.
                </p>

            </div>

            <div
                className="container"
                data-aos="fade-up"
                data-aos-delay="100"
            >

                <div className="row gx-0 gx-lg-5 gy-5 align-items-center">

                    {/* IMAGE */}
                    <div
                        className="col-lg-6"
                        data-aos="zoom-out"
                        data-aos-delay="200"
                    >

                        <div className="image-wrapper">

                            <div className="image-box">

                                <img
                                    src="/assets/img/about/about-square-15.jpg"
                                    className="img-fluid"
                                    alt="شركة الواجهة لتصميم المواقع"
                                />

                            </div>

                            <div
                                className="experience-box"
                                data-aos="zoom-in"
                                data-aos-delay="300"
                            >

                                <div className="years">
                                    7+
                                </div>

                                <div className="text">
                                    سنوات<br />
                                    من الخبرة
                                </div>

                            </div>

                        </div>

                    </div>

                    {/* CONTENT */}
                    <div
                        className="col-lg-6"
                        data-aos="fade-left"
                        data-aos-delay="200"
                    >

                        <div className="content">

                            <div className="section-header">

                                <h2>
                                    نصنع تجربة رقمية احترافية تساعدك على النجاح
                                </h2>

                            </div>

                            <p className="highlight-text">

                                في شركة الواجهة نؤمن أن الموقع الإلكتروني
                                هو واجهة مشروعك الحقيقية،
                                لذلك نعمل على تصميم مواقع عصرية وسريعة
                                ومتوافقة مع جميع الأجهزة
                                تساعدك على جذب العملاء وزيادة الثقة في نشاطك التجاري.

                            </p>

                            {/* FEATURES */}
                            <div className="features-list">

                                {/* ITEM */}
                                <div className="feature-item">

                                    <div className="icon-box">
                                        <i className="bi bi-check2-circle"></i>
                                    </div>

                                    <div className="text">

                                        <h4>
                                            تصميم مواقع احترافية
                                        </h4>

                                        <p>
                                            تصميم مواقع حديثة ومتجاوبة
                                            تناسب جميع الأنشطة التجارية والشركات.
                                        </p>

                                    </div>

                                </div>

                                {/* ITEM */}
                                <div className="feature-item">

                                    <div className="icon-box">
                                        <i className="bi bi-lightbulb"></i>
                                    </div>

                                    <div className="text">

                                        <h4>
                                            دعاية وإعلان
                                        </h4>

                                        <p>
                                            إنشاء حملات إعلانية احترافية
                                            تساعدك على الوصول للعملاء المستهدفين
                                            وتحقيق نتائج قوية.
                                        </p>

                                    </div>

                                </div>

                                {/* ITEM */}
                                <div className="feature-item">

                                    <div className="icon-box">
                                        <i className="bi bi-graph-up-arrow"></i>
                                    </div>

                                    <div className="text">

                                        <h4>
                                            تحسين الظهور على Google
                                        </h4>

                                        <p>
                                            نهتم بتحسين محركات البحث SEO
                                            لمساعدة موقعك على الظهور
                                            في نتائج البحث الأولى.
                                        </p>

                                    </div>

                                </div>

                            </div>

                            {/* BUTTONS */}
                            <div className="cta-buttons">

                                <a
                                    href="https://elwajha.com"
                                    className="btn-learn-more"
                                >
                                    اعرف المزيد
                                </a>

                                <a
                                    href="https://wa.me/201044946388"
                                    className="btn-get-started"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    ابدأ مشروعك
                                </a>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </section>

    )
}