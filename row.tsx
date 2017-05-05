import * as React from 'react'

interface IRowProps {
  /** The class name for the internal element. */
  readonly className?: string

  /** The children to be displayed in a row. */
  readonly children?: ReadonlyArray<JSX.Element>
}

/** A horizontal row element with app-standard styles. */
export class Row extends React.Component<IRowProps, void> {
  public render() {
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
}