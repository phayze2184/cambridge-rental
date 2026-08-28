import property01Image from '../assets/images/property-01.webp'
import property02Image from '../assets/images/property-02.webp'
import property03Image from '../assets/images/property-03.webp'
import property04Image from '../assets/images/property-04.webp'
import property05Image from '../assets/images/property-05.webp'
import property06Image from '../assets/images/property-06.webp'

export interface Property {
  id: number
  type: string
  image: string
  bedrooms: number
  bathrooms: number
  surface: number
  address: string
  rent: number
  date: string
  available: boolean
}

const properties: Property[] = [
  {
    id: 1,
    type: 'House',
    image: property01Image,
    bedrooms: 3,
    bathrooms: 2,
    surface: 100,
    address: '123 Main Street, Cambridge',
    rent: 1000,
    date: 'Jan 15',
    available: true,
  },
  {
    id: 2,
    type: 'Apartment',
    image: property02Image,
    bedrooms: 2,
    bathrooms: 1,
    surface: 68,
    address: '42 Mill Road, Cambridge',
    rent: 1450,
    date: 'Feb 3',
    available: true,
  },
  {
    id: 3,
    type: 'Townhouse',
    image: property03Image,
    bedrooms: 4,
    bathrooms: 2,
    surface: 132,
    address: '18 Chesterton Road, Cambridge',
    rent: 2200,
    date: 'Feb 12',
    available: false,
  },
  {
    id: 4,
    type: 'Studio',
    image: property04Image,
    bedrooms: 1,
    bathrooms: 1,
    surface: 38,
    address: '7 Station Place, Cambridge',
    rent: 980,
    date: 'Mar 1',
    available: true,
  },
  {
    id: 5,
    type: 'Cottage',
    image: property05Image,
    bedrooms: 3,
    bathrooms: 2,
    surface: 105,
    address: '56 Trumpington Street, Cambridge',
    rent: 1850,
    date: 'Mar 15',
    available: true,
  },
  {
    id: 6,
    type: 'Maisonette',
    image: property06Image,
    bedrooms: 2,
    bathrooms: 2,
    surface: 84,
    address: '29 Newmarket Road, Cambridge',
    rent: 1650,
    date: 'Apr 6',
    available: false,
  },
]

export default properties
