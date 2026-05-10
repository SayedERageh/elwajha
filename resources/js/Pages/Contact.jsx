import MainLayout from '@/Layouts/MainLayout'

import ContactSection from '@/Components/Home/Contact'
import Faq from '@/Components/Home/Faq'
import { Head } from '@inertiajs/react'
export default function Contact() {
    return (
        <MainLayout>
            import { Head } from '@inertiajs/react'

            <Head title="اتصل بشركة الواجهه الشيخ زايد" />

            <ContactSection />

            <Faq />

        </MainLayout>
    )
}