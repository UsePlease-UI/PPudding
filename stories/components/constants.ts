import { v4 as uuid } from 'uuid';

export const OPTIONS = [
  { idx: uuid(), label: '김치찌개', value: 'kimchi-stew' },
  { idx: uuid(), label: '비빔밥', value: 'bibimbap' },
  { idx: uuid(), label: '불고기', value: 'bulgogi' },
  { idx: uuid(), label: '된장찌개', value: 'soybean-paste-stew' },
  { idx: uuid(), label: '삼겹살', value: 'samgyeopsal' },
  { idx: uuid(), label: '잡채', value: 'japchae' },
  { idx: uuid(), label: '떡볶이', value: 'tteokbokki' },
  { idx: uuid(), label: '칼국수', value: 'kalguksu' },
  { idx: uuid(), label: '순두부찌개', value: 'soft-tofu-stew' },
  { idx: uuid(), label: '물냉면', value: 'cold-noodles' },
];

export const AUTOCOMPLETE_LIST = [
  { idx: uuid(), label: '서울', value: 'seoul' },
  { idx: uuid(), label: '부산', value: 'busan' },
  { idx: uuid(), label: '인천', value: 'incheon' },
  { idx: uuid(), label: '대구', value: 'daegu' },
  { idx: uuid(), label: '광주', value: 'gwangju' },
  { idx: uuid(), label: '대전', value: 'daejeon' },
  { idx: uuid(), label: '울산', value: 'ulsan' },
  { idx: uuid(), label: '수원', value: 'suwon' },
  { idx: uuid(), label: '제주', value: 'jeju' },
  { idx: uuid(), label: '춘천', value: 'chuncheon' },
];

export const TABLE_DATA = [
  {
    brand: '그레인팩토리',
    description: '100% 통밀로 만든 바삭한 건강 크래커',
    no: 1,
    productCode: 'GF-TW-001',
    productName: '통밀 크래커',
  },
  {
    brand: '베리밸런스',
    description: '국산 딸기와 저지방 요거트의 조화',
    no: 2,
    productCode: 'BB-ST-210',
    productName: '딸기 요거트',
  },
  {
    brand: '프로즌네이처',
    description: '급속 냉동된 블루베리, 스무디나 요거트 토핑용',
    no: 3,
    productCode: 'FN-BB-330',
    productName: '냉동 블루베리',
  },
  {
    brand: '밥상연구소',
    description: '오징어, 새우가 들어간 매콤한 즉석 볶음밥',
    no: 4,
    productCode: 'BS-HF-012',
    productName: '매콤 해물 볶음밥',
  },
  {
    brand: '소이퓨어',
    description: '콩 본연의 맛을 살린 무가당 두유, 500ml',
    no: 5,
    productCode: 'SP-SY-500',
    productName: '무가당 두유',
  },
];
