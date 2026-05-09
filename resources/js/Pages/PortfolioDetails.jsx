import MainLayout from '@/Layouts/MainLayout'

export default function PortfolioDetails() {

    return (

        <MainLayout>

            <main className="main">

                {/* Page Title */}
                <div className="page-title light-background">

                    <div className="container d-lg-flex justify-content-between align-items-center">

                        <h1 className="mb-2 mb-lg-0">
                            Portfolio Details
                        </h1>

                        <nav className="breadcrumbs">
                            <ol>
                                <li>
                                    <a href="/">Home</a>
                                </li>

                                <li className="current">
                                    Portfolio Details
                                </li>
                            </ol>
                        </nav>

                    </div>

                </div>

                {/* Portfolio Details */}
                <section
                    id="portfolio-details"
                    className="portfolio-details section"
                >

                    <div className="container" data-aos="fade-up">

                        <div className="row gy-4 g-lg-5">

                            {/* Images */}
                            <div className="col-lg-6">

                                <img
                                    src="/assets/img/portfolio/portfolio-1.webp"
                                    className="img-fluid mb-4"
                                    alt=""
                                />

                                <img
                                    src="/assets/img/portfolio/portfolio-10.webp"
                                    className="img-fluid mb-4"
                                    alt=""
                                />

                                <img
                                    src="/assets/img/portfolio/portfolio-7.webp"
                                    className="img-fluid mb-4"
                                    alt=""
                                />

                            </div>

                            {/* Content */}
                            <div className="col-lg-6">

                                <div
                                    className="position-sticky"
                                    style={{ top: '40px' }}
                                >

                                    <div className="portfolio-description">

                                        <h2>
                                            This is an example of portfolio details
                                        </h2>

                                        <p>
                                            Autem ipsum nam porro corporis rerum.
                                            Quis eos dolorem eos itaque inventore.
                                        </p>

                                        <p>
                                            Amet consequatur qui dolore veniam
                                            voluptatem voluptatem sit.
                                        </p>

                                        <div className="testimonial-item">

                                            <p>

                                                <i className="bi bi-quote quote-icon-left"></i>

                                                <span>
                                                    Export tempor illum tamen malis
                                                    malis eram quae irure esse labore.
                                                </span>

                                                <i className="bi bi-quote quote-icon-right"></i>

                                            </p>

                                            <div>

                                                <img
                                                    src="/assets/img/person/person-f-5.webp"
                                                    className="testimonial-img"
                                                    alt=""
                                                />

                                                <h3>Sara Wilsson</h3>

                                                <h4>Designer</h4>

                                            </div>

                                        </div>

                                    </div>

                                    <div className="portfolio-info mt-5">

                                        <h3>Project information</h3>

                                        <ul>

                                            <li>
                                                <strong>Category</strong>
                                                {' '}
                                                Web design
                                            </li>

                                            <li>
                                                <strong>Client</strong>
                                                {' '}
                                                ASU Company
                                            </li>

                                            <li>
                                                <strong>Project date</strong>
                                                {' '}
                                                01 March, 2020
                                            </li>

                                            <li>
                                                <strong>Project URL</strong>
                                                {' '}
                                                <a href="#">
                                                    www.example.com
                                                </a>
                                            </li>

                                            <li>

                                                <a
                                                    href="#"
                                                    className="btn-visit align-self-start"
                                                >
                                                    Visit Website
                                                </a>

                                            </li>

                                        </ul>

                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                </section>

            </main>

        </MainLayout>

    )
}