import { MissingAccidentList } from '@/app/types'

const capturedTemplate1 = [
  {
    thumbnail: '/images/정우_small_1.png',
    imageUrl: '/images/정우_7.png',
    time: new Date('2024-08-09T11:00:00+09:00'), // 11:00 AM KST
    coordinate: {
      x: 35,
      y: 30,
    },
    gps: {
      latitude: 36.01917,
      longitude: 129.34349,
    },
    accuracy: 96.5,
  },
  {
    thumbnail: '/images/정우_small_3.png',
    imageUrl: '/images/정우_7.png',
    time: new Date('2024-08-09T11:30:00+09:00'), // 11:30 AM KST
    coordinate: {
      x: 30,
      y: 45,
    },
    gps: {
      latitude: 36.0201,
      longitude: 129.34423,
    },
    accuracy: 95.7,
  },
  {
    thumbnail: '/images/정우_small_2.png',
    imageUrl: '/images/정우_7.png',
    time: new Date('2024-08-09T12:00:00+09:00'), // 12:00 PM KST
    coordinate: {
      x: 65,
      y: 65,
    },
    gps: {
      latitude: 36.0201,
      longitude: 129.34423,
    },
    accuracy: 95.7,
  },
]

const capturedTemplate2 = [
  {
    thumbnail: '/images/박도윤_small_1.png',
    imageUrl: '/images/도윤_1.png',
    time: new Date('2024-08-10T14:45:00+09:00'), // 2:45 PM KST
    coordinate: {
      x: 70,
      y: 45,
    },
    gps: {
      latitude: 35.97765,
      longitude: 129.35935,
    },
    accuracy: 98.1,
  },
  {
    thumbnail: '/images/도윤_small_2.png',
    imageUrl: '/images/도윤_1.png',
    time: new Date('2024-08-10T15:15:00+09:00'), // 3:15 PM KST
    coordinate: {
      x: 45,
      y: 60,
    },
    gps: {
      latitude: 35.97821,
      longitude: 129.36024,
    },
    accuracy: 96.8,
  },
]

export const missingAccidents: MissingAccidentList = [
  {
    caseNumber: 'SB-2024080912345',
    missingTime: new Date('2024-08-09T10:30:00+09:00'), // 10:30 AM KST
    location: '123-4, Jangryang-dong, Buk-gu',
    estimatedLocation: '125-6, Jangryang-dong, Buk-gu',
    captured: capturedTemplate1,
    missingPerson: {
      name: 'Jayden Ryu',
      imageUrl: '/images/정우_small_3.png',
      age: 67,
      gender: 'male',
      signalment: ['White shirt', 'Jeans', 'Black sneakers'],
      physicalFeature: 'Scar above left eyebrow',
    },
    caseStatus: 'doing',
    charge: {
      name: 'Minsoo Park',
      associate: 'Bukbu Police Station',
      profileImage: '/images/police.png',
    },
  },
  {
    caseNumber: 'SB-2024081016789',
    missingTime: new Date('2024-08-10T14:20:00+09:00'), // 2:20 PM KST
    location: '56-78, Daejam-dong, Nam-gu',
    estimatedLocation: '58-80, Daejam-dong, Nam-gu',
    captured: capturedTemplate2,
    missingPerson: {
      name: 'Jieun Lee',
      imageUrl: '/images/도윤_small_2.png',
      age: 18,
      gender: 'female',
      signalment: ['Black t-shirt', 'Gray skirt', 'White sneakers'],
      disability: 'Hearing impairment',
      physicalFeature: 'Small mole on right ear',
    },
    caseStatus: 'yet',
    charge: null,
  },
  {
    caseNumber: 'SB-2024080912678',
    missingTime: new Date('2024-08-09T15:45:00+09:00'), // 3:45 PM KST
    location: '987-6, Hwasan-dong, Jung-gu',
    estimatedLocation: '990-9, Hwasan-dong, Jung-gu',
    captured: capturedTemplate1,
    missingPerson: {
      name: 'Sohee Kim',
      imageUrl: '/images/정우_small_2.png',
      age: 27,
      gender: 'male',
      signalment: ['Red dress', 'Black heels'],
      physicalFeature: 'Tattoo on left ankle',
    },
    caseStatus: 'doing',
    charge: {
      name: 'Jiwon Lee',
      associate: 'Junggu Police Station',
      profileImage: '/images/police.png',
    },
  },
  {
    caseNumber: 'SB-2024081012456',
    missingTime: new Date('2024-08-10T11:20:00+09:00'), // 11:20 AM KST
    location: '123-5, Sinchang-dong, Buk-gu',
    estimatedLocation: '126-7, Sinchang-dong, Buk-gu',
    captured: capturedTemplate1,
    missingPerson: {
      name: 'Doyeong Kim',
      imageUrl: '/images/정우_small_1.png',
      age: 19,
      gender: 'male',
      signalment: ['White hoodie', 'Black jeans'],
      disability: 'Autism',
      physicalFeature: 'Scar on right hand',
    },
    caseStatus: 'yet',
    charge: null,
  },
  {
    caseNumber: 'SB-2024081019123',
    missingTime: new Date('2024-08-10T17:45:00+09:00'), // 5:45 PM KST
    location: '456-9, Muryong-dong, Nam-gu',
    estimatedLocation: '460-12, Muryong-dong, Nam-gu',
    captured: capturedTemplate1,
    missingPerson: {
      name: 'Jihu Choi',
      imageUrl: '/images/정우_small_3.png',
      age: 52,
      gender: 'male',
      signalment: ['Green sweater', 'Blue jeans'],
      physicalFeature: 'Missing front tooth',
    },
    caseStatus: 'doing',
    charge: {
      name: 'Hyeonwoo Lee',
      associate: 'Namgu Police Station',
      profileImage: '/images/police.png',
    },
  },
  {
    caseNumber: 'SB-2024081112345',
    missingTime: new Date('2024-08-11T13:30:00+09:00'), // 1:30 PM KST
    location: '789-10, Songjeong-dong, Jung-gu',
    estimatedLocation: '790-11, Songjeong-dong, Jung-gu',
    captured: capturedTemplate2,
    missingPerson: {
      name: 'Eunwoo Lee',
      imageUrl: '/images/박도윤_small_1.png',
      age: 42,
      gender: 'female',
      signalment: ['Yellow blouse', 'White pants'],
      physicalFeature: 'Freckles on cheeks',
    },
    caseStatus: 'yet',
    charge: {
      name: 'Yuna Kim',
      associate: 'Junggu Police Station',
      profileImage: '/images/police.png',
    },
  },
  {
    caseNumber: 'SB-2024081015890',
    missingTime: new Date('2024-08-10T09:10:00+09:00'), // 9:10 AM KST
    location: '12-34, Beomil-dong, Dong-gu',
    estimatedLocation: '13-35, Beomil-dong, Dong-gu',
    captured: capturedTemplate1,
    missingPerson: {
      name: 'Minjun Park',
      imageUrl: '/images/영택_small_1.png',
      age: 34,
      gender: 'male',
      signalment: ['Blue jacket', 'Black pants'],
      physicalFeature: 'Large birthmark on right arm',
    },
    caseStatus: 'done',
    charge: {
      name: 'Sanghoon Choi',
      associate: 'Donggu Police Station',
      profileImage: '/images/police.png',
    },
  },
]
