import MainLayout from '@/Layouts/MainLayout'
import { Link } from '@inertiajs/react'
import SEO from '../Components/Common/Seo'

export default function BlogShow({ post }) {

    const seo = {
        meta_title: post.meta_title || post.title,

        meta_description:
            post.meta_description ||
            post.short_description ||
            '',

        meta_keywords:
            Array.isArray(post.meta_keywords)
                ? post.meta_keywords.join(', ')
                : post.meta_keywords || '',

        og_title:
            post.meta_title || post.title,

        og_description:
            post.meta_description ||
            post.short_description ||
            '',

        og_image:
            post.image
                ? `/storage/${post.image}`
                : '',
    }

    return (
        <MainLayout>

            <SEO seo={seo} />

            <section className="blog-show section" dir="rtl">

                <div className="container">

                    <div className="blog-back" data-aos="fade-up">
                        <Link href="/blog">
                            <i className="bi bi-arrow-right"></i>
                            العودة إلى المقالات
                        </Link>
                    </div>

                    <article>

                        <div
                            className="blog-show-header"
                            data-aos="fade-up"
                        >

                            {post.category && (
                                <div className="blog-show-category">
                                    {post.category.name}
                                </div>
                            )}

                            <h1>
                                {post.title}
                            </h1>

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

                        <div
                            className="blog-show-content"
                            data-aos="fade-up"
                            data-aos-delay="150"
                        >

                            {post.short_description && (
                                <div className="blog-intro">
                                    {post.short_description}
                                </div>
                            )}

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
                                                alt={
                                                    section.title ||
                                                    post.title
                                                }
                                            />
                                        </div>
                                    )}

                                </div>
                            ))}

                        </div>

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