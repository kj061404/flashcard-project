import React, { useState } from 'react';
import cards from './FlashcardData';

function Flashcard({ cardNumber }) {
    const [isFlipped, setIsFlipped] = useState(false);

    const handleClick = () => {
        setIsFlipped(!isFlipped);
    }

    const cardStyle = {
        backgroundColor: cards[cardNumber].color
    };

    return (
        <div     className={isFlipped ? "cardBack" : "cardFront"} onClick={handleClick} style={cardStyle}>
            <div className="front" style={cardStyle}> {isFlipped ? '' : cards[cardNumber].front} </div>
            <div className="back" style={cardStyle}> {isFlipped ? cards[cardNumber].back : ''} </div>
        </div>
    );
}

export default Flashcard;