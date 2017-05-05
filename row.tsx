import * as React from 'react'

interface IRowProps {
  readonly children?: ReadonlyArray<JSX.Element>
}

export class Row extends React.Component<IRowProps, void> {
  public render() {
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
}