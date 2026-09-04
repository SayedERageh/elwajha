import MainLayout from '@/Layouts/MainLayout'
import Hero from '@/Components/Home/Hero'
import About from '../Components/Home/About'
import Services from '../Components/Home/Services'
import Steps from '../Components/Home/Steps'
import Testimonials from '../Components/Home/Testimonials'
import SEO from '../Components/Common/Seo'

import Faq from '../Components/Home/Faq'
import Contact from '../Components/Home/Contact'
import { Head } from '@inertiajs/react'
export default function Home({ seo }) {
    return (
        <MainLayout>
            <SEO seo={seo} />

            <Hero />
            <Services />

<Steps />
<Testimonials />

<Faq />
<Contact />

        </MainLayout>
    )
}