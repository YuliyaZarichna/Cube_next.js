import Head from 'next/head'
//import Cube from '../components/cube'
import Link from 'next/link'
import dynamic from 'next/dynamic'

const DynamicComponent = dynamic(() => import('../components/cube.jsx'), { ssr: false })


export default function Home() {
    return (
        <div className="container">
            <Head>
                <title>Create Next App</title>
                {/* <link rel="icon" href="/about" />
                <Link href="/about">About</Link> */}
            </Head>

            <main>
                <h1 className="title">
                    Welcome to <a href="https://nextjs.org">Next.js!</a>
                </h1>
                <DynamicComponent />
                {/*   <Cube /> */}
            </main>

        </div>
    )
}
