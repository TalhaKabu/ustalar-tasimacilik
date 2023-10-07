export interface ContactDto {
  fullname: string;
  mail: string;
  tel: string;
  transportType: string;
  propertyType?: string;
  numberOfRoom?: string;
  numberOfFloor?: string;
  details?: string;
  fromAddress: string;
  fromCity: string;
  toAddress: string;
  toCity: string;
  date: string | null;
  time: string;
}
