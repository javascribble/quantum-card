import html from '../templates/card.js';

export class Card extends Quantum {
    constructor() {
        super();
    }
}

Card.define('quantum-card', html);