import { Component } from '@angular/core';
import { DataServiceOne } from '../../services/data-service.service';

@Component({
  selector: 'di-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.scss']
})
export class GeneralComponent {

  friends: any = [];

  constructor(private dataService: DataServiceOne) { //dataService is injected here. DataServiceOne is defined as a global provider
    this.friends = dataService.getFriends();
  }
}
