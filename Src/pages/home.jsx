import React from 'react'
import Detail from 'Src\components\home\homeprofile.jsx'
import Watch from 'Src\components\home\stopwatch.jsx'
import Note from 'Src\components\home\notes.jsx'
import Weather from "Src\components\home\homeweather.jsx"
import News from "Src\components\home\homenews.jsx"

import { useNavigate } from 'react-router-dom'
const Home = () => {
      const navigate = useNavigate()
    const handleClick = () => {
          navigate('/Movies')
    }
    return (
            <div style={{background: "black", boxSizing: "border-box" }}>
                <div style={{ display: "flex", gap: "20px" }}>
                    <div>
                        <Detail />
                        <Weather />
                        <Watch />
                    </div>
                    <div>
                        <Note />
                    </div>
                    <div>
                        <News />
                    </div>
                </div>
                <button onClick={handleClick} style={{ position: "absolute", bottom: "2vh", right: "6vw", background: "green", fontSize:"15px",fontWeight:"600",border: "none", color: "white", padding: "6px", borderRadius: "12px",width:"100px" }}>Browse</button>
            </div>
            )
}

export default Home