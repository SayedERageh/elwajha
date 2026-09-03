import MainLayout from '@/Layouts/MainLayout';
import { Head, Link } from '@inertiajs/react';


export default function Blog({ posts = [], categories = [] }) {
    return (
        <MainLayout>
            <Head title="الرئيسية - الواجهة للدعايه وتصميم المواقع الشيخ زايد" />

            <section id="blog" className="blog section" dir="rtl">

            {/* =====================================================
                SECTION TITLE
            ====================================================== */}

            <div
                className="container section-title"
                data-aos="fade-up"
            >

                <span className="description-title">
                    المدونة
                </span>

                <h2>
                    أحدث المقالات
                </h2>

                <p>
                    تعرف على أحدث النصائح والمعلومات في مجال
                    تصميم المواقع والتسويق الإلكتروني وصناعة
                    الهوية الرقمية.
                </p>

            </div>


            {/* =====================================================
                BLOG CONTENT
            ====================================================== */}

            <div className="container">

                <div
                    className="row gy-5"
                    data-aos="fade-up"
                    data-aos-delay="100"
                >

                    {posts.length > 0 ? (

                        posts.map((post, index) => (

                            <div
                                className="col-lg-4 col-md-6"
                                key={post.id}
                                data-aos="fade-up"
                                data-aos-delay={100 + (index % 3) * 100}
                            >

                                <article className="blog-card">

                                    {/* IMAGE */}

                                    <div className="blog-image">

                                        <Link href={`/blog/${post.slug}`}>

                                            <img
                                                src={
                                                    post.image
                                                        ? `/storage/${post.image}`
                                                        : '/assets/img/blog/default.jpg'
                                                }
                                                className="img-fluid"
                                                alt={post.title}
                                            />

                                        </Link>

                                    </div>


                                    {/* CONTENT */}

                                    <div className="blog-content">

                                        {/* CATEGORY */}

                                        {post.category && (

                                            <div className="blog-category">

                                                {post.category.name}

                                            </div>

                                        )}


                                        {/* TITLE */}

                                        <h3>

                                            <Link href={`/blog/${post.slug}`}>

                                                {post.title}

                                            </Link>

                                        </h3>


                                        {/* EXCERPT */}

                                        {post.excerpt && (

                                            <p>
                                                {post.excerpt}
                                            </p>

                                        )}


                                        {/* FOOTER */}

                                        <div className="blog-footer">

                                            <span className="blog-date">

                                                <i className="bi bi-calendar3"></i>

                                                {post.created_at
                                                    ? new Date(post.created_at)
                                                        .toLocaleDateString('ar-EG')
                                                    : ''
                                                }

                                            </span>


                                            <Link
                                                href={`/blog/${post.slug}`}
                                                className="read-more"
                                            >

                                                اقرأ المقال

                                                <i className="bi bi-arrow-left"></i>

                                            </Link>

                                        </div>

                                    </div>

                                </article>

                            </div>

                        ))

                    ) : (

                        /* =================================================
                           EMPTY
                        ================================================== */

                        <div className="col-12">

                            <div className="text-center py-5">

                                <i
                                    className="bi bi-journal-x"
                                    style={{
                                        fontSize: '50px',
                                        opacity: 0.5
                                    }}
                                ></i>

                                <h3 className="mt-3">
                                    لا توجد مقالات حالياً
                                </h3>

                                <p>
                                    سيتم إضافة المقالات قريباً.
                                </p>

                            </div>

                        </div>

                    )}

                </div>

            </div>

        </section>

        </MainLayout>
    )
}
