import '../styles/globals.css'
import styles from '../styles/App.module.css'
import Menu from '../components/Menu'

function MyApp({ Component, pageProps }) {
  return <div className={styles.app}>
      <Menu />
      <Component {...pageProps} />
  </div>
}

export default MyApp
