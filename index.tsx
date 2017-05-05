import * as React from 'react'

import { Row } from './row'

interface IIndexProps {

}

export class Index extends React.Component<IIndexProps, void> {
  public render() {
    return (
        <Row>
            <span>things go here</span>
        </Row>
    )
  }
}
