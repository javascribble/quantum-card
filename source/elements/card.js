import { Quantum, define } from '../../references/quantum.js';
import { card } from '../templates/card.js';

export class Card extends Quantum {
    constructor() {
        super(card);
    }
}

define(Card);