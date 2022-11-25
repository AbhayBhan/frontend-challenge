import React,{useState} from 'react';
import cardFront from '../assets/bg-card-front.png';
import cardRear from '../assets/bg-card-back.png';
import cardLogo from '../assets/card-logo.svg';
import '../styles/card.css';


export const CardDisplay = () => {
  return (
    <div className='Card-Container'>
        <div className='FrontCard-Box'>
          <img className='Card-Front' src={cardFront}></img>
          <img className='Card-Logo' src={cardLogo}></img>
          <div className='Card-Details'>
            <div className='Number-Display'>
              <h1>0000</h1>
              <h1>0000</h1>
              <h1>0000</h1>
              <h1>0000</h1>
            </div>
            <div className='Person-Info'>
              <h2>Abhay Bhan</h2>
              <h2>00/00</h2>
            </div>
          </div>
        </div>
        <div className='RearCard-Box'>
          <img className='Card-Rear' src={cardRear}></img>
          <div className='CVV-Display'>
            <h4>000</h4>
          </div>
        </div>
    </div>
  )
}
