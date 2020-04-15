import React from 'react'
import { Card, Row, Col, } from 'react-bootstrap'

const WeatherSearchItem = ({ data }) => {
    const { coord, weather, main, sys, wind} = data;
    const imgSrc = `https://via.placeholder.com/200x200.png?text=${weather[0].main}`

    return (
        <Row>
            <Col>
                <Card style={{ padding: '1em' }}>
                    <Row>
                        <Col md={3} xs={12}>
                            <Card.Img variant="top" src={imgSrc} />
                            <Card.Text style={{ textAlign: 'center' }}>
                                {weather[0].description}
                            </Card.Text>
                        </Col>
                        <Col md={9} xs={12}  style={{ padding: '0 2em' }}>
                            <Card.Title>{data.name} <small>({sys.country})</small></Card.Title>
                            <Card.Text>
                                Longitude: {coord.lon}, Latitute:  {coord.lat}
                            </Card.Text>
                            <Card.Text>
                                Current Temp: {main.temp}<br />
                                Min Temp: {main.temp_min}<br />
                                Max Temp:  {main.temp_max}
                            </Card.Text>
                            <Card.Text>
                                Wind Speed: {wind.speed}<br />
                                Pressure: {main.pressure}<br />
                                Humidity:  {main.humidity}
                            </Card.Text>
                        </Col>
                    </Row>
                </Card>
            </Col>
        </Row>

    )
}

export default WeatherSearchItem
