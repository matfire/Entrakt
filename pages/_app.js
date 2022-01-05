import '../styles/globals.css'
import {Toaster} from "react-hot-toast"

function MyApp({ Component, pageProps }) {

  return (
    <div className='h-screen w-screen flex flex-col'>
      <Toaster/>
      <main>
        <Component {...pageProps} />
      </main>
      <footer className='bg-slate-600 text-white'>
        <a
          href="https://matteogassend.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by Matteo Gassend
        </a> <a href="https://trakt.tv" target="_blank" rel="noopener noreferrer">
        & Trakt
        </a>
      </footer>
    </div>
  )
}

export default MyApp
