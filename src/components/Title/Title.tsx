import type { ReactNode } from 'react'
import styles from './Title.module.css'

type TitleProps = {
  children: ReactNode
}

export default function Title({ children }: TitleProps) {
  return( 
   <div className={styles.titleSection}>
       <h1 className={styles.title}>{children}</h1>
   </div>
  )
}
