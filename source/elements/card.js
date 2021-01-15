import html from '../templates/card.js';

export class Card extends Component {
    constructor() {
        super();
    }

    static template = template(html);
}

define('quantum-card', Card);