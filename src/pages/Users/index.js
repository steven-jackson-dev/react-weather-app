import React, { useState, useEffect } from 'react'
import { fetchUsersData } from 'api'
import UserItem from './components/UserItem.js'
import { Row, Col } from 'react-bootstrap'

const Users = () => {
    const [users, setUsers] = useState(false)
    useEffect(() => { getUserData() }, [])

    const getUserData = async () => {
        try {
            const userData = await fetchUsersData();
            setUsers(userData)
        } catch (error) {
            console.warn(error)
        }
    }

    return (
        <section className="Users" style={{ textAlign: 'center', margin: '2em 0' }}>
            <h2>Users Page</h2>
            <Row>
                {!users && <div className="text-center">Loading</div>}
                {(users.length > 0) &&
                    users.map(user => { return <Col key={user.id} xs={6} md={4}><UserItem user={user} /></Col> })
                }
            </Row>
        </section >
    )
}

export default Users
