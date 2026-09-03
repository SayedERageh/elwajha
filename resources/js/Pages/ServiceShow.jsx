import MainLayout from '@/Layouts/MainLayout'
import { Head, Link } from '@inertiajs/react'

export default function ServiceShow({ service }) {

    const siteUrl = window.location.origin

    const serviceUrl = `${siteUrl}/services/${service.slug}`

    const title = service.meta_title || service.name

    const description =
        service.meta_description ||
        service.short_description ||
        ''

    /*
    |--------------------------------------------------------------------------
    | Image URL
    |--------------------------------------------------------------------------
    */

    const image = service.image
        ? service.image.startsWith('http')
            ? service.image
            : `${siteUrl}/${service.image.replace(/^\/+/, '')}`
        : null


    /*
    |--------------------------------------------------------------------------
    | Schema.org - Service
    |--------------------------------------------------------------------------
    */

    const serviceSchema = {

        '@context': 'https://schema.org',

        '@type': 'Service',

        name: service.name,

        description: description,

        url: serviceUrl,

        provider: {

            '@type': 'Organization',

            name: 'الواجهة',

            url: siteUrl,

        },

        areaServed: {

            '@type': 'Country',

            name: 'Egypt',

        },

        ...(image && {
            image: image,
        }),

    }


    /*
    |--------------------------------------------------------------------------
    | Breadcrumb Schema
    |--------------------------------------------------------------------------
    */

    const breadcrumbSchema = {

        '@context': 'https://schema.org',

        '@type': 'BreadcrumbList',

        itemListElement: [

            {
                '@type': 'ListItem',
                position: 1,
                name: 'الرئيسية',
                item: siteUrl,
            },

            {
                '@type': 'ListItem',
                position: 2,
                name: 'خدماتنا',
                item: `${siteUrl}/services`,
            },

            {
                '@type': 'ListItem',
                position: 3,
                name: service.name,
                item: serviceUrl,
            },

        ],

    }


    return (

        <MainLayout>

            <Head>

                <title>
                    {title}
                </title>

                <meta
                    name="description"
                    content={description}
                />

                {service.meta_keywords && (

                    <meta
                        name="keywords"
                        content={service.meta_keywords}
                    />

                )}

                <link
                    rel="canonical"
                    href={serviceUrl}
                />

                <meta
                    name="robots"
                    content="index, follow"
                />


                {/* Open Graph */}

                <meta
                    property="og:type"
                    content="website"
                />

                <meta
                    property="og:title"
                    content={title}
                />

                <meta
                    property="og:description"
                    content={description}
                />

                <meta
                    property="og:url"
                    content={serviceUrl}
                />

                <meta
                    property="og:locale"
                    content="ar_EG"
                />

                {image && (

                    <meta
                        property="og:image"
                        content={image}
                    />

                )}


                {/* Twitter */}

                <meta
                    name="twitter:card"
                    content="summary_large_image"
                />

                <meta
                    name="twitter:title"
                    content={title}
                />

                <meta
                    name="twitter:description"
                    content={description}
                />

                {image && (

                    <meta
                        name="twitter:image"
                        content={image}
                    />

                )}


                {/* Service Schema */}

                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(serviceSchema),
                    }}
                />


                {/* Breadcrumb Schema */}

                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(breadcrumbSchema),
                    }}
                />

            </Head>


            <main
                className="service-show-page"
                dir="rtl"
            >


                {/* =====================================================
                    BREADCRUMB
                ===================================================== */}

                <section className="service-breadcrumb">

                    <div className="container">

                        <nav aria-label="breadcrumb">

                            <ol className="breadcrumb mb-0">

                                <li className="breadcrumb-item">

                                    <Link href="/">
                                        الرئيسية
                                    </Link>

                                </li>

                                <li className="breadcrumb-item">

                                    <Link href="/services">
                                        خدماتنا
                                    </Link>

                                </li>

                                <li
                                    className="breadcrumb-item active"
                                    aria-current="page"
                                >

                                    {service.name}

                                </li>

                            </ol>

                        </nav>

                    </div>

                </section>



                {/* =====================================================
                    SERVICE HERO
                ===================================================== */}

                <section
                    className="about section service-hero"
                    dir="rtl"
                >

                    {/* SECTION TITLE */}

                    <div
                        className="container section-title"
                        data-aos="fade-up"
                    >

                        <span className="description-title">
                            {service.category?.name || 'خدماتنا'}
                        </span>

                        <h2>
                            {service.name}
                        </h2>

                        <p>
                            {service.short_description}
                        </p>

                    </div>


                    <div
                        className="container"
                        data-aos="fade-up"
                        data-aos-delay="100"
                    >

                        <div className="row gx-0 gx-lg-5 gy-5 align-items-center">


                            {/* =================================================
                                IMAGE
                            ================================================= */}

                            <div
                                className="col-lg-6"
                                data-aos="zoom-out"
                                data-aos-delay="200"
                            >

                                <div className="image-wrapper">

                                    {image ? (

                                        <div className="image-box">

                                            <img
                                                src={image}
                                                className="img-fluid"
                                                alt={service.name}
                                                loading="eager"
                                            />

                                        </div>

                                    ) : (

                                        <div className="image-box service-no-image">

                                            <i className="bi bi-image"></i>

                                        </div>

                                    )}

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



                            {/* =================================================
                                CONTENT
                            ================================================= */}

                            <div
                                className="col-lg-6"
                                data-aos="fade-left"
                                data-aos-delay="200"
                            >

                                <div className="content">

                                    <div className="section-header">

                                        <h2>
                                            {service.name}
                                        </h2>

                                    </div>


                                    {service.short_description && (

                                        <p className="highlight-text">

                                            {service.short_description}

                                        </p>

                                    )}


                                    {/* FEATURES */}

                                    <div className="features-list">


                                        {/* FEATURE 1 */}

                                        <div className="feature-item">

                                            <div className="icon-box">

                                                <i className="bi bi-check2-circle"></i>

                                            </div>

                                            <div className="text">

                                                <h4>
                                                    خدمة احترافية
                                                </h4>

                                                <p>
                                                    نقدم حلولًا احترافية مصممة
                                                    لتناسب طبيعة نشاطك وتساعدك
                                                    على تحقيق أهدافك.
                                                </p>

                                            </div>

                                        </div>



                                        {/* FEATURE 2 */}

                                        <div className="feature-item">

                                            <div className="icon-box">

                                                <i className="bi bi-lightbulb"></i>

                                            </div>

                                            <div className="text">

                                                <h4>
                                                    حلول مناسبة لنشاطك
                                                </h4>

                                                <p>
                                                    نعمل على فهم احتياجات مشروعك
                                                    وتقديم الحل المناسب بدلًا من
                                                    الحلول الجاهزة.
                                                </p>

                                            </div>

                                        </div>



                                        {/* FEATURE 3 */}

                                        <div className="feature-item">

                                            <div className="icon-box">

                                                <i className="bi bi-graph-up-arrow"></i>

                                            </div>

                                            <div className="text">

                                                <h4>
                                                    نتائج ونمو أفضل
                                                </h4>

                                                <p>
                                                    هدفنا أن تساعدك الخدمة على
                                                    تطوير نشاطك والوصول إلى
                                                    عملائك بشكل أفضل.
                                                </p>

                                            </div>

                                        </div>


                                    </div>


                                    {/* BUTTONS */}

                                    <div className="cta-buttons">

                                        <a
                                            href="https://wa.me/201044946388"
                                            className="btn-get-started"
                                            target="_blank"
                                            rel="noreferrer"
                                        >

                                            اطلب الخدمة الآن

                                        </a>


                                        <Link
                                            href="/services"
                                            className="btn-learn-more"
                                        >

                                            كل الخدمات

                                        </Link>

                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                </section>



                {/* =====================================================
                    SERVICE DESCRIPTION
                ===================================================== */}

                {service.description && (

                    <section
                        className="about section service-description-section"
                        dir="rtl"
                    >

                        <div
                            className="container section-title"
                            data-aos="fade-up"
                        >

                            <span className="description-title">
                                تفاصيل الخدمة
                            </span>

                            <h2>
                                كل ما تحتاج معرفته عن {service.name}
                            </h2>

                        </div>


                        <div
                            className="container"
                            data-aos="fade-up"
                            data-aos-delay="100"
                        >

                            <div className="row">

                                <div className="col-lg-10 mx-auto">

                                    <div className="content service-content">

                                        <div
                                            dangerouslySetInnerHTML={{
                                                __html: service.description
                                            }}
                                        />

                                    </div>

                                </div>

                            </div>

                        </div>

                    </section>

                )}



                {/* =====================================================
                    CTA
                ===================================================== */}

                <section
                    className="about section service-cta"
                    dir="rtl"
                >

                    <div
                        className="container"
                        data-aos="fade-up"
                    >

                        <div className="content text-center">

                            <div className="section-header">

                                <h2>
                                    جاهز تبدأ مشروعك؟
                                </h2>

                            </div>

                            <p className="highlight-text">

                                تواصل مع شركة الواجهة الآن واحصل على
                                تفاصيل الخدمة المناسبة لنشاطك.

                            </p>


                            <div className="cta-buttons justify-content-center">

                                <a
                                    href="https://wa.me/201044946388"
                                    className="btn-get-started"
                                    target="_blank"
                                    rel="noreferrer"
                                >

                                    <i className="bi bi-whatsapp"></i>

                                    تواصل معنا

                                </a>

                            </div>

                        </div>

                    </div>

                </section>


            </main>

        </MainLayout>

    )

}