import styles from './PropertyList.module.css'

export default function PropertyList() {
  return (
    <section className={styles.propertyList} aria-label="Available properties">
      <p>No properties are available yet.</p>
    </section>
  )
}
