import { Component } from '@angular/core';
import { DataServiceOne, DataServiceThree } from '../../services/data-service.service';

@Component({
  selector: 'di-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.scss']
})
export class DependencyInjectionDemoComponent {

  friends: any[] = [];
  friendsThree: any[] = [];

  constructor(private dataServiceOne: DataServiceOne, private dataServiceThree: DataServiceThree) { //dataService is injected here. DataServiceOne is defined as a global provider
    this.friends = dataServiceOne.getFriends();
    this.friendsThree = dataServiceThree.getFriends();
  }
}
