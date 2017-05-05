import * as React from 'react'

import { Row } from './row'

interface IAboutProps {

}

/**
 * A dialog that presents information about the
 * running application such as name and version.
 */
export class About extends React.Component<IAboutProps, void> {
  public render() {
    return (
        <Row>
            <span>things go here</span>
        </Row>
    )
  }
}
