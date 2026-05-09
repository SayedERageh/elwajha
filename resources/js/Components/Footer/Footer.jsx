import React from 'react'

function Footer() {
  return (
    <footer id="footer" className="footer light-background" dir='rtl'>

      <div className="container">
        <div className="row gy-4">

          {/* BRAND */}
          <div className="col-lg-4 col-md-6">

            <h3 className="mb-3">شركة الواجهة</h3>

            <p>
              شركة متخصصة في تصميم وتطوير المواقع الإلكترونية والمتاجر والمنصات التعليمية
              باستخدام أحدث التقنيات مثل React و Laravel.
            </p>

          </div>

          {/* CONTACT */}
          <div className="col-lg-4 col-md-6 d-flex">

            <i className="bi bi-geo-alt icon"></i>

            <div>

              <h4>الموقع</h4>

              <p>
                الحي السابع - الشيخ زايد<br />
                أمام ميدان الأفق - مصر
              </p>

              <br />

              <h4>التواصل</h4>

              <p>

                <strong>واتساب:</strong>
                <a href="https://wa.me/201044946388"> 01044946388</a>

                <br />

                <strong>فيسبوك:</strong>
                <a href="https://www.facebook.com/eloghaa" target="_blank" rel="noreferrer">
                  شركة الواجهة
                </a>

              </p>

            </div>

          </div>

          {/* SERVICES */}
          <div className="col-lg-4 col-md-6">

            <h4>خدماتنا</h4>

            <ul className="list-unstyled">

              <li>✔ تصميم مواقع احترافية</li>
              <li>✔ تطوير متاجر إلكترونية</li>
              <li>✔ أنظمة Laravel + React</li>
              <li>✔ منصات تعليمية</li>
              <li>✔ تصميم واجهات UI/UX</li>

            </ul>

          </div>

        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="container copyright text-center mt-4">

        <p>
          © {new Date().getFullYear()}{" "}
          <strong className="px-1">شركة الواجهة</strong>
          جميع الحقوق محفوظة
        </p>

        <div className="credits">

          Developed by <span>Elwajha Team</span>

        </div>

      </div>

    </footer>
  )
}

export default Footer