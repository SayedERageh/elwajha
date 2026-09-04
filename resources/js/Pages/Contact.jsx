import MainLayout from '@/Layouts/MainLayout'

import ContactSection from '@/Components/Home/Contact'
import Faq from '@/Components/Home/Faq'
import SEO from '../Components/Common/Seo'

export default function Contact({ seo }) {
    return (
        <MainLayout>

            <SEO seo={seo} />

            <ContactSection />

            <Faq />

        </MainLayout>
    )
}