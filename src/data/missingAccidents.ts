import { MissingAccidentList } from '@/app/types'

export const MissingAccidents: MissingAccidentList = [
  {
    caseNumber: 12345,
    missingTime: new Date('2024-08-01T10:30:00Z'),
    location: 'Jangryang-dong, Buk-gu, Pohang, Gyeongbuk',
    captured: [
      {
        imageUrl: 'https://example.com/captured1.jpg',
        time: new Date('2024-08-01T11:00:00Z'),
        coordinate: {
          x: 30,
          y: 40,
        },
        gps: {
          latitude: 36.01917,
          longitude: 129.34349,
        },
        accuracy: 96.5,
      },
      {
        imageUrl: 'https://example.com/captured2.jpg',
        time: new Date('2024-08-01T11:30:00Z'),
        coordinate: {
          x: 55,
          y: 65,
        },
        gps: {
          latitude: 36.0201,
          longitude: 129.34423,
        },
        accuracy: 95.7,
      },
    ],
    missingPerson: {
      name: 'Chulsoo Kim',
      imageUrl: 'https://example.com/kimchulsoo.jpg',
      age: 67,
      gender: 'male',
      signalment: ['White shirt', 'Jeans', 'Black sneakers'],
      physicalFeature: 'Scar above left eyebrow',
    },
    caseStatus: 'progress',
    charge: {
      name: 'Minsoo Park',
      associate: 'Bukbu Police Station, Pohang',
      profileImage: 'https://example.com/parkminsoo.jpg',
    },
  },
  {
    caseNumber: 67890,
    missingTime: new Date('2024-08-05T14:20:00Z'),
    location: 'Daejam-dong, Nam-gu, Pohang, Gyeongbuk',
    captured: [
      {
        imageUrl: 'https://example.com/captured3.jpg',
        time: new Date('2024-08-05T14:45:00Z'),
        coordinate: {
          x: 20,
          y: 30,
        },
        gps: {
          latitude: 35.97765,
          longitude: 129.35935,
        },
        accuracy: 98.1,
      },
      {
        imageUrl: 'https://example.com/captured4.jpg',
        time: new Date('2024-08-05T15:15:00Z'),
        coordinate: {
          x: 45,
          y: 50,
        },
        gps: {
          latitude: 35.97821,
          longitude: 129.36024,
        },
        accuracy: 96.8,
      },
      {
        imageUrl: 'https://example.com/captured5.jpg',
        time: new Date('2024-08-05T15:50:00Z'),
        coordinate: {
          x: 70,
          y: 70,
        },
        gps: {
          latitude: 35.97931,
          longitude: 129.36141,
        },
        accuracy: 97.5,
      },
    ],
    missingPerson: {
      name: 'Jieun Lee',
      imageUrl: 'https://example.com/leejieun.jpg',
      age: 18,
      gender: 'female',
      signalment: ['Black t-shirt', 'Gray skirt', 'White sneakers'],
      disability: 'Hearing impairment',
      physicalFeature: 'Small mole on right ear',
    },
    caseStatus: 'progress',
    charge: {
      name: 'Suhyun Jung',
      associate: 'Nambu Police Station, Pohang',
      profileImage: 'https://example.com/jungsuhyun.jpg',
    },
  },
  {
    caseNumber: 11223,
    missingTime: new Date('2024-08-03T08:15:00Z'),
    location: 'Idong, Nam-gu, Pohang, Gyeongbuk',
    captured: [
      {
        imageUrl: 'https://example.com/captured6.jpg',
        time: new Date('2024-08-03T08:45:00Z'),
        coordinate: {
          x: 25,
          y: 50,
        },
        gps: {
          latitude: 35.95513,
          longitude: 129.38454,
        },
        accuracy: 97.2,
      },
      {
        imageUrl: 'https://example.com/captured7.jpg',
        time: new Date('2024-08-03T09:15:00Z'),
        coordinate: {
          x: 50,
          y: 75,
        },
        gps: {
          latitude: 35.95687,
          longitude: 129.38671,
        },
        accuracy: 98.6,
      },
    ],
    missingPerson: {
      name: 'Youngsoo Park',
      imageUrl: 'https://example.com/parkyoungsoo.jpg',
      age: 66,
      gender: 'male',
      signalment: ['Gray hoodie', 'Black jeans', 'Sneakers'],
      physicalFeature: 'Tattoo on right arm',
    },
    caseStatus: 'done',
    charge: {
      name: 'Junhyuk Choi',
      associate: 'Nambu Police Station, Pohang',
      profileImage: 'https://example.com/choijunhyuk.jpg',
    },
  },
  {
    caseNumber: 33445,
    missingTime: new Date('2024-08-07T16:50:00Z'),
    location: 'Hwanho-dong, Buk-gu, Pohang, Gyeongbuk',
    captured: [
      {
        imageUrl: 'https://example.com/captured8.jpg',
        time: new Date('2024-08-07T17:15:00Z'),
        coordinate: {
          x: 20,
          y: 40,
        },
        gps: {
          latitude: 36.03512,
          longitude: 129.37966,
        },
        accuracy: 95.4,
      },
      {
        imageUrl: 'https://example.com/captured9.jpg',
        time: new Date('2024-08-07T17:40:00Z'),
        coordinate: {
          x: 50,
          y: 65,
        },
        gps: {
          latitude: 36.03603,
          longitude: 129.38082,
        },
        accuracy: 96.9,
      },
      {
        imageUrl: 'https://example.com/captured10.jpg',
        time: new Date('2024-08-07T18:10:00Z'),
        coordinate: {
          x: 80,
          y: 90,
        },
        gps: {
          latitude: 36.03758,
          longitude: 129.38141,
        },
        accuracy: 97.6,
      },
    ],
    missingPerson: {
      name: 'Yeeun Jung',
      imageUrl: 'https://example.com/jungeun.jpg',
      age: 19,
      gender: 'female',
      signalment: ['Red hoodie', 'Black leggings', 'Sneakers'],
      physicalFeature: 'Butterfly tattoo on right ankle',
    },
    caseStatus: 'notStart',
    charge: {
      name: 'Jihun Kim',
      associate: 'Bukbu Police Station, Pohang',
      profileImage: 'https://example.com/kimjihun.jpg',
    },
  },
  {
    caseNumber: 55678,
    missingTime: new Date('2024-08-09T12:00:00Z'),
    location: 'Songdo-dong, Buk-gu, Pohang, Gyeongbuk',
    captured: [
      {
        imageUrl: 'https://example.com/captured11.jpg',
        time: new Date('2024-08-09T12:30:00Z'),
        coordinate: {
          x: 20,
          y: 40,
        },
        gps: {
          latitude: 36.02495,
          longitude: 129.34112,
        },
        accuracy: 98.0,
      },
      {
        imageUrl: 'https://example.com/captured12.jpg',
        time: new Date('2024-08-09T13:00:00Z'),
        coordinate: {
          x: 50,
          y: 60,
        },
        gps: {
          latitude: 36.02584,
          longitude: 129.34198,
        },
        accuracy: 96.4,
      },
      {
        imageUrl: 'https://example.com/captured13.jpg',
        time: new Date('2024-08-09T13:30:00Z'),
        coordinate: {
          x: 70,
          y: 80,
        },
        gps: {
          latitude: 36.02672,
          longitude: 129.34275,
        },
        accuracy: 97.3,
      },
      {
        imageUrl: 'https://example.com/captured14.jpg',
        time: new Date('2024-08-09T14:00:00Z'),
        coordinate: {
          x: 100,
          y: 100,
        },
        gps: {
          latitude: 36.0276,
          longitude: 129.34361,
        },
        accuracy: 98.7,
      },
    ],
    missingPerson: {
      name: 'Sungho Lee',
      imageUrl: 'https://example.com/leesungho.jpg',
      age: 66,
      gender: 'male',
      signalment: ['Blue shirt', 'Black pants', 'Black shoes'],
      physicalFeature: 'Amputated right index finger',
    },
    caseStatus: 'progress',
    charge: {
      name: 'Seungmin Oh',
      associate: 'Bukbu Police Station, Pohang',
      profileImage: 'https://example.com/oseungmin.jpg',
    },
  },
]
