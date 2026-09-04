import { Head } from '@inertiajs/react'

export default function SEO({ seo }) {
    const title = seo?.meta_title || 'الواجهة - شركة تسويق وبرمجة'
    const description = seo?.meta_description || ''
    const keywords = seo?.meta_keywords || ''
    const canonical = seo?.canonical_url || window.location.href

    return (
        <Head>
            <title>{title}</title>

            <meta
                name="description"
                content={description}
            />

            <meta
                name="keywords"
                content={keywords}
            />

            <link
                rel="canonical"
                href={canonical}
            />

            <meta
                property="og:title"
                content={seo?.og_title || title}
            />

            <meta
                property="og:description"
                content={seo?.og_description || description}
            />

            {seo?.og_image && (
                <meta
                    property="og:image"
                    content={seo.og_image}
                />
            )}
        </Head>
    )
}