import MainLayout from '@/Layouts/MainLayout'
import PortfolioSection from '@/Components/Home/Portfolio'
import SEO from '../Components/Common/Seo'

export default function Portfolio({ seo }) {
    return (
        <MainLayout>
                        <SEO seo={seo} />


            <PortfolioSection />

        </MainLayout>
    )
}