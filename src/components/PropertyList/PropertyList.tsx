import type { Property as PropertyData } from '../../data/properties'
import Property from './Property/Property'
import styles from './PropertyList.module.css'

interface PropertyListProps {
  properties: PropertyData[]
}

export default function PropertyList({ properties }: PropertyListProps) {
  return (
    <section className={styles.propertyList} aria-label="Properties listing">
      {properties.map((property) => (
        <Property
          key={property.id}
          {...property}
        />
      ))}
    </section>
  )
}
