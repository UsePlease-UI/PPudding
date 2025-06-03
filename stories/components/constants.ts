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
