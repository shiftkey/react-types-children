# react-types-children
## Investigating a regression in DefinitelyTyped


Repro:

After cloning this repository down:

```
npm i
npm run compile
```

Relevant code snippet:
```
export class Index extends React.Component<IIndexProps, void> {
  public render() {
    return (
        <Row>
            <span>things go here</span>
        </Row>
    )
  }
}
```

Where the props for `Row` look like this:

```
interface IRowProps {
  readonly children?: ReadonlyArray<JSX.Element>
}
```


This code was previously valid with `@types/react@15.0.23`, but now fails with this error:

```
index.tsx(16,9): error TS2322: Type '{ children: Element; }' is not assignable to type 'IntrinsicAttributes & IntrinsicClassAttributes<Row> & Readonly<{ children?: ReactNode; }> & Reado...'.
  Type '{ children: Element; }' is not assignable to type 'Readonly<IRowProps>'.
    Types of property 'children' are incompatible.
      Type 'Element' is not assignable to type 'ReadonlyArray<Element> | undefined'.
        Type 'Element' is not assignable to type 'ReadonlyArray<Element>'.
          Property 'length' is missing in type 'Element'.
```