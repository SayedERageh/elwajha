import MainLayout from '@/Layouts/MainLayout';
import { Head, Link } from '@inertiajs/react';
export default function BlogShow({ post }) {

    return (

               <MainLayout>
            <Head title="الرئيسية - الواجهة للدعايه وتصميم المواقع الشيخ زايد" />

        <section className="blog-show section" dir="rtl">

            <div className="container">

                {/* =====================================================
                    BACK
                ====================================================== */}

                <div
                    className="blog-back"
                    data-aos="fade-up"
                >

                    <Link href="/blog">

                        <i className="bi bi-arrow-right"></i>

                        العودة إلى المقالات

                    </Link>

                </div>


                {/* =====================================================
                    ARTICLE HEADER
                ====================================================== */}

                <article>

                    <div
                        className="blog-show-header"
                        data-aos="fade-up"
                    >

                        {/* CATEGORY */}

                        {post.category && (

                            <div className="blog-show-category">

                                {post.category.name}

                            </div>

                        )}


                        {/* TITLE */}

                        <h1>
                            {post.title}
                        </h1>


                        {/* DATE */}

                        <div className="blog-show-meta">

                            <span>

                                <i className="bi bi-calendar3"></i>

                                {post.created_at
                                    ? new Date(post.created_at)
                                        .toLocaleDateString('ar-EG')
                                    : ''
                                }

                            </span>

                        </div>

                    </div>


                    {/* =================================================
                        FEATURED IMAGE
                    ================================================== */}

                    {post.image && (

                        <div
                            className="blog-show-image"
                            data-aos="zoom-in"
                            data-aos-delay="100"
                        >

                            <img
                                src={`/storage/${post.image}`}
                                className="img-fluid"
                                alt={post.title}
                            />

                        </div>

                    )}


                    {/* =================================================
                        ARTICLE CONTENT
                    ================================================== */}

                    <div
                        className="blog-show-content"
                        data-aos="fade-up"
                        data-aos-delay="150"
                    >

                        {/* EXCERPT */}

                        {post.excerpt && (

                            <div className="blog-intro">

                                {post.excerpt}

                            </div>

                        )}


                        {/* SECTIONS */}

                        {post.sections?.map((section, index) => (

                            <div
                                className="article-section"
                                key={section.id ?? index}
                            >

                                {section.title && (

                                    <h2>
                                        {section.title}
                                    </h2>

                                )}


                                {section.content && (

                                    <div
                                        className="article-text"
                                        dangerouslySetInnerHTML={{
                                            __html: section.content
                                        }}
                                    />

                                )}


                                {section.image && (

                                    <div className="article-section-image">

                                        <img
                                            src={`/storage/${section.image}`}
                                            className="img-fluid"
                                            alt={section.title || post.title}
                                        />

                                    </div>

                                )}

                            </div>

                        ))}

                    </div>


                    {/* =================================================
                        FOOTER
                    ================================================== */}

                    <div
                        className="blog-show-footer"
                        data-aos="fade-up"
                    >

                        <Link
                            href="/blog"
                            className="btn-back-blog"
                        >

                            <i className="bi bi-arrow-right"></i>

                            جميع المقالات

                        </Link>

                    </div>

                </article>

            </div>

        </section>
               </MainLayout>

    )
}
         
