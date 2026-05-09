import { useState } from 'react'

export default function Faq() {

    const [activeIndex, setActiveIndex] = useState(0)

    const faqs = [

        {
            title: 'ما هي الخدمات التي تقدمها شركة الواجهة؟',
            content:
                'شركة الواجهة متخصصة في تصميم المواقع الإلكترونية، برمجة المتاجر الإلكترونية، تصميم الهوية البصرية، إدارة صفحات السوشيال ميديا، وإنشاء الحملات الإعلانية الممولة باحترافية.'
        },

        {
            title: 'هل تقدمون تصميم مواقع متوافقة مع الموبايل؟',
            content:
                'نعم، جميع المواقع التي نقوم بتصميمها تكون متوافقة مع الهواتف المحمولة والأجهزة اللوحية وتعمل بسرعة عالية على جميع الشاشات.'
        },

        {
            title: 'هل يمكنكم تحسين ظهور موقعي في نتائج البحث Google؟',
            content:
                'بالتأكيد، نحن نهتم بتحسين محركات البحث SEO داخل الموقع لضمان ظهور نشاطك التجاري بشكل أفضل في نتائج البحث وجذب المزيد من العملاء.'
        },

        {
            title: 'أين يقع مقر شركة الواجهة؟',
            content:
                'يقع مقر شركة الواجهة في الحي السابع بمدينة الشيخ زايد أمام ميدان الأفق، ويمكنك التواصل معنا مباشرة عبر الهاتف أو الواتساب.'
        },

        {
            title: 'كيف يمكنني التواصل مع شركة الواجهة؟',
            content:
                'يمكنك التواصل معنا من خلال رقم الهاتف أو الواتساب 01044946388 أو عبر صفحتنا الرسمية على فيسبوك أو الموقع الإلكتروني elwajha.com.'
        }

    ]

    const toggleFaq = (index) => {
        setActiveIndex(activeIndex === index ? null : index)
    }

    return (

        <section id="faq" className="faq section">

            {/* Section Title */}
            <div
                className="container section-title"
                data-aos="fade-up"
            >

                <span className="description-title">
                    الأسئلة الشائعة
                </span>

                <h2>
                    الأسئلة الشائعة
                </h2>

                <p>
                    تعرف على أهم الأسئلة الخاصة بخدمات تصميم المواقع
                    والدعاية والإعلان التي تقدمها شركة الواجهة.
                </p>

            </div>

            <div
                className="container"
                data-aos="fade-up"
                data-aos-delay="100"
            >

                <div className="row justify-content-center">

                    <div className="col-lg-10">

                        <div className="faq-wrapper">

                            {faqs.map((faq, index) => (

                                <div
                                    key={index}
                                    className={`faq-item ${activeIndex === index ? 'faq-active' : ''}`}
                                >

                                    <div
                                        className="faq-header"
                                        onClick={() => toggleFaq(index)}
                                    >

                                        <div className="faq-icon">
                                            <i className="bi bi-question-circle"></i>
                                        </div>

                                        <h4>
                                            {faq.title}
                                        </h4>

                                        <div className="faq-toggle">

                                            <i className="bi bi-plus"></i>

                                            <i className="bi bi-dash"></i>

                                        </div>

                                    </div>

                                    <div
                                        className="faq-content"
                                        style={{
                                            maxHeight: activeIndex === index
                                                ? '300px'
                                                : '0px'
                                        }}
                                    >

                                        <div className="content-inner">

                                            <p>
                                                {faq.content}
                                            </p>

                                        </div>

                                    </div>

                                </div>

                            ))}

                        </div>

                    </div>

                </div>

            </div>

        </section>

    )
}