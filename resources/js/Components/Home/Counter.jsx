import { useEffect, useState, useRef } from 'react'

export default function Counter({ end, duration = 1000, suffix = '' }) {

    const [count, setCount] = useState(0)
    const ref = useRef(null)
    const started = useRef(false)

    useEffect(() => {

        const observer = new IntersectionObserver((entries) => {

            entries.forEach(entry => {

                if (entry.isIntersecting && !started.current) {

                    started.current = true

                    let start = 0
                    const step = end / (duration / 16)

                    const timer = setInterval(() => {

                        start += step

                        if (start >= end) {
                            start = end
                            clearInterval(timer)
                        }

                        setCount(Math.floor(start))

                    }, 16)
                }
            })

        }, {
            threshold: 0.5 // يبدأ لما 50% من العنصر يظهر
        })

        if (ref.current) {
            observer.observe(ref.current)
        }

        return () => observer.disconnect()

    }, [end, duration])

    return (
        <span ref={ref}>
            {count}{suffix}
        </span>
    )
}