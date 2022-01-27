import { Component } from '@angular/core';
import { DataService } from '../services/data-service.service';

@Component({
  selector: 'di-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.scss']
})
export class GeneralComponent {

  friends: any = [];

  constructor(private dataService: DataService) { //dataService is injected here
    this.friends = dataService.getFriends();
  }
}
