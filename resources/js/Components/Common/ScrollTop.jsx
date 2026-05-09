import { useEffect, useState } from 'react'

export default function ScrollTop() {

    const [visible, setVisible] = useState(false)

    useEffect(() => {

        const handleScroll = () => {
            const scrollY = window.scrollY || document.documentElement.scrollTop

            setVisible(scrollY > 100)
        }

        window.addEventListener('scroll', handleScroll, { passive: true })

        handleScroll() // 👈 مهم جدًا أول load

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }

    }, [])

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
    }

    return (
        <button
            onClick={scrollToTop}
            className={`scroll-top ${visible ? 'active' : ''}`}
        >
            <i className="bi bi-arrow-up"></i>
        </button>
    )
}