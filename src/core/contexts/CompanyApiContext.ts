import { createContext } from 'react';
import { CompanyApiContextResponse } from '@core/interfaces/company.interface';

const initialState = {} as CompanyApiContextResponse
const CompanyApiContext = createContext(initialState);

export default CompanyApiContext;