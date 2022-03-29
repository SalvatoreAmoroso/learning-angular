import { AfterViewChecked, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-change-detection-performance',
  templateUrl: './change-detection-performance.component.html',
  styleUrls: ['./change-detection-performance.component.scss']
})
export class ChangeDetectionPerformanceComponent {

  contacts = [
    new Contact('John Doe', '123 Main Street, Anytown'),
    new Contact('Richard Roe', '456 Fifth Avenue, Otherville'),
  ];

  contactName: string;
  contactAddress: string;

  selectedContact: Contact | null;

  constructor() { }

  contactSelected(selected: Contact) {
    this.selectedContact = selected;
    this.contactName = selected.name;
    this.contactAddress = selected.address;
  }

  editContact() {
    if (this.selectedContact) {
      this.selectedContact.name = this.contactName;
      this.selectedContact.address = this.contactAddress;
    }
    // this.resetFormFields();
    this.selectedContact = null;
    console.log('[Not-optimized] Contact successfully saved');
  }

  createContact() {
    const contact = new Contact(this.contactName, this.contactAddress);
    this.contacts.push(contact);
    this.resetFormFields();
  }

  resetFormFields() {
    this.contactName = '';
    this.contactAddress = '';
  }
}

@Component({
  selector: 'ch-contact-list',
  template: `
     <ch-contact-entry *ngFor='let contact of contacts'
                   [contact]='contact'
                   (onSelect)='contactSelected(contact)'>
     </ch-contact-entry>
  `,
  styleUrls: ['change-detection-performance.component.scss'],
})
export class ContactListComponent {

  @Input() contacts: Contact[];
  @Output('onSelect') selectEmitter = new EventEmitter();

  contactSelected(selected: Contact) {
    this.selectEmitter.emit(selected);
  }
}

@Component({
  selector: 'ch-contact-entry',
  template: `
  <div class='contact-entry' (click)='selectEntry()'>
    <b>Name:</b> {{contact.name}} <br>
    <b>Anschrift:</b> {{contact.address}}<br>
  </div>
  `,
  styleUrls: ['change-detection-performance.component.scss'],
})
export class ContactEntryComponent implements OnChanges, AfterViewChecked {
  @Input() contact: Contact;
  @Output('onSelect') selectEmitter = new EventEmitter();

  selectEntry() {
    this.selectEmitter.emit(this.contact);
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('[Not-optimized] Contact changed', changes['contact'].currentValue);
  }

  checkCount = 0;
  ngAfterViewChecked() {
    // TODO: Wird immer ausgeführt, auch wenn die Komponente nicht zu sehen ist ?
    // console.log(`[Not-optimized] Contact ${this.contact.name} checked ${this.checkCount++} times`);
  }
}

class Contact {
  constructor(
    public name: string,
    public address: string) {
  }
}