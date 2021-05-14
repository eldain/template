import Head from 'next/head'
import {tw} from "twind"

export default function Home() {
  return (
    <div>
      <Head>
        <title>Template</title>
        {/* NOTE: add favicon to /public */}
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      <main className={tw`w-screen h-screen flex justify-center items-center bg-black text-white`}>
        <h1 className={tw`text-3xl`}>Hello world</h1>
      </main>

    </div>
  )
}
