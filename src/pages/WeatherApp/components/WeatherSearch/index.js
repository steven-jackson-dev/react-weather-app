import React, { useState } from 'react'
import useInputState from 'utils/hooks/useInputState'
import { Row, Form, FormControl, Col } from 'react-bootstrap'
import WeatherSearchItem from './WeatherSearchItem'
import { AppLoadingSpinner } from 'components'
import { searchCities } from 'api'

const WeatherSearch = () => {

    const [searchInput, setSearchInput] = useInputState("")
    const [isLoading, toggleIsLoading] = useState(false)
    const [cityData, setCityData] = useState(null)
    console.log("WeatherSearch -> cityData", cityData)

    const handleOnSubmit = async (e) => {
        e.preventDefault();
        toggleIsLoading(true)
        try {
            const res = await searchCities(searchInput);
            setCityData(res)
            toggleIsLoading(false)
        } catch (error) {
            console.warn("handleOnSubmit -> error", error)
        }
    }

    return (
        <>
            <Row noGutters style={{ margin: '2em 0' }}>
                <Col>
                    <Form onSubmit={handleOnSubmit}>
                        <FormControl
                            placeholder="Search City"
                            aria-label="Search City"
                            aria-describedby="search-city"
                            onChange={setSearchInput}
                        />
                    </Form>
                </Col>
            </Row>


            {!isLoading &&
                <Row>
                    <Col>
                        {cityData &&
                            <WeatherSearchItem data={cityData} />
                        }
                    </Col>
                </Row>
            }

            {isLoading &&
                <Row style={{ textAlign: 'center', margin: '2em 0' }}>
                    <Col>
                        <AppLoadingSpinner />
                    </Col>
                </Row>
            }


        </>
    )
}

export default WeatherSearch
