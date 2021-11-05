import React from "react";
import ReactDOM from "react-dom";
import {kartKaristir, sifirlama, kartGizle} from "./cards";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    componentDidMount() {
        kartGizle();
    }


    render() {
        return (<div>

            <img id={"kart0"} className={"kart"} onClick={() => kartKaristir(0)}/>
            <img id={"kart1"} className={"kart"} onClick={() => kartKaristir(1)}/>
            <img id={"kart2"} className={"kart"} onClick={() => kartKaristir(2)}/>

            <div className={"mesaj"}>
                <p id={"alanId"}>Kedi kartını bulmak için kartın üstüne tıklayınız</p>
                <p id={"kazandiId"}  >Kazandın!! Tebrik ederiz :) Yeni bir oyun oynamak istersen
                    <a href={""} onClick={() => sifirlama()}>buraya</a> tıklayabilirsin.</p>
                <p id={"kaybettiId"} >Kaybettin :( Yeni bir oyun oynamak istersen
                    <a href={""} onClick={() => sifirlama()}>buraya </a> tıklayabilirsiz </p>
            </div>
        </div>)
    }
}


ReactDOM.render(<App/>, document.getElementById('root'))