import { DatePipe } from '@angular/common';
import { Component, HostBinding, Input } from '@angular/core';
import { ContactDto } from './contact-dtos';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  //#region Props
  inputs: any[] = [];

  pages: any[] = [];
  @HostBinding('style.--page')
  @Input()
  page: number = 1;

  @HostBinding('style.--pagesLenght')
  @Input()
  pagesLength: number = 1;

  selectedTransportType: number = 1;
  transportTypeOptions: any[] = [];

  selectedPropertyType: number = 1;
  propertyTypeOptions: any[] = [];

  selectedNumberOfRoom: number = 1;
  numberOfRooms: any[] = [];

  selectedNumberOfFloor: number = 1;
  numberOfFloors: any[] = [];

  details: string = '';
  remaining: number = 250;
  total: number = 250;

  toAdress: string = '';
  toCity: string = '';
  fromAdress: string = '';
  fromCity: string = '';

  date: string = new Date().toISOString();
  time: string = new Date().getHours() + ':' + new Date().getMinutes();

  doc: Document = document;

  finalModel: ContactDto = <ContactDto>{};
  //#endregion

  constructor(private datePipe: DatePipe, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.pages.push(
      {
        name: 'Kişisel Bilgiler *',
        icon: 'person-filled-icon',
        page: 1,
      },
      {
        name: 'Taşıma Türü Seçimi *',
        icon: 'truck-filled-icon',
        page: 2,
      },
      {
        name: 'Taşıma Adres Bilgileri *',
        icon: 'adress-filled-icon',
        page: 3,
      },
      {
        name: 'Taşıma Zaman Bilgileri *',
        icon: 'date-filled-icon',
        page: 4,
      },
      {
        name: 'Bilgileri Onayla ve Gönder *',
        icon: 'approval-filled-icon',
        page: 5,
      }
    );

    this.pagesLength = this.pages.length;

    this.inputs.push(
      {
        value: 1,
        labelName: 'Ad',
        inputValue: new FormControl('', [Validators.required]),
        placeHolder: 'Adınızı giriniz',
        icon: '',
        type: 'text',
        isFocused: false,
      },
      {
        value: 2,
        labelName: 'Soyad',
        inputValue: new FormControl('', [Validators.required]),
        placeHolder: 'Soyadınızı giriniz',
        icon: '',
        type: 'text',
        isFocused: false,
      },
      {
        value: 3,
        labelName: 'Email',
        inputValue: new FormControl('', [
          Validators.required,
          Validators.email,
        ]),
        placeHolder: 'Mail adresinizi giriniz',
        icon: 'mail-filled-icon',
        type: 'email',
        isFocused: false,
      },
      {
        value: 4,
        labelName: 'Telefon',
        inputValue: new FormControl('', [Validators.required]),
        placeHolder: 'Telefon numaranızı giriniz',
        icon: 'phone-filled-icon',
        type: 'tel',
        isFocused: false,
      }
    );

    this.transportTypeOptions.push(
      {
        value: 1,
        labelName: 'Evden Eve Nakliyat',
      },
      {
        value: 2,
        labelName: 'Ofis Taşıma',
      },
      {
        value: 3,
        labelName: 'Parça Eşya Taşıma',
      },
      {
        value: 4,
        labelName: 'Diğer',
      }
    );

    this.propertyTypeOptions.push(
      {
        value: 1,
        name: 'Lütfen Seçin',
      },
      {
        value: 2,
        name: 'Apartman',
      },
      {
        value: 3,
        name: 'Müstakil',
      },
      {
        value: 4,
        name: 'Villa',
      }
    );

    this.numberOfRooms.push(
      {
        value: 1,
        name: 'Lütfen Seçin',
      },
      {
        value: 2,
        name: '1 + 0 (Stüdyo)',
      },
      {
        value: 3,
        name: '1 + 1',
      },
      {
        value: 4,
        name: '2 + 1',
      },
      {
        value: 5,
        name: '3 + 1',
      },
      {
        value: 6,
        name: '4 + 1',
      },
      {
        value: 7,
        name: '5 + 1 >',
      }
    );

    this.numberOfFloors.push(
      {
        value: 1,
        name: 'Lütfen Seçin',
      },
      {
        value: 2,
        name: '-1',
      },
      {
        value: 3,
        name: 'Zemin',
      },
      {
        value: 4,
        name: '1',
      },
      {
        value: 5,
        name: '2',
      },
      {
        value: 6,
        name: '3',
      },
      {
        value: 7,
        name: '4',
      },
      {
        value: 8,
        name: '5 >',
      }
    );
  }

  getErrorMessage(value: number) {
    console.log('girdi');
    var input = this.inputs.find((x) => x.value == value);
    if (input.inputValue.hasError('required')) {
      return 'You must enter a value';
    }

    return input.inputValue.hasError('email') ? 'Not a valid email' : '';
  }

  onInputFocus(labelName: string) {
    this.inputs.find((x) => x.labelName == labelName).isFocused = true;
  }

  onInputBlur(labelName: string) {
    if (!this.inputs.find((x) => x.labelName == labelName).inputValue) {
      this.inputs.find((x) => x.labelName == labelName).isFocused = false;
    }
  }

  changePage(value: boolean) {
    if (value) {
      this.page++;
      if (this.page == 5) this.setModel();
    } else {
      this.page--;
    }
  }

  setModel() {
    this.finalModel.fullname =
      this.inputs.find((x) => x.value == 1).inputValue +
      ' ' +
      this.inputs.find((x) => x.value == 2).inputValue;
    this.finalModel.mail = this.inputs.find((x) => x.value == 3).inputValue;
    this.finalModel.tel = this.inputs.find((x) => x.value == 4).inputValue;
    this.finalModel.transportType = this.transportTypeOptions.find(
      (x) => x.value == this.selectedTransportType
    ).labelName;
    this.finalModel.propertyType = this.propertyTypeOptions.find(
      (x) => x.value == this.selectedPropertyType
    ).name;
    this.finalModel.numberOfFloor = this.numberOfFloors.find(
      (x) => x.value == this.selectedNumberOfFloor
    ).name;
    this.finalModel.numberOfRoom = this.numberOfRooms.find(
      (x) => x.value == this.selectedNumberOfRoom
    ).name;
    this.finalModel.details = this.details;
    this.finalModel.fromAddress = this.fromAdress;
    this.finalModel.fromCity = this.fromCity;
    this.finalModel.toAddress = this.toAdress;
    this.finalModel.toCity = this.toCity;
    this.finalModel.date = this.datePipe.transform(this.date, 'dd.MM.yyyy');
    this.finalModel.time = this.time;
    this.finalModel.details = this.details;
  }
}
