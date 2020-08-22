import React from "react"

import {Carousel} from 'react-responsive-carousel'
import payOnline from "./assets/undraw_pay_online_b1hk.svg"
import transferMoney from "./assets/undraw_transfer_money_rywa.svg"
import wallet from "./assets/undraw_wallet_aym5.svg"

export default function Authenticate(){
    

    return (
        <div className="carousel-container">
            <Carousel showStatus={false} showThumbs={false} showArrows={true}>
                <div>
                    <img src={payOnline} alt="man giving a woman money"/>
                    <p>Transfer money to loved ones with the lowest fees possible</p>
                </div>
                <div>
                    <img src={transferMoney} alt="huge money"/>
                    <p>Pya items from your wallet</p>
                </div>
                <div>
                    <img src={wallet} alt="man with credit card"/>
                    <p>Pay online</p>
                </div>
            
            </Carousel>
        </div>
    )
}