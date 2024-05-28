import React from "react";
import Home from './assets/home-regular-24.png'
import shorts from './assets/videos-solid-24.png'
import book from './assets/bookmark-star-solid-24.png'
import cardImg1 from './assets/hq720.jpg'
import cardImg2 from './assets/hq720(1).jpg'
import cardImg3 from './assets/hq720(2).jpg'
import cardImg4 from './assets/hqdefault.jpg'
function Body(){
    return(
            <div>
            <div className="container">
            <div className="left">
                <div className="First">
                    <div>
                    <img src={Home} alt="" /> <p>Home</p>
                    </div>
                    <div>
                    <img src={shorts} alt="" /> <p>Shorts</p>
                    </div>
                    <div>
                    <img src={book} alt="" /> <p>Bookmarks</p>
                    </div>
                </div>
            </div>
            <div className="right">
                <div className="btnCon">
                    <button className="btn all">All</button>
                    <button className="btn">Playlists</button>
                    <button className="btn">Music</button>
                    <button className="btn">Mixes</button>
                    <button className="btn">Playlist</button>
                    <button className="btn">Reverbertion</button>
                    <button className="btn">Pashto Songs</button>
                </div>
                <div className="contentSection">
                <div className="card">
                        <img src={cardImg1} alt="" />
                        <h4>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo, eaque.</h4>
                        <p>CodeWithAyaz</p>
                    </div>
                    <div className="card">
                        <img src={cardImg2} alt="" />
                        <h4>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo, eaque.</h4>
                        <p>CodeWithAyaz</p>
                    </div>
                    <div className="card">
                        <img src={cardImg3} alt="" />
                        <h4>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo, eaque.</h4>
                        <p>CodeWithAyaz</p>
                    </div>
                    <div className="card">
                        <img src={cardImg4} alt="" />
                        <h4>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo, eaque.</h4>
                        <p>CodeWithAyaz</p>
                    </div>
                    <div className="card">
                        <img src={cardImg1} alt="" />
                        <h4>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo, eaque.</h4>
                        <p>CodeWithAyaz</p>
                    </div>
                    <div className="card">
                        <img src={cardImg2} alt="" />
                        <h4>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo, eaque.</h4>
                        <p>CodeWithAyaz</p>
                    </div>
                    <div className="card">
                        <img src={cardImg3} alt="" />
                        <h4>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo, eaque.</h4>
                        <p>CodeWithAyaz</p>
                    </div>
                    <div className="card">
                        <img src={cardImg4} alt="" />
                        <h4>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo, eaque.</h4>
                        <p>CodeWithAyaz</p>
                    </div>
                </div>
            </div>
            </div>

            </div>  
    )
}

export default Body;