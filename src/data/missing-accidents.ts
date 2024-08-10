import { MissingAccidentList } from '@/app/types'

export const missingAccidents: MissingAccidentList = [
  {
    caseNumber: 'SB-2024080912345',
    missingTime: new Date('2024-08-09T10:30:00+09:00'), // 10:30 AM KST
    location: '123-4, Jangryang-dong, Buk-gu',
    estimatedLocation: '125-6, Jangryang-dong, Buk-gu',
    captured: [
      {
        imageUrl: '/images/정우_small_1.png',
        time: new Date('2024-08-09T11:00:00+09:00'), // 11:00 AM KST
        coordinate: {
          x: 30,
          y: 50,
        },
        gps: {
          latitude: 36.01917,
          longitude: 129.34349,
        },
        accuracy: 96.5,
      },
      {
        imageUrl: '/images/정우_small_3.png',
        time: new Date('2024-08-09T11:30:00+09:00'), // 11:30 AM KST
        coordinate: {
          x: 55,
          y: 70,
        },
        gps: {
          latitude: 36.0201,
          longitude: 129.34423,
        },
        accuracy: 95.7,
      },
      {
        imageUrl: '/images/정우_small_2.png',
        time: new Date('2024-08-09T12:00:00+09:00'), // 12:00 AM KST
        coordinate: {
          x: 55,
          y: 70,
        },
        gps: {
          latitude: 36.0201,
          longitude: 129.34423,
        },
        accuracy: 95.7,
      },
    ],
    missingPerson: {
      name: 'Jayden Ryu',
      imageUrl: '/images/정우_small_2.png',
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
    captured: [
      {
        imageUrl: '/images/박도윤_small_1.png',
        time: new Date('2024-08-10T14:45:00+09:00'), // 2:45 PM KST
        coordinate: {
          x: 25,
          y: 45,
        },
        gps: {
          latitude: 35.97765,
          longitude: 129.35935,
        },
        accuracy: 98.1,
      },
      {
        imageUrl: '/images/도윤_small_2.png',
        time: new Date('2024-08-10T15:15:00+09:00'), // 3:15 PM KST
        coordinate: {
          x: 45,
          y: 65,
        },
        gps: {
          latitude: 35.97821,
          longitude: 129.36024,
        },
        accuracy: 96.8,
      },
    ],
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
]
