import Navbar from '@/Components/Navbar/Navbar'
import Footer from '@/Components/Footer/Footer'
import ScrollTop from '@/Components/Common/ScrollTop'
import Preloader from '@/Components/Common/Preloader'
import useAOS from '@/hooks/useAOS'
export default function MainLayout({ children }) {
        useAOS()

    return (
        <>
            <Preloader />

            <Navbar />

            <main>
                {children}
            </main>

            <Footer />

            <ScrollTop />
        </>
    )
}