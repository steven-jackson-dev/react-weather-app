import React from 'react'
import { Spinner} from 'react-bootstrap'

const index = () => {
    return (
        <Spinner animation="border" role="status" variant="success">
            <span className="sr-only">Loading...</span>
        </Spinner>
    )
}

export default index
