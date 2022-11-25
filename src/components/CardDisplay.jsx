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
        </div>
        <div className='RearCard-Box'>
          <img className='Card-Rear' src={cardRear}></img>
        </div>
    </div>
  )
}
