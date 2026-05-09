export default function Contact() {

    return (

        <section id="contact" className="contact section">

            {/* Section Title */}
            <div className="container section-title" data-aos="fade-up">

                <span className="description-title">
                    تواصل معنا
                </span>

                <h2>
                    شركة الواجهة
                </h2>

                <p>
                    شركة متخصصة في تصميم المواقع الإلكترونية والدعاية والإعلان
                    ومساعدة الشركات على الظهور بشكل احترافي على الإنترنت.
                </p>

            </div>

            <div className="container">

                <div className="contact-wrapper">

                    {/* LEFT */}
                    <div className="contact-info-panel">

                        <div className="contact-info-header">

                            <h3>
                                معلومات التواصل
                            </h3>

                            <p>
                                تواصل معنا الآن واحصل على موقع إلكتروني احترافي
                                أو حملة إعلانية تساعدك تكبر مشروعك.
                            </p>

                        </div>

                        <div className="contact-info-cards">

                            {/* CARD */}
                            <div className="info-card">

                                <div className="icon-container">
                                    <i className="bi bi-pin-map-fill"></i>
                                </div>

                                <div className="card-content">

                                    <h4>
                                        عنوان الشركة
                                    </h4>

                                    <p>
                                        الحي السابع - الشيخ زايد - أمام ميدان الأفق
                                    </p>

                                </div>

                            </div>

                            {/* CARD */}
                            <div className="info-card">

                                <div className="icon-container">
                                    <i className="bi bi-globe"></i>
                                </div>

                                <div className="card-content">

                                    <h4>
                                        الموقع الإلكتروني
                                    </h4>

                                    <p>
                                        elwajha.com
                                    </p>

                                </div>

                            </div>

                            {/* CARD */}
                            <div className="info-card">

                                <div className="icon-container">
                                    <i className="bi bi-telephone-fill"></i>
                                </div>

                                <div className="card-content">

                                    <h4>
                                        رقم التواصل
                                    </h4>

                                    <p>
                                        01044946388
                                    </p>

                                </div>

                            </div>

                            {/* CARD */}
                            <div className="info-card">

                                <div className="icon-container">
                                    <i className="bi bi-clock-history"></i>
                                </div>

                                <div className="card-content">

                                    <h4>
                                        مواعيد العمل
                                    </h4>

                                    <p>
                                        يوميًا من 10 صباحًا حتى 10 مساءً
                                    </p>

                                </div>

                            </div>

                        </div>

                        {/* SOCIAL */}
                        <div className="social-links-panel">

                            <h5>
                                تابعنا
                            </h5>

                            <div className="social-icons">

                                <a
                                    href="https://www.facebook.com/eloghaa"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <i className="bi bi-facebook"></i>
                                </a>

                                <a
                                    href="https://wa.me/201044946388"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <i className="bi bi-whatsapp"></i>
                                </a>

                            </div>

                        </div>

                    </div>

                    {/* RIGHT */}
                    <div className="contact-form-panel">

                        {/* MAP */}
                        <div className="map-container">

                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d863.5320135913303!2d30.98419962023773!3d30.033183897521393!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145859156ff04da5%3A0x668608dc0f4ce984!2sFarah%20Designs%20Boutique!5e0!3m2!1sar!2seg!4v1778326085059!5m2!1sar!2seg"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>

                        </div>

                        {/* FORM */}
                        <div className="form-container">

                            <h3>
                                ابعتلنا رسالتك
                            </h3>

                            <p>
                                فريق شركة الواجهة جاهز للرد على جميع استفساراتك
                                الخاصة بتصميم المواقع أو الحملات الإعلانية.
                            </p>

                            <form>

                                <div className="form-floating mb-3">

                                    <input
                                        type="text"
                                        className="form-control"
                                        id="nameInput"
                                        placeholder="الاسم بالكامل"
                                    />

                                    <label htmlFor="nameInput">
                                        الاسم بالكامل
                                    </label>

                                </div>

                                <div className="form-floating mb-3">

                                    <input
                                        type="email"
                                        className="form-control"
                                        id="emailInput"
                                        placeholder="البريد الإلكتروني"
                                    />

                                    <label htmlFor="emailInput">
                                        البريد الإلكتروني
                                    </label>

                                </div>

                                <div className="form-floating mb-3">

                                    <input
                                        type="text"
                                        className="form-control"
                                        id="subjectInput"
                                        placeholder="عنوان الرسالة"
                                    />

                                    <label htmlFor="subjectInput">
                                        عنوان الرسالة
                                    </label>

                                </div>

                                <div className="form-floating mb-3">

                                    <textarea
                                        className="form-control"
                                        id="messageInput"
                                        placeholder="اكتب رسالتك"
                                        style={{ height: '150px' }}
                                    ></textarea>

                                    <label htmlFor="messageInput">
                                        اكتب رسالتك
                                    </label>

                                </div>

                                <div className="d-grid">

                                    <button
                                        type="submit"
                                        className="btn-submit"
                                    >

                                        إرسال الرسالة

                                        <i className="bi bi-send-fill ms-2"></i>

                                    </button>

                                </div>

                            </form>

                        </div>

                    </div>

                </div>

            </div>

        </section>

    )
}