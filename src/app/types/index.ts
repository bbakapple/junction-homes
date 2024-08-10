export interface Coordinate {
  x: number
  y: number
}

export interface Capture {
  thumbnail: string
  imageUrl: string
  time: Date
  coordinate: Coordinate
  accuracy: number
  gps: {
    latitude: number
    longitude: number
  }
}

export interface MissingPerson {
  name: string
  imageUrl: string
  age: number
  gender: string
  signalment: string[]
  disability?: string
  physicalFeature?: string
}

export type CaseStatus = 'doing' | 'yet' | 'done'

export interface Police {
  name: string
  associate: string
  profileImage: string
}

export interface MissingAccident {
  caseNumber: string
  missingTime: Date
  location: string
  captured: Capture[]
  missingPerson: MissingPerson
  caseStatus: CaseStatus
  charge: Police | null
  estimatedLocation: string
}

export type MissingAccidentList = MissingAccident[]
