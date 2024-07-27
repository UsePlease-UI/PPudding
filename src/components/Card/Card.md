# Card Component

## Code

```jsx
<Card>
    <Card.Media type="image" height={350} width={350} src="https://picsum.photos/id/360/200/300" />
    <Card.Text primaryText="멋진 UI를 위한 CSS 스터디" secondaryText="UI/UX" />
</Card>
```

```jsx
<Card>
    <Card.Header>
        <Card.SupportingVisual type="icon" icon={<PaintBrushFilled className="h-20 w-20" />} />
        <Card.Title title="멋진 UI를 위한 CSS 스터디" />
    </Card.Header>
    <Card.Media type="image" height={200} width={350} src="https://picsum.photos/id/464/200/300" />
    <Card.Actions
        primaryText="멋진 UI를 위한 CSS 스터디"
        secondaryText="UX/UI"
        actions={
            <div className="flex items-center justify-between">
                <Button size="small" variant="outlined">
                    신청하기
                </Button>
                <div className="flex items-center gap-10">
                    <IconButton aria-label="좋아요" size="small" variant="text">
                        <HeartRegular />
                    </IconButton>
                    <IconButton aria-label="공유하기" size="small" variant="text">
                        <ShareRegular />
                    </IconButton>
                    <IconButton aria-label="더보기" size="small" variant="text">
                        <MoreVerticalRegular />
                    </IconButton>
                </div>
            </div>
        }
    />
</Card>
```

## Anatomy

-   [x] Container
-   [x] Header
    -   [x] Supporting Visual
    -   [x] Title & Subtitle
-   [x] Media (Image / Video)
-   [x] Text (Primary & Secondary)
-   [x] Actions (Text & Actions)

## Variants

-   [x] Standard Card
-   [x] Action Card
