export interface Company {
  _id: string;
  name: string;
  address: string;
  nit: string;
  mobilephone: string;
}

export interface CompanyResponse {
  total: number;
  page: number;
  companies: Company[];
  nextPage: number;
  lastPage: boolean;
}

export interface SuccessResponse {
  status: string,
  message: string,
}
export interface CompanyApiContextResponse {
  getAll: (page: number, limit?: number) => Promise<CompanyResponse>;
  getByOne: (term: string) => Promise<{ company: Company }>;
  create: (company: Company) => Promise<SuccessResponse | null>;
  update: (id: string, company: Company) => Promise<SuccessResponse | null>;
  remove: (id: string) => Promise<SuccessResponse | null>;
}
