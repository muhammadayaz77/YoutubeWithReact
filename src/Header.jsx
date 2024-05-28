import React from "react";
import menu from './assets/menu-alt-right-regular-24.png'
import youtube from './assets/youtube-logo-24.png'
import search from './assets/search-alt-2-regular-24.png'
import mic from './assets/microphone-solid-24.png'
import bell from './assets/bell-plus-regular-24.png'
import video from './assets/video-plus-regular-24 (1).png'
import cir from './assets/circle-solid-24.png'

function Header(){
    return (
        <div>
            <header className="navbar">
                <div className="ytContainer">
                <img src={menu} alt="" />
                <img src={youtube} className="youtubeLoge" alt="" /> Youtube
                </div>
                <div>
                    <div className="inputContainer">
                        <input type="text" placeholder="Searching..." /> <img src={search} className="sear" alt="" />
                        <img src={mic} alt="" />
                    </div>
                </div>
                <div className="logos">
                    <img src={video} alt="" />
                    <img src={bell} alt="" />
                    <img src={cir} alt="" />
                </div>
            </header>
        </div>
    )
}
export default Header;