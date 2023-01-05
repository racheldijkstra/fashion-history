import React from "react";
import rachel from '../../HomePagePicture/icon_rachel.png'
import Yiming from '../../HomePagePicture/icon_yiming.png'
import homePic from '../../HomePagePicture/Home_picture.png'

function Home(){
    return(
        <div className="home">
            <div className="home-text-block">
                <h1 className="home-text-title">
                    Welcome to the fashion history website   
                </h1>
                <p className="home-text-paragraph">
                    Welcome to the fashion history website. On this website, we want to give users the freedom to compare paintings from different regions and time eras. 
                </p>
                <p className="home-text-paragraph">
                    The aim of this website, is to give the users the ability to filter on the information they want to know with paintings, and to use these paintings to guide the users through the evolution of clothing styles between 1750 and 1950.
                </p>
                <h2 className="home-contact-title">
                    Contributers
                </h2>
                <div className="home-contacts-container">
                    <div className="home-contact-container">
                        <img src={rachel} className="home-contact-picture"/>
                        Rachel Dijkstra
                    </div>
                    <div className="home-contact-container">
                        <img src={Yiming} className="home-contact-picture"/>
                        Yiming Tong
                    </div>
                </div>
            </div>
            <div className="home-picture-block">
                <img src={homePic} className="home-picture"/>
            </div>
        </div>
    );
}

export default Home