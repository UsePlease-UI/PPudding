# Accordion Component

## Anatomy

- **Accordion**
- **Accordion Header**
- **Accordion Panel**
- **Accordion Context API**

## States

- **Collapsed** (content visible)
- **Default** (content hidden)
- **Disabled** (content visible fixed)

## Accessibility

[Reference](https://www.w3.org/WAI/ARIA/apg/patterns/accordion/)

### Accordion Header

- **Title** is inside element with **role button**
- **Header button** is wrapped in a **heading** element
- **Header button** is the **_only_** element in **heading element**
- **Header button** has **aria-controls** set to the **id of associated accordion panel**
- If **associated accordion panel** is **_visible_**, header has **aria-expanded** set to **true**
- If **associated accordion panel** is **_visible_** and is **_not collapsible_**, **header button** has **aria-disabled** set to **true**

### Accordion Panel

- **Container of accordion panel** has **role region**
- **Container of accordion panel** has **aria-labelledby** that refers to **header button** that controls display of the content
