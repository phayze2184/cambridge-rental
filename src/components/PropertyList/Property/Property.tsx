import styles from './Property.module.css';
import PropertyImage from './PropertyImage/PropertyImage';
import PropertyTypeLabel from './PropertyImage/PropertyTypeLabel/PropertyTypeLabel';
import PropertyBanner from './PropertyImage/PropertyBanner/PropertyBanner';
import IconWithText from './PropertyImage/IconWithText/IconWithText';
import { Bath, Bed, Maximize } from 'lucide-react';
import PropertyAttribute from './PropertyAttribute/PropertyAttribute';

interface PropertyProps {
  image: string
  bedrooms: number
  bathrooms: number
  address: string
  rent: number
  surface: number
  available: boolean
  date: string
  type: string
}

export default function Property({
  image,
  bedrooms,
  bathrooms,
  address,
  rent,
  surface,
  available,
  date,
  type,
}: PropertyProps) {
  return (
    <article 
      className={styles.propertyCard}
      style={{opacity: !available ? "0.5" : "1"}}
    >
      <PropertyImage image={image}>
        <PropertyTypeLabel type={type} />
        {!available && <PropertyBanner/>}
        <div className={styles.propertyInfo}>
           <IconWithText 
             icon={Bed}
             text={`${bedrooms}`}
           />
           <span>|</span>
             <IconWithText 
             icon={Bath}
             text={`${bathrooms}`}
           />
          <span>|</span>
            <IconWithText 
             icon={Maximize}
             text={`${surface} m²`}
           />
        </div>
      </PropertyImage>
      <PropertyAttribute text={address}/>
      <PropertyAttribute 
          text={`£${rent} / month`}
          color="var(--price-color)"
          bold="true"
      />
      <PropertyAttribute text={`Available from: ${date}`}/>
    </article>
  )
}
