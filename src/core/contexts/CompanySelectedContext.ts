import { Company } from '@core/interfaces/company.interface';
import { createContext } from 'react';

const initValue = {} as Company;
const CompanySelectedContext = createContext(initValue);

export default CompanySelectedContext;