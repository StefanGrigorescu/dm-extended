import { Component } from '@angular/core';
import { Card } from '../card.model';

@Component({
  selector: 'app-card-pool',
  templateUrl: './card-pool.component.html',
  styleUrls: ['./card-pool.component.scss']
})
export class CardPoolComponent {
  cards: Card[] = [
    new Card("ae56a6c7-b118-44cb-bb6d-c45a9484c598", "Mystic Inscription", "nature", "", 6, "dm-04", "Spell", 2, null, 4),                    // tier B (good)
    new Card("7a94b69e-335c-489a-8c5d-1294a9cb960f", "Milieus, the Daystretcher", "light", "Berserker", 5, "dm-04", "Creature", 3, null, 1),  // tier C (not really seen)
    new Card("215c4cfb-2a22-4ee1-b4ea-28ac24a1eeee", "Ultracide Worm", "darkness", "Parasite Worm", 6, "dm-02", "Creature", 2, null, 2),       // tier B (good)

    new Card("ae56a6c7-b118-44cb-bb6d-c45a9484c598", "Mystic Inscription", "nature", "", 6, "dm-04", "Spell", 2, null, 4),                    // tier B (good)
    new Card("7a94b69e-335c-489a-8c5d-1294a9cb960f", "Milieus, the Daystretcher", "light", "Berserker", 5, "dm-04", "Creature", 3, null, 1),  // tier C (not really seen)
    new Card("215c4cfb-2a22-4ee1-b4ea-28ac24a1eeee", "Ultracide Worm", "darkness", "Parasite Worm", 6, "dm-02", "Creature", 2, null, 2),       // tier B (good)

    new Card("ae56a6c7-b118-44cb-bb6d-c45a9484c598", "Mystic Inscription", "nature", "", 6, "dm-04", "Spell", 2, null, 4),                    // tier B (good)
    new Card("7a94b69e-335c-489a-8c5d-1294a9cb960f", "Milieus, the Daystretcher", "light", "Berserker", 5, "dm-04", "Creature", 3, null, 1),  // tier C (not really seen)
    new Card("215c4cfb-2a22-4ee1-b4ea-28ac24a1eeee", "Ultracide Worm", "darkness", "Parasite Worm", 6, "dm-02", "Creature", 2, null, 2),       // tier B (good)
    
    new Card("ae56a6c7-b118-44cb-bb6d-c45a9484c598", "Mystic Inscription", "nature", "", 6, "dm-04", "Spell", 2, null, 4),                    // tier B (good)
    new Card("7a94b69e-335c-489a-8c5d-1294a9cb960f", "Milieus, the Daystretcher", "light", "Berserker", 5, "dm-04", "Creature", 3, null, 1),  // tier C (not really seen)
    new Card("215c4cfb-2a22-4ee1-b4ea-28ac24a1eeee", "Ultracide Worm", "darkness", "Parasite Worm", 6, "dm-02", "Creature", 2, null, 2),       // tier B (good)
    
    new Card("ae56a6c7-b118-44cb-bb6d-c45a9484c598", "Mystic Inscription", "nature", "", 6, "dm-04", "Spell", 2, null, 4),                    // tier B (good)
    new Card("7a94b69e-335c-489a-8c5d-1294a9cb960f", "Milieus, the Daystretcher", "light", "Berserker", 5, "dm-04", "Creature", 3, null, 1),  // tier C (not really seen)
    new Card("215c4cfb-2a22-4ee1-b4ea-28ac24a1eeee", "Ultracide Worm", "darkness", "Parasite Worm", 6, "dm-02", "Creature", 2, null, 2),       // tier B (good)
  ]
  
}

// {"uid":"ae56a6c7-b118-44cb-bb6d-c45a9484c598","name":"Mystic Inscription","civilization":"nature","family":"","manaCost":6,"set":"dm-04","type":"Spell"},
// {"uid":"7a94b69e-335c-489a-8c5d-1294a9cb960f","name":"Milieus, the Daystretcher","civilization":"light","family":"Berserker","manaCost":5,"set":"dm-04","type":"Creature"}
// {"uid":"215c4cfb-2a22-4ee1-b4ea-28ac24a1eeee","name":"Ultracide Worm","civilization":"darkness","family":"Parasite Worm","manaCost":6,"set":"dm-02","type":"Creature"}
