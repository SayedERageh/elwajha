import MainLayout from '@/Layouts/MainLayout'

import TeamPricing from '@/Components/Home/TeamPricing'
import Testimonials from '@/Components/Home/Testimonials'
import Faq from '@/Components/Home/Faq'
import Contact from '@/Components/Home/Contact'

export default function Pricing() {
    return (
        <MainLayout>

            <TeamPricing />

            <Faq />

            <Testimonials />

            <Contact />

        </MainLayout>
    )
}