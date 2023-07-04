![](https://img.shields.io/badge/기간-2023--05~2023--06-blue)

## 컴포넌트 구현

### Basic Components

-   [x] Accordion
-   [x] Button
    -   [x] Button
    -   [x] Icon Button
-   [ ] Dialog
    -   [ ] Alert
    -   [ ] Alert / Message Dialog
    -   [ ] Dialog (Modal)
-   [x] Form
    -   [x] Checkbox
    -   [x] Chip
    -   [x] ComboBox
        -   [x] AutoComplete
        -   [x] Select
    -   [x] Radio Group
    -   [x] Textfield
    -   [x] Toggle Button
-   [x] Menu and Menubar
    -   [x] Menu Button (PopOver)
-   [x] Progress
    -   [x] Skeleton
-   [x] Tabs
-   [x] Table
    -   [x] Table
    -   [x] Pagination

### Challenges

-   [ ] Carousel
-   [ ] Calendar
-   [ ] Editor
-   [x] Drag n Drop

---

-   [ ] Design Pattern
    -   [x] Atomic Design
-   [ ] React Architecture

## 일정

**_컴포넌트마다 상이_**

| 작성자           | 주제         |
| ---------------- | ------------ |
| Kimyerim1935     | Pagination   |
| akffkdahffkdgo77 | TextField    |
| akffkdahffkdgo77 | Select       |
| Kimyerim1935     | PopOver      |
| akffkdahffkdgo77 | Button       |
| akffkdahffkdgo77 | Icon Button  |
| akffkdahffkdgo77 | Tab          |
| akffkdahffkdgo77 | Table        |
| akffkdahffkdgo77 | Skeleton     |
| akffkdahffkdgo77 | Radio        |
| akffkdahffkdgo77 | Checkbox     |
| akffkdahffkdgo77 | Accordion    |
| Kimyerim1935     | AutoComplete |
| Kimyerim1935     | Drag n Drop  |

## Convention

### ATOMS

-   HTML tag 또는 더 이상 분해할 수 없는 기본 컴포넌트
-   HTML element, 글꼴, 애니메이션, 컬러 팔레트, 레이아웃 같은 추상적인 요소도 포함
-   단일 컴포넌트로 사용하기 어렵지만 molecules 또는 organisms 단위에서 여러 단위와 결합되어 사용

### MOLECULES

-   두 개 이상의 atoms가 모여 구성된 간단한 컴포넌트
-   고유한 특성을 가진 컴포넌트
-   한 가지 일을 해야한다 (Single Responsibility Principle)

### ORGANISMS

-   UI 인터페이스 / 특정 컨텍스트를 가진 컴포넌트
-   header 컨텍스트 -> 로고(아톰) + navigation (molecule) + search form (molecule)

### Git

<code>feat/[주제명]</code>으로 브랜치 생성

```
GIT COMMIT

feat : …
mod : …
fix : …
chore : …
doc : …
```

### PR 규칙

0. 문서는 feat/ 폴더에 작성한다.
1. main branch로 PR을 보낸다.
2. PR은 다른 참여자의 승인을 받아야 한다.
3. PR merge는 월요일마다 진행한다.

```
PR 메시지

[깃허브 아이디] 컴포넌트명 추가

```

### References

-   [아이콘](https://heroicons.com/)
