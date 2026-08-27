import styles from './Footer.module.css'
import { Clock } from "lucide-react"

type FooterProps = {
  openingHour?: number
  closingHour?: number
  now?: Date
}

function formatHour(hour: number) {
  return `${String(hour).padStart(2, '0')}:00`
}

export default function Footer({
  openingHour = 9,
  closingHour = 17,
  now = new Date(),
}: FooterProps) {
  const currentHour = now.getHours()
  const currentDay = now.getDay()
  const isWeekday = currentDay >= 1 && currentDay <= 5
  const isOpen = isWeekday && currentHour >= openingHour && currentHour < closingHour

  const openElement = (
    <div className={styles.content}>
      <div className={styles.message}>
        <Clock className={styles.icon}/>
        <span>We are open now!</span>
      </div>
      <div>
        Call us at: <strong>(555) 123-4567</strong> 
       </div>
    </div>
  )

  const closeElement = (
    <div className={styles.content}>
      <div className={styles.message}>
        <Clock className={styles.icon} />
        <span className={styles.closeStatus}>We are closed now.</span>
      </div>
      <div className={styles.message}>
         Opening hours: Monday-Friday, {formatHour(openingHour)}-{formatHour(closingHour)}
      </div>
    </div>
  )

  return (
    <footer className={styles.footer}>
      {isOpen ? openElement : closeElement}
    </footer>
  )
}
