import MainLayout from '@/Layouts/MainLayout'
import ServicesSection from '@/Components/Home/Services'
import SEO from '../Components/Common/Seo'

export default function Services({ categories = [], seo }) {
    return (
        <MainLayout>
            <SEO seo={seo} />

            <ServicesSection categories={categories} />

        </MainLayout>
    )
}