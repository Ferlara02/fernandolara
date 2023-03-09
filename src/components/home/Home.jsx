import React from "react";

import Data from "./Data";
import "./home.css"
import Typewriter from "typewriter-effect"; 
const Home = () => {
    return(
        <section className="home section" id="home">
            <div className="home__container container grid">
                <div className="home__content">
                    <div className="text">
                        <Typewriter options={{
                            autoStart: true,
                            loop: true,
                            delay: 80,
                            strings: ["Web Dev",
                             "React JS",]
                        }} />
                    </div>
                    <Data/>
                </div>
            </div>
        </section>
    )
}

export default Home;