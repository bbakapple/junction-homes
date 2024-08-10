import { MissingAccidentList } from '@/app/types'

export const MissingAccidents: MissingAccidentList = [
  {
    caseNumber: 12345,
    missingTime: new Date('2024-08-01T10:30:00Z'),
    location: '경상북도 포항시 북구 장량동 123-4',
    captured: [
      {
        imageUrl: 'https://example.com/captured1.jpg',
        time: new Date('2024-08-01T11:00:00Z'),
        coordinate: {
          x: 35,
          y: 60,
        },
      },
      {
        imageUrl: 'https://example.com/captured2.jpg',
        time: new Date('2024-08-01T11:30:00Z'),
        coordinate: {
          x: 42,
          y: 55,
        },
      },
    ],
    missingPerson: {
      name: '김철수',
      imageUrl: 'https://example.com/kimchulsoo.jpg',
      age: 67,
      gender: 'male',
      signalment: ['흰색 셔츠', '청바지', '검은 운동화'],
      physicalFeature: '왼쪽 눈썹 위 흉터',
    },
    caseStatus: 'progress',
    charge: {
      name: '박민수',
      associate: '포항북부경찰서',
      profileImage: 'https://example.com/parkminsoo.jpg',
    },
  },
  {
    caseNumber: 67890,
    missingTime: new Date('2024-08-05T14:20:00Z'),
    location: '경상북도 포항시 남구 대잠동 56-8',
    captured: [
      {
        imageUrl: 'https://example.com/captured3.jpg',
        time: new Date('2024-08-05T14:45:00Z'),
        coordinate: {
          x: 50,
          y: 40,
        },
      },
      {
        imageUrl: 'https://example.com/captured4.jpg',
        time: new Date('2024-08-05T15:15:00Z'),
        coordinate: {
          x: 55,
          y: 45,
        },
      },
      {
        imageUrl: 'https://example.com/captured5.jpg',
        time: new Date('2024-08-05T15:50:00Z'),
        coordinate: {
          x: 58,
          y: 43,
        },
      },
    ],
    missingPerson: {
      name: '이지은',
      imageUrl: 'https://example.com/leejieun.jpg',
      age: 18,
      gender: 'female',
      signalment: ['검은 티셔츠', '회색 스커트', '흰 운동화'],
      disability: '청각 장애',
      physicalFeature: '오른쪽 귀에 작은 점',
    },
    caseStatus: 'progress',
    charge: {
      name: '정수현',
      associate: '포항남부경찰서',
      profileImage: 'https://example.com/jungsuhyun.jpg',
    },
  },
  {
    caseNumber: 11223,
    missingTime: new Date('2024-08-03T08:15:00Z'),
    location: '경상북도 포항시 남구 이동 42-3',
    captured: [
      {
        imageUrl: 'https://example.com/captured6.jpg',
        time: new Date('2024-08-03T08:45:00Z'),
        coordinate: {
          x: 65,
          y: 70,
        },
      },
      {
        imageUrl: 'https://example.com/captured7.jpg',
        time: new Date('2024-08-03T09:15:00Z'),
        coordinate: {
          x: 68,
          y: 75,
        },
      },
    ],
    missingPerson: {
      name: '박영수',
      imageUrl: 'https://example.com/parkyoungsoo.jpg',
      age: 66,
      gender: 'male',
      signalment: ['회색 후드티', '검은 청바지', '운동화'],
      physicalFeature: '오른쪽 팔에 문신',
    },
    caseStatus: 'done',
    charge: {
      name: '최준혁',
      associate: '포항남부경찰서',
      profileImage: 'https://example.com/choijunhyuk.jpg',
    },
  },
  {
    caseNumber: 33445,
    missingTime: new Date('2024-08-07T16:50:00Z'),
    location: '경상북도 포항시 북구 환호동 25-7',
    captured: [
      {
        imageUrl: 'https://example.com/captured8.jpg',
        time: new Date('2024-08-07T17:15:00Z'),
        coordinate: {
          x: 20,
          y: 30,
        },
      },
      {
        imageUrl: 'https://example.com/captured9.jpg',
        time: new Date('2024-08-07T17:40:00Z'),
        coordinate: {
          x: 25,
          y: 35,
        },
      },
      {
        imageUrl: 'https://example.com/captured10.jpg',
        time: new Date('2024-08-07T18:10:00Z'),
        coordinate: {
          x: 28,
          y: 32,
        },
      },
    ],
    missingPerson: {
      name: '정예은',
      imageUrl: 'https://example.com/jungeun.jpg',
      age: 19,
      gender: 'female',
      signalment: ['붉은 후드티', '검은 레깅스', '운동화'],
      physicalFeature: '오른쪽 발목에 나비 문신',
    },
    caseStatus: 'notStart',
    charge: {
      name: '김지훈',
      associate: '포항북부경찰서',
      profileImage: 'https://example.com/kimjihun.jpg',
    },
  },
  {
    caseNumber: 55678,
    missingTime: new Date('2024-08-09T12:00:00Z'),
    location: '경상북도 포항시 북구 송도동 90-2',
    captured: [
      {
        imageUrl: 'https://example.com/captured11.jpg',
        time: new Date('2024-08-09T12:30:00Z'),
        coordinate: {
          x: 75,
          y: 80,
        },
      },
      {
        imageUrl: 'https://example.com/captured12.jpg',
        time: new Date('2024-08-09T13:00:00Z'),
        coordinate: {
          x: 78,
          y: 85,
        },
      },
      {
        imageUrl: 'https://example.com/captured13.jpg',
        time: new Date('2024-08-09T13:30:00Z'),
        coordinate: {
          x: 80,
          y: 82,
        },
      },
      {
        imageUrl: 'https://example.com/captured14.jpg',
        time: new Date('2024-08-09T14:00:00Z'),
        coordinate: {
          x: 82,
          y: 87,
        },
      },
    ],
    missingPerson: {
      name: '이성호',
      imageUrl: 'https://example.com/leesungho.jpg',
      age: 66,
      gender: 'male',
      signalment: ['파란 셔츠', '검은 바지', '검은 구두'],
      physicalFeature: '오른쪽 검지 손가락 절단',
    },
    caseStatus: 'progress',
    charge: {
      name: '오승민',
      associate: '포항북부경찰서',
      profileImage: 'https://example.com/oseungmin.jpg',
    },
  },
]
