export interface Person {
  name: string
  age: string
  address?: AddressType
}

export interface PersonCompleted extends Person {
  isAdult: () => boolean
  liveAtBrazil: () => boolean
}

export interface AddressType {
  street: string
  number: number
  city?: string
  state?: string
  country: string
}
