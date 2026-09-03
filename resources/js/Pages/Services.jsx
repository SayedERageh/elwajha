import MainLayout from '@/Layouts/MainLayout'
import ServicesSection from '@/Components/Home/Services'

export default function Services({ categories = [] }) {
    return (
        <MainLayout>

            <ServicesSection categories={categories} />

        </MainLayout>
    )
}