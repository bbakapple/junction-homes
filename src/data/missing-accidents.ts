import { MissingAccidentList } from "@/app/types";

export const missingAccidents: MissingAccidentList = [
  {
    caseNumber: 'SB-2024080912345',
    missingTime: new Date('2024-08-09T10:30:00+09:00'), // 10:30 AM KST
    location: '123-4, Jangryang-dong, Buk-gu',
    estimatedLocation: '125-6, Jangryang-dong, Buk-gu',
    captured: [
      {
        imageUrl: 'https://example.com/captured1.jpg',
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
        imageUrl: 'https://example.com/captured2.jpg',
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
    ],
    missingPerson: {
      name: 'Chulsoo Kim',
      imageUrl: 'https://example.com/kimchulsoo.jpg',
      age: 67,
      gender: 'male',
      signalment: ['White shirt', 'Jeans', 'Black sneakers'],
      physicalFeature: 'Scar above left eyebrow',
    },
    caseStatus: 'doing',
    charge: {
      name: 'Minsoo Park',
      associate: 'Bukbu Police Station',
      profileImage: 'https://example.com/parkminsoo.jpg',
    },
  },
  {
    caseNumber: 'SB-2024081016789',
    missingTime: new Date('2024-08-10T14:20:00+09:00'), // 2:20 PM KST
    location: '56-78, Daejam-dong, Nam-gu',
    estimatedLocation: '58-80, Daejam-dong, Nam-gu',
    captured: [
      {
        imageUrl: 'https://example.com/captured3.jpg',
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
        imageUrl: 'https://example.com/captured4.jpg',
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
      {
        imageUrl: 'https://example.com/captured5.jpg',
        time: new Date('2024-08-10T15:50:00+09:00'), // 3:50 PM KST
        coordinate: {
          x: 70,
          y: 85,
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
    caseStatus: 'doing',
    charge: {
      name: 'Suhyun Jung',
      associate: 'Nambu Police Station',
      profileImage: 'https://example.com/jungsuhyun.jpg',
    },
  },
  {
    caseNumber: 'SB-2024081111223',
    missingTime: new Date('2024-08-11T08:15:00+09:00'), // 8:15 AM KST
    location: '45-6, Idong-dong, Nam-gu',
    estimatedLocation: '50-8, Idong-dong, Nam-gu',
    captured: [
      {
        imageUrl: 'https://example.com/captured6.jpg',
        time: new Date('2024-08-11T08:45:00+09:00'), // 8:45 AM KST
        coordinate: {
          x: 30,
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
        time: new Date('2024-08-11T09:15:00+09:00'), // 9:15 AM KST
        coordinate: {
          x: 50,
          y: 70,
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
      associate: 'Nambu Police Station',
      profileImage: 'https://example.com/choijunhyuk.jpg',
    },
  },
  {
    caseNumber: 'SB-2024081013345',
    missingTime: new Date('2024-08-10T16:50:00+09:00'), // 4:50 PM KST
    location: '34-12, Hwanho-dong, Buk-gu',
    estimatedLocation: '35-14, Hwanho-dong, Buk-gu',
    captured: [
      {
        imageUrl: 'https://example.com/captured8.jpg',
        time: new Date('2024-08-10T17:15:00+09:00'), // 5:15 PM KST
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
        time: new Date('2024-08-10T17:40:00+09:00'), // 5:40 PM KST
        coordinate: {
          x: 40,
          y: 60,
        },
        gps: {
          latitude: 36.03603,
          longitude: 129.38082,
        },
        accuracy: 96.9,
      },
      {
        imageUrl: 'https://example.com/captured10.jpg',
        time: new Date('2024-08-10T18:10:00+09:00'), // 6:10 PM KST
        coordinate: {
          x: 60,
          y: 80,
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
    caseStatus: 'yet',
    charge: {
      name: 'Jihoon Kim',
      associate: 'Bukbu Police Station',
      profileImage: 'https://example.com/kimjihoon.jpg',
    },
  },
  {
    caseNumber: 'SB-2024080915678',
    missingTime: new Date('2024-08-09T13:00:00+09:00'), // 1:00 PM KST
    location: '789-10, Songdo-dong, Buk-gu',
    estimatedLocation: '790-11, Songdo-dong, Buk-gu',
    captured: [
      {
        imageUrl: 'https://example.com/captured11.jpg',
        time: new Date('2024-08-09T13:30:00+09:00'), // 1:30 PM KST
        coordinate: {
          x: 75,
          y: 80,
        },
        gps: {
          latitude: 36.01234,
          longitude: 129.34567,
        },
        accuracy: 98.0,
      },
      {
        imageUrl: 'https://example.com/captured12.jpg',
        time: new Date('2024-08-09T14:00:00+09:00'), // 2:00 PM KST
        coordinate: {
          x: 50,
          y: 60,
        },
        gps: {
          latitude: 36.01345,
          longitude: 129.34678,
        },
        accuracy: 95.2,
      },
    ],
    missingPerson: {
      name: 'Sungmin Choi',
      imageUrl: 'https://example.com/choisungmin.jpg',
      age: 25,
      gender: 'male',
      signalment: ['Blue shirt', 'Khaki pants', 'Brown shoes'],
      physicalFeature: 'No distinguishing marks',
    },
    caseStatus: 'doing',
    charge: {
      name: 'Seungmin Lee',
      associate: 'Bukbu Police Station',
      profileImage: 'https://example.com/leeseungmin.jpg',
    },
  },
  {
    caseNumber: 'SB-2024081012345',
    missingTime: new Date('2024-08-10T09:45:00+09:00'), // 9:45 AM KST
    location: '321-8, Haeundae-dong, Haeundae-gu',
    estimatedLocation: '321-10, Haeundae-dong, Haeundae-gu',
    captured: [
      {
        imageUrl: 'https://example.com/captured13.jpg',
        time: new Date('2024-08-10T10:15:00+09:00'), // 10:15 AM KST
        coordinate: {
          x: 60,
          y: 80,
        },
        gps: {
          latitude: 35.15809,
          longitude: 129.16042,
        },
        accuracy: 94.0,
      },
      {
        imageUrl: 'https://example.com/captured14.jpg',
        time: new Date('2024-08-10T10:45:00+09:00'), // 10:45 AM KST
        coordinate: {
          x: 40,
          y: 60,
        },
        gps: {
          latitude: 35.15999,
          longitude: 129.16132,
        },
        accuracy: 95.5,
      },
    ],
    missingPerson: {
      name: 'Minji Seo',
      imageUrl: 'https://example.com/seominji.jpg',
      age: 29,
      gender: 'female',
      signalment: ['Green dress', 'White sandals'],
      physicalFeature: 'Freckles on face',
    },
    caseStatus: 'yet',
    charge: {
      name: 'Jiwon Han',
      associate: 'Haeundae Police Station',
      profileImage: 'https://example.com/hanjiwon.jpg',
    },
  }
];
