import { Footer, Header, PropertyList, Title } from './components'
import styles from './App.module.css'
import properties from './data/properties'

export default function App() {
  return (
    <div className={styles.app}>
      <Header />
      <main>
        <Title>Properties for Rent</Title>
        <PropertyList properties={properties} />
      </main>
      <Footer />
    </div>
  )
}
