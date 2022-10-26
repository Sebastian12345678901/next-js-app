import Link from 'next/link'

export default function WeatherPage() {
    return (
        <div>
            <p>Hot weather</p>
            <p> New feature</p>
            <h1>Less hot weather</h1>
            <Link href="/cold-weather">cold weather</Link>
        </div>
    )
}
