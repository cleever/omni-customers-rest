import { Address } from './address.model';
import { BaseModel } from './base.model';

export class Customer extends BaseModel {
  name: string;
  lastName: string;
  acceptsMarketing: string;
  email: string;
  phoneAreaCode: string;
  phoneCountryCode: string;
  phoneNumber: string;
  businessName: string;
  birthDate: string;
  businessAccount: true;
  taxDocumentNumber: string;
  address: Address;
  gender: 'male';

  picture: string;

  private _phone: string;

  get phone() {
    if (this._phone) {
      return this._phone;
    } else {
      if (this.phoneNumber) {
        this._phone = `+${this.phoneCountryCode || 55} ${this.phoneAreaCode || 41} ${this.phoneNumber}`;
      }
    }
    return this._phone;
  }
}
