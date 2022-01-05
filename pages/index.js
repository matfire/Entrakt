import Head from 'next/head'
import { getAuthUrl } from '../api'

export default function Home() {
  return (
    <div className='h-full'>
      <Head>
        <title>Entrakt</title>
        <meta name="description" content="Follow and track what you watch" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='flex flex-col h-full justify-center items-center'>
        <h1 className='text-3xl font-bold'>Entrakt</h1>
        <p className='text-xl'>powered by Trakt.tv</p>
        <div className='flex justify-evenly mt-3'>
          <a href={getAuthUrl()} className='btn btn-primary'>Sign In</a>
        </div>
      </div>
    </div>
  )
}
