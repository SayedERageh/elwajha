import MainLayout from '@/Layouts/MainLayout'

import AboutSection from '@/Components/Home/About'
import Testimonials from '@/Components/Home/Testimonials'
import TeamPricing from '@/Components/Home/TeamPricing'
import Faq from '@/Components/Home/Faq'
import Contact from '@/Components/Home/Contact'
import SEO from '../Components/Common/Seo'


export default function About({ seo }) {
    return (
        <MainLayout>

            <SEO seo={seo} />

            <AboutSection />

            <TeamPricing />

            <Testimonials />

            <Faq />

            <Contact />

        </MainLayout>
    )
}