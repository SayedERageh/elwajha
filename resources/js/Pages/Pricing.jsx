import MainLayout from '@/Layouts/MainLayout'

import TeamPricing from '@/Components/Home/TeamPricing'
import Testimonials from '@/Components/Home/Testimonials'
import Faq from '@/Components/Home/Faq'
import Contact from '@/Components/Home/Contact'
import SEO from '../Components/Common/Seo'

export default function Pricing({ seo }) {
    return (
        <MainLayout>
            <SEO seo={seo} />

            <TeamPricing />

            <Faq />

            <Testimonials />

            <Contact />

        </MainLayout>
    )
}