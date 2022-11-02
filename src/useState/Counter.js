import React, { useState } from "react";
import logo from "../logo.svg";
import "./Counter.css";
import ThemedButton from "../useContext/Index";

export default function Counter() {
    const [text, setText] = React.useState("");
    const [showImage] = useState(true);

    return (
        <div className="Main">
            <h1>Kelompok 26</h1>
            <div className="ViewImage">
                <div className="ViewImage1">
                    <img
                        className="App-logo"
                        style={{
                            display: showImage === true ? "flex" : "none",
                        }}
                        src={logo}
                        alt="logo"
                    />
                </div>
            </div>
            <input
                type="text"
                placeholder=""
                onChange={(e) => setText(e.target.value)}
            />
            <p>{text}</p>
            <ThemedButton />
        </div>
    );
}
