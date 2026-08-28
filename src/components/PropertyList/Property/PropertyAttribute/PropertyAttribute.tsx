import styles from './PropertyAttribute.module.css'

interface PropertyAttributeProps {
    text: string,
    color?: string,
    bold?: string
}

export default function PropertyAttribute(
    { text, color = "oklch(27.9% 0.041 260.031)", bold }: PropertyAttributeProps) {

  const style = { color, fontWeight: bold ? "bold" : "regular" };

  return (
    <p 
      className={styles.propertyAttribute}
      style = {style}
    >
      {text}
    </p>
  ) 
}
