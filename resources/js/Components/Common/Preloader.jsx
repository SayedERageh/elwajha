import { useEffect, useState } from 'react'

export default function Preloader() {

    const [loading, setLoading] = useState(
        sessionStorage.getItem('loaded') ? false : true
    )

    useEffect(() => {

        const timer = setTimeout(() => {

            setLoading(false)

            sessionStorage.setItem('loaded', 'true')

        }, 700)

        return () => clearTimeout(timer)

    }, [])

    if (!loading) return null

    return (
        <div id="preloader"></div>
    )
}