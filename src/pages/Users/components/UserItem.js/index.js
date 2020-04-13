import React from 'react'
import { Card } from 'react-bootstrap'

const UserItem = (props) => {

    const { user: { name, username, email, company } } = props
    return (
        <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>{name} <br/>({username})</Card.Title>
          <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
          <Card.Subtitle className="mb-2 text-muted">{email}</Card.Subtitle>
          <Card.Text>{company.catchPhrase}</Card.Text>
        </Card.Body>
      </Card>
    )
}

export default UserItem
