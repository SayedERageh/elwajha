import MainLayout from '@/Layouts/MainLayout'
import Hero from '@/Components/Home/Hero'
import About from '../Components/Home/About'
import Services from '../Components/Home/Services'
import Steps from '../Components/Home/Steps'
import Testimonials from '../Components/Home/Testimonials'
import Portfolio from '../Components/Home/Portfolio'
import TeamPricing from '../Components/Home/TeamPricing'
import Faq from '../Components/Home/Faq'
import Contact from '../Components/Home/Contact'
import { Head } from '@inertiajs/react'
export default function Home() {
    return (
        <MainLayout>
            <Head title="الرئيسية - الواجهة للدعايه وتصميم المواقع الشيخ زايد" />

            <Hero />
            <Services />

<Steps />
<Testimonials />

<Faq />
<Contact />

        </MainLayout>
    )
}