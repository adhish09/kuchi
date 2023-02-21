import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out our fields of work!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='./images/img-9.jpg'
              text='Food Drive'
              label=''
              path='/services'
            />
            <CardItem
              src='./images/img-2.jpg'
              text='Blanket donation Drive'
              label=''
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='./images/img-3.jpg'
              text='Meditation drive'
              label=''
              path='/services'
            />
            <CardItem
              src='./images/img-4.jpg'
              text='Food donation Drive 2'
              label=''
              path='/products'
            />
            <CardItem
              src='./images/img-8.jpg'
              text='During Covid'
              label=''
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
