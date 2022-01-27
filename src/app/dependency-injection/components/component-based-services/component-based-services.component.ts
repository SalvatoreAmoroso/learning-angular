import { Component } from '@angular/core';
import { AbstractDataService, DataServiceTwo, DataServiceOne } from '../../services/data-service.service';

@Component({
  selector: 'app-component-based-services',
  templateUrl: './component-based-services.component.html',
  styleUrls: ['./component-based-services.component.scss'],
  providers: [{ provide: AbstractDataService, useClass: DataServiceTwo }]
})
export class ComponentBasedServicesComponent {

  friends: any = [];

  constructor(private dataService: AbstractDataService, dataServiceOne: DataServiceOne) { //In this component DataServiceTwo is the provider for AbstractDataService. dataServiceOne is injected from the root injector.
    this.friends = dataService.getFriends(); //Returns 2 friends
    let friends = dataServiceOne.getFriends(); //Returns 1 friend
  }

}
