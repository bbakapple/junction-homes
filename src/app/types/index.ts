export interface Coordinate {
  x: number
  y: number
}

export interface Captured {
  imageUrl: string
  time: Date
  coordinate: Coordinate
}

export interface MissingPerson {
  name: string
  imageUrl: string
  age: number
  signalment: string[]
  disability?: string
  physicalFeature?: string
}

export type CaseStatus = 'notStart' | 'progress' | 'done'

export interface Police {
  name: string
  associate: string
  profileImage: string
}

export interface MissingAccident {
  caseNumber: number
  missingTime: Date
  location: string
  captured: Captured[]
  missingPerson: MissingPerson
  caseStatus: CaseStatus
  charge: Police | null
}

export type MissingAccidentList = MissingAccident[]
