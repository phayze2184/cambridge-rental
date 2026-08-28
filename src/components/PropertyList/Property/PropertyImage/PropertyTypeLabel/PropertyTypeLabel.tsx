import styles from './PropertyTypeLabel.module.css'

interface PropertyTypeLabelProps {
   type: string
}

export default function PropertyTypeLabel({ type }: PropertyTypeLabelProps) {
    return (
        <span className={styles.propertyTypeLabel}>
          {type}
        </span>
    )
}
