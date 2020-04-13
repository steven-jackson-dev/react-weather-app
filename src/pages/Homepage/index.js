import React from 'react'
import FolderStructure from './components/FolderStructure'


const Homepage = () => {
    return (
        <div className="Homepage">
            <section className="HomepageIntro" style={{ textAlign: 'center', margin: '2em 0' }}>
                <h2>React Boilerplate for Bootstrap</h2>
                <p>A basic folder structure and setup that I prefer for quickly setting up React projects.</p>
                <p><b>Usage: </b>
                    Clone or Download the repository
                    <a href="https://github.com/steven-jackson-dev/react-bootstrap-boilerplate" target="_blank" rel="noopener noreferrer"> here </a> and run
               <code> npm install </code> in your CLI.</p>
            </section>
            <FolderStructure />
        </div>
    )
}

export default Homepage
