import '../styles/globals.css'

function MyApp({ Component, pageProps }) {

  return (
    <div className='h-screen w-screen flex flex-col'>
      <main>
        <Component {...pageProps} />
      </main>
      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by Matteo Gassend & Trakt
          <span>
          </span>
        </a>
      </footer>
    </div>
  )
}

export default MyApp
