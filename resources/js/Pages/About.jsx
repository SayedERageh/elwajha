import MainLayout from '@/Layouts/MainLayout'

import AboutSection from '@/Components/Home/About'
import Testimonials from '@/Components/Home/Testimonials'
import TeamPricing from '@/Components/Home/TeamPricing'
import Faq from '@/Components/Home/Faq'
import Contact from '@/Components/Home/Contact'

export default function About() {
    return (
        <MainLayout>

            <AboutSection />

            <TeamPricing />

            <Testimonials />

            <Faq />

            <Contact />

        </MainLayout>
    )
}