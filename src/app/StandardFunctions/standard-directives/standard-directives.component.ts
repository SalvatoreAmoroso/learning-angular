import { Component, OnInit } from '@angular/core';
import { Person } from 'src/app/Other/microsyntax/person';

interface Player {
  name: string;
  score: number;
}

@Component({
  selector: 'app-standard-directives',
  templateUrl: './standard-directives.component.html',
  styleUrls: ['./standard-directives.component.scss']
})
export class StandardDirectivesComponent implements OnInit {

  aNumber: number = 5
  isNice: boolean = true
  persons: Person[] = []
  isBlack: boolean = false

  // NgClass
  someClasses: string[] = []

  // NgStyle
  fontStyle = 'italic';
  fontSize = 12;

  // NgFor
  friends: string[] = ['Bob', 'Jane']
  cities = [
    { name: 'Shanghai', country: 'China', population: '24,1 million' },
    { name: 'Karachi', country: 'Pakistan', population: '23,5 million' },
    { name: 'Beijing', country: 'China', population: '21,5 million' }
  ]
  players: Player[] = [
    { name: 'John', score: 20 },
    { name: 'Mary', score: 80 }
  ];

  constructor() {
    this.persons.push(new Person("Salvatore", 22))
    this.persons.push(new Person("Max", 30))
  }

  // NgClass
  addClass(anyClass: string): void {
    this.someClasses.push(anyClass)
  }


  // NgFor
  addFriend(friend: any) {
    this.friends.push(friend);
  }

  playerTrackBy(index: number, player: Player) {
    return player.name;
  }

  refreshPlayers() {
    const newPlayers = [];
    for (const player of this.players) {
      const inc = Math.random() > 0.4;
      const newScore = inc ? player.score + 1 : player.score - 1;
      newPlayers.push({ name: player.name, score: newScore });
    }
    this.players = newPlayers;
  }

  ngOnInit() {
    window.setInterval(() => {
      this.refreshPlayers();
    }, 2000);
  }
}