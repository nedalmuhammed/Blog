import React from 'react'
import { Spinner } from 'react-bootstrap'
function loader() {
    return (
        <div className='loader'>
            <Spinner animation="border" role="status">
            </Spinner>
        </div>
    )
}
export default loader