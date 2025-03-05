import React, {useState} from 'react';
import cards from './FlashcardData';



function Flashcard(cardNumber) {
    
    return (
        <div className='flashcard' style={{backgroundColor: cards[cardNumber].color}}>
            <div className='front'>{cards[cardNumber].front}</div>
            <div className='back'>{cards[cardNumber].back}</div>
        </div>

    );
}

export default Flashcard;