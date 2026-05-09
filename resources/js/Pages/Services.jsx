import MainLayout from '@/Layouts/MainLayout'

import ServicesSection from '@/Components/Home/Services'
import Steps from '@/Components/Home/Steps'
import Testimonials from '@/Components/Home/Testimonials'
import Contact from '@/Components/Home/Contact'

export default function Services() {
    return (
        <MainLayout>

            <ServicesSection />

            <Steps />

            <Testimonials />

            <Contact />

        </MainLayout>
    )
}