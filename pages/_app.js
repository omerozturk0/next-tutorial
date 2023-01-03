import '../styles/globals.css'
import Header from "../components/Header";
import MoviesProvider from "../contexts/movies-context";

export default function App({ Component, pageProps }) {
  return (
    <>
      <MoviesProvider>
        <Header />
        <Component {...pageProps} />
      </MoviesProvider>
    </>
  )
}
