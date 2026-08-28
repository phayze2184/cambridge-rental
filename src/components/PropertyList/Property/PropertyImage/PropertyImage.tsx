import type { ReactNode } from 'react'
import styles from './PropertyImage.module.css'

interface PropertyImageProps {
  image: string
  children?: ReactNode
}

export default function PropertyImage({ image, children }: PropertyImageProps) {
  return (
    <div
      className={styles.propertyImage}
      style={{ backgroundImage: `url(${image})` }}
    >
      {children}
    </div>
  )
}
