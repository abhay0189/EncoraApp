export interface LoginResponse {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  age: number;
  companyId: string;
}

export interface CompanyResponse {
  id: string;
  name: string;
  logo: string;
  description: string;
}

export interface ContactResponse {
  id: string;
  name: string;
  country: string;
  phone: string;
}
