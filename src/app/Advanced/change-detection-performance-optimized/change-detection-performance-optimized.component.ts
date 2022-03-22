import { AfterViewChecked, ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-change-detection-performance-optimized',
  templateUrl: './change-detection-performance-optimized.component.html',
  styleUrls: ['./change-detection-performance-optimized.component.scss']
})
export class ChangeDetectionPerformanceOptimizedComponent {

  contacts = [
    new Contact('John Doe', '123 Main Street, Anytown'),
    new Contact('Richard Roe', '456 Fifth Avenue, Otherville'),
  ];

  contactName: string;
  contactAddress: string;

  selectedContact: Contact;

  contactSelected(selected: Contact) {
    console.log('Contact selected', selected);
    this.selectedContact = selected;
    this.contactName = selected.name;
    this.contactAddress = selected.address;
  }

  editContact() {
    if (this.selectedContact) {
      this.contacts = this.contacts.map((entry) => {
        if (entry !== this.selectedContact) {
          return entry;
        }
        return new Contact(this.contactName, this.contactAddress);
      });
    }
    console.log('[Optimized] Contact sucessfully saved');
  }

  createContact() {
    const newContact = new Contact(this.contactName, this.contactAddress);
    this.contacts = [...this.contacts, newContact];
  }

  resetFormFields() {
    this.contactName = '';
    this.contactAddress = '';
  }
}


@Component({
  selector: 'ch-contact-list-optimized',
  template: `
     <ch-contact-entry-optimized *ngFor='let contact of contacts'
                   [contact]='contact'
                   (onSelect)='contactSelected(contact)'>
     </ch-contact-entry-optimized>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['change-detection-performance-optimized.component.scss'],
})
export class ContactListOptimizedComponent {

  @Input() contacts: Contact[];
  @Output('onSelect') selectEmitter = new EventEmitter();

  contactSelected(selected: Contact) {
    this.selectEmitter.emit(selected);
  }
}

@Component({
  selector: 'ch-contact-entry-optimized',
  template: `
  <div class='contact-entry' (click)='selectEntry()'>
    <b>Name:</b> {{contact.name}} <br>
    <b>Anschrift:</b> {{contact.address}}<br>
  </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['change-detection-performance-optimized.component.scss'],
})
export class ContactEntryOptimizedComponent implements OnChanges, AfterViewChecked {
  @Input() contact: Contact;
  @Output('onSelect') selectEmitter = new EventEmitter();

  selectEntry() {
    this.selectEmitter.emit(this.contact);
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('[Optimized] Contact changed', changes['contact'].currentValue);
  }

  checkCount = 0;
  ngAfterViewChecked() {
    console.log(`[Optimized] Contact ${this.contact.name} checked ${this.checkCount++} times`);
  }
}

class Contact {
  constructor(
    public name: string,
    public address: string) {
  }
}