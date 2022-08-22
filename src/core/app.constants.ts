export const { NEXT_PUBLIC_COMPANY_SERVICE } = process.env;

const API_VERSION = {
  NEXT_PUBLIC_COMPANY_SERVICE: 'v1',
};
const CONSTANTS = {
  companies: {
    getAll: (page: number, limit: number) =>
      `${NEXT_PUBLIC_COMPANY_SERVICE}/${API_VERSION.NEXT_PUBLIC_COMPANY_SERVICE}/companies?limit=${limit}&page=${page}`,

    getByOne: (term: string) =>
      `${NEXT_PUBLIC_COMPANY_SERVICE}/${API_VERSION.NEXT_PUBLIC_COMPANY_SERVICE}/companies/${term}`,

    create: `${NEXT_PUBLIC_COMPANY_SERVICE}/${API_VERSION.NEXT_PUBLIC_COMPANY_SERVICE}/companies`,

    update: (id: string) =>
      `${NEXT_PUBLIC_COMPANY_SERVICE}/${API_VERSION.NEXT_PUBLIC_COMPANY_SERVICE}/companies/${id}`,

    remove: (id: string) =>
      `${NEXT_PUBLIC_COMPANY_SERVICE}/${API_VERSION.NEXT_PUBLIC_COMPANY_SERVICE}/companies/${id}`,
  },
};

export default CONSTANTS;
