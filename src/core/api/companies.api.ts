import CONSTANTS from '@core/app.constants';
import {
  Company,
  CompanyResponse,
  SuccessResponse,
} from '@core/interfaces/company.interface';
import httpService from '@core/utils/http-service';

const { create, getAll, getByOne, update, remove } = CONSTANTS.companies;

const COMPANIES_API = {
  async getAll(page = 1, limit = 10) {
    try {
      const { data } = await httpService.get<CompanyResponse>(
        getAll(page, limit)
      );
      return data;
    } catch (error) {
      if (error instanceof Error) {
        window.console.error('error--->', error.message);
      }
      return {} as CompanyResponse;
    }
  },
  async getByOne(term: string) {
    try {
      const { data } = await httpService.get<{ company: Company }>(
        getByOne(term)
      );
      return data;
    } catch (error) {
      if (error instanceof Error) {
        window.console.error('error--->', error.message);
      }
      return {} as { company: Company };
    }
  },
  async create(company: Company) {
    const { data } = await httpService.post<SuccessResponse>(create, company);
    return data;
  },
  async update(id: string, company: Company) {
    const { data } = await httpService.patch<SuccessResponse>(
      update(id),
      company
    );
    return data;
  },
  async remove(id: string) {
    try {
      const { data } = await httpService.delete<SuccessResponse>(remove(id));
      return data;
    } catch (error) {
      if (error instanceof Error) {
        window.console.error('error--->', error.message);
      }
      return null;
    }
  },
};

export default COMPANIES_API;
