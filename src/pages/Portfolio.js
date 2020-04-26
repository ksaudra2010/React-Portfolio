import React, { useEffect, useState } from "react";

function About() {
  return (
    <div class='container bg-white'>
        <div class='row'>
            <div class='col-12 maincontent'>
                <h2>Portfolio</h2>
                <div class="gallery">
                    <div class="row">
                        <div class="col-md-4">
                            <div class="thumbnail">
                                <div class="desc">Virtual Vacation - Group Project 
                                    <br/> 
                                    Take a Virtual Vacation All Over the World!
                                </div>
                                <a target="_blank" href="https://immense-wildwood-98172.herokuapp.com/">
                                <img src={process.env.PUBLIC_URL + "/assets/images/virtualvaca.PNG"} class="img-responsive" alt="vaca" width="600" height="400"/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="gallery">
                    <div class="row">
                        <div class="col-md-4">
                            <div class="thumbnail">
                                <div class="desc">Weather or Not 
                                    <br/> 
                                    Search today's forecast and 5 days ahead
                                </div>
                                <a target="_blank" href="https://ksaudra2010.github.io/weatherapp/">
                                <img src={process.env.PUBLIC_URL + "/assets/images/weather.PNG"} class="img-responsive" alt="weather" width="600" height="400"/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="gallery">
                    <div class="row">
                        <div class="col-md-4">
                            <div class="thumbnail">
                                <div class="desc">Eat Some Burgers! 
                                    <br/> 
                                    Add some burger ideas and get inspired
                                </div>
                                <a target="_blank" href="https://stormy-meadow-62526.herokuapp.com/">
                                <img src={process.env.PUBLIC_URL + "/assets/images/burgers.PNG"} class="img-responsive" alt="burgers" width="600" height="400"/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="gallery">
                    <div class="row">
                        <div class="col-md-4">
                            <div class="thumbnail">
                                <div class="desc">Trail Mix - Group Project 
                                    <br/> 
                                    Search for biking trails and restaurants nearby
                                </div>
                                <a target="_blank" href="https://github.com/KevinNgo-Creator/Project-1">
                                <img src={process.env.PUBLIC_URL + "/assets/images/trails.png.PNG"} class="img-responsive" alt="bikes" width="600" height="400"/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="gallery">
                    <div class="row">
                        <div class="col-md-4">
                            <div class="thumbnail">
                                <div class="desc">Help Plan Your Day</div>
                                <a target="_blank" href="https://ksaudra2010.github.io/dayplanner">
                                <img src={process.env.PUBLIC_URL + "/assets/images/DayPlanner.png.PNG"} class="img-responsive" alt="planner" width="600"
                                        height="400"/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>


                <div class="gallery">
                    <div class="row">
                        <div class="col-md-4">
                            <div class="thumbnail">
                                <div class="desc">Test Your Coding Knowledge!</div>
                                <a target="_blank" href="https://github.com/ksaudra2010/quiz">
                                    <img src={process.env.PUBLIC_URL + "/assets/images/quiz.png.PNG"} class="img-responsive" alt="quiz" width="600" height="400"/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
  }
export default About;
