import 'highlight.js/styles/tomorrow-night.css'
import { AppProps } from 'next/dist/next-server/lib/router/router'
import '../stylesheets/reset.css'
import '../stylesheets/articles/_all.scss'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
