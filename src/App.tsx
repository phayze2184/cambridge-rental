import { Header, Title, PropertyList, Footer } from './components'
import styles from './App.module.css'

export default function App() {
  return (
    <div className={styles.app}>
      <Header />
      <main>
        <Title>Cambridge Rentals</Title>
        <PropertyList />
      </main>
      <Footer />
    </div>
  )
}
