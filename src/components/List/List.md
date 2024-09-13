# List Component

## Code

```jsx
<List hasDivider>
  <List.Item isDense={false}>
    <List.ItemText primaryText="Hello" secondaryText="This is a list text" />
  </List.Item>
  <List.Item isDense={false}>
    <List.ItemText primaryText="Hi" />
  </List.Item>
</List>
```

```jsx
<List hasDivider>
  <List.ItemButton isDense onClick={() => console.log('hello')}>
    <List.ItemIcon>
      <PersonIcon />
    </List.ItemIcon>
    <List.ItemText primaryText="User Number 1" />
  </List.ItemButton>
  <List.ItemButton isDense onClick={() => console.log('hello')}>
    <List.ItemIcon>
      <PersonIcon />
    </List.ItemIcon>
    <List.ItemText primaryText="User Number 2" />
  </List.ItemButton>
</List>
```

```jsx
<List hasDivider>
  <List.ItemButton isDense onClick={() => console.log('hello')}>
    <List.ItemText primaryText="List Item" />
    <List.Metadata position="end">01</List.Metadata>
  </List.ItemButton>
  <List.ItemButton isDense onClick={() => console.log('hello')}>
    <List.ItemText primaryText="List Item" />
    <List.Metadata position="end">02</List.Metadata>
  </List.ItemButton>
</List>
```

```jsx
const [open, setOpen] = useState<Record<string, boolean>>({
    schedule: true,
    mail: false,
    folder: false
});

<List>
    {['Schedule', 'Mail', 'Folder'].map((val) => (
        <Fragment key={val}>
            <List.ItemButton
                isDense
                onClick={() => setOpen((prev) => ({ ...prev, [val]: !prev[val] }))}
            >
                <List.ItemText
                    primaryText={`${val} List Item`}
                    secondaryText="Click here to see more"
                />
                <List.ItemIcon>
                    {open[val] ? <ChevronUpFilled /> : <ChevronDownFilled />}
                </List.ItemIcon>
            </List.ItemButton>
            <List.Collapse isOpen={open[val]}>
                <List.CollapsedList isDense>
                    <List.Item>
                        <List.ItemText primaryText="Primary Text" />
                    </List.Item>
                    <List.Item>
                        <List.ItemText primaryText="Primary Text 2" />
                    </List.Item>
                </List.CollapsedList>
            </List.Collapse>
        </Fragment>
    ))}
</List>
```

## Anatomy

- [x] List
- [x] List Item
- [x] List Item Text
- [x] List Item Icon (Optional)
- [x] Action Item (Optional)
- [x] Metadata (Optional)

## Extra

- [x] Collapse -> Expandable List Container
- [x] Collapsed List -> Expandable List
- [x] List Item Button -> Clickable List Item

## Variants (List Types)

- [x] Standard List
- [x] Selection Controls List (Radio/Checkbox List)
- [x] Expandable List

## States

- [x] Enabled (default)
- [x] Hover (:hover)
- [x] Focused (:focus)
- [x] Pressed (:active)
- [x] Disabled (:disabled)
