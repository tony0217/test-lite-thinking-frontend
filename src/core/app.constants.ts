export const { NEXT_PUBLIC_CATEGORY_SERVICE } = process.env;

export const { NEXT_PUBLIC_USER_SERVICE } = process.env;
export const { NEXT_PUBLIC_CONTACT_SERVICE } = process.env;
export const { NEXT_PUBLIC_REFERRAL_SERVICE } = process.env;

const NEXT_PUBLIC_SALESREP_SERVICE = NEXT_PUBLIC_CONTACT_SERVICE;

const { NODE_ENV } = process.env;

const API_VERSION = {
  NEXT_PUBLIC_USER_SERVICE: 'v1',
  NEXT_PUBLIC_CONTACT_SERVICE: 'v1',
  NEXT_PUBLIC_REFERRAL_SERVICE: 'v1',
  NEXT_PUBLIC_CATEGORY_SERVICE: 'v3',
};
const CONSTANTS = {
  auth: {
    login: `${NEXT_PUBLIC_USER_SERVICE}/${API_VERSION.NEXT_PUBLIC_USER_SERVICE}/auth/login`,
    logout: `${NEXT_PUBLIC_USER_SERVICE}/${API_VERSION.NEXT_PUBLIC_USER_SERVICE}/auth/logout`,
    recoverPassword: `${NEXT_PUBLIC_USER_SERVICE}/${API_VERSION.NEXT_PUBLIC_USER_SERVICE}/auth/recover-password`,
    resetPassword: `${NEXT_PUBLIC_USER_SERVICE}/${API_VERSION.NEXT_PUBLIC_USER_SERVICE}/auth/reset-password`,
    validateEmail: `${NEXT_PUBLIC_USER_SERVICE}/${API_VERSION.NEXT_PUBLIC_USER_SERVICE}/auth/check-email`,
  },
  phoneCall: {
    getOne: (params: string) =>
      `${NEXT_PUBLIC_CONTACT_SERVICE}/${API_VERSION.NEXT_PUBLIC_CONTACT_SERVICE}/phonecalls/${params}`,
    // create: `${NEXT_PUBLIC_CONTACT_SERVICE}/${API_VERSION.NEXT_PUBLIC_CONTACT_SERVICE}/phonecalls`,
    create: `${NEXT_PUBLIC_CONTACT_SERVICE}/${API_VERSION.NEXT_PUBLIC_CONTACT_SERVICE}/phonecalls`,
    getUser: `${NEXT_PUBLIC_CONTACT_SERVICE}/${API_VERSION.NEXT_PUBLIC_CONTACT_SERVICE}/phonecalls/users`,
    getLoadData: (id: number) =>
      `${NEXT_PUBLIC_CONTACT_SERVICE}/${API_VERSION.NEXT_PUBLIC_CONTACT_SERVICE}/phonecalls/loaddata/${id}`,
  },
  messages: {
    getUser: `${NEXT_PUBLIC_CONTACT_SERVICE}/${API_VERSION.NEXT_PUBLIC_CONTACT_SERVICE}/inboxsms/users`,
    create: `${NEXT_PUBLIC_CONTACT_SERVICE}/${API_VERSION.NEXT_PUBLIC_CONTACT_SERVICE}/inboxsms`,
    getLoadData: (userId: string) =>
      `${NEXT_PUBLIC_CONTACT_SERVICE}/${API_VERSION.NEXT_PUBLIC_CONTACT_SERVICE}/inboxsms/loaddata/${userId}`,
  },
  categories: {
    getAllCategories: `${NEXT_PUBLIC_CATEGORY_SERVICE}/api/${API_VERSION.NEXT_PUBLIC_CATEGORY_SERVICE}/categories`,
    getProductsAll: (id: number, page: number) =>
      `${NEXT_PUBLIC_CATEGORY_SERVICE}/api/${API_VERSION.NEXT_PUBLIC_CATEGORY_SERVICE}/categories/${id}/products?page=${page}`,
  },
  addresses: {
    create: `${NEXT_PUBLIC_USER_SERVICE}/${API_VERSION.NEXT_PUBLIC_USER_SERVICE}/users/address/create`,
    delete: (userId: string, addressId: string) => `${NEXT_PUBLIC_USER_SERVICE}/${API_VERSION.NEXT_PUBLIC_USER_SERVICE}/customer-leads/${userId}/addresses/${addressId}`,
  },
  users: {
    getUsersAll: (page: number, query: string) =>
      `${NEXT_PUBLIC_USER_SERVICE}/${
        API_VERSION.NEXT_PUBLIC_USER_SERVICE
      }/users?limit=15&page=${page}${query ? `&query=${query}` : ''}`,

    getUserById: (id: string) =>
      `${NEXT_PUBLIC_USER_SERVICE}/${API_VERSION.NEXT_PUBLIC_USER_SERVICE}/users/${id}`,

    getUsersWithoutCall: (page: number, userId: number) =>
      `${NEXT_PUBLIC_REFERRAL_SERVICE}/${API_VERSION.NEXT_PUBLIC_REFERRAL_SERVICE}/phonecalls/customerswithoutcall/${userId}?page=${page}`,

    create: `${NEXT_PUBLIC_USER_SERVICE}/${API_VERSION.NEXT_PUBLIC_USER_SERVICE}/users/lead/create`,

    createToken: (userId: string) =>
      `${NEXT_PUBLIC_USER_SERVICE}/${API_VERSION.NEXT_PUBLIC_USER_SERVICE}/users/${userId}/token`,

    getPrizesTissiniPlus: (userId: string) =>
      `${NEXT_PUBLIC_USER_SERVICE}/${API_VERSION.NEXT_PUBLIC_USER_SERVICE}/customer-leads/${userId}/camino-plus`,

    getRmas: (userId: string) =>
      `${NEXT_PUBLIC_REFERRAL_SERVICE}/${API_VERSION.NEXT_PUBLIC_REFERRAL_SERVICE}/customers/rma/${userId}`,
  },
  salesrep: {
    getCallsScheduled: (
      salesrepId: string,
      {
        page,
        status,
        date,
      }: {
        page?: number;
        status?: string;
        date?: string;
      }
    ) =>
      `${NEXT_PUBLIC_SALESREP_SERVICE}/${API_VERSION.NEXT_PUBLIC_CONTACT_SERVICE}/phonecalls/salesrep/${salesrepId}?status=${status}&date=${date}&page=${page}`,
    getCallsScheduledRecommnended:
      'https://cors-anywhere.herokuapp.com/https://apimocha.com/eedal/user/relationship/callsRecommended',
  },
  eightByEight: {
    setCredentialsEightByEight:
      '/api/setCredentialsEightByEight/setCredentials',
  },
  referrals: {
    getUser: (id: string) =>
      `${NEXT_PUBLIC_REFERRAL_SERVICE}/${API_VERSION.NEXT_PUBLIC_REFERRAL_SERVICE}/referrals/get/${id}`,
    getMountlyPrizes: (id: string) =>
      `${NEXT_PUBLIC_REFERRAL_SERVICE}/${API_VERSION.NEXT_PUBLIC_REFERRAL_SERVICE}/referrals/montly_prizes/${id}`,
  },
  customers: {
    getTransactions: (id: string) =>
      `${NEXT_PUBLIC_REFERRAL_SERVICE}/${API_VERSION.NEXT_PUBLIC_REFERRAL_SERVICE}/customers/transactions/${id}`,
  },
};

export const SELLER_TISSINI_URL =
  NODE_ENV === 'development'
    ? 'https://seller.tissini.build'
    : 'https://seller.tissini.cloud';

export const MENU_LIST = [
  // {
  //   icon: 'uil uil-estate',
  //   name: 'Inicio',
  //   route: '/home',
  // },
  {
    icon: 'uil uil-users-alt',
    name: 'Mi lista',
    route: '/home',
  },
  {
    icon: 'uil uil-calender',
    name: 'Mi agenda',
    route: '/mi-agenda',
  },
  {
    icon: 'uil uil-user-plus',
    name: 'Crear lead',
    route: '/emprendedoras',
  },
  {
    icon: 'uil uil-file-check-alt',
    name: 'Reportes',
    route: '/reportes',
  },
  {
    icon: 'uil uil-comment-dots',
    name: 'Botmaker',
    route: '/Botmaker',
  },
  {
    icon: 'uil uil-phone-pause',
    name: 'Abrir 8x8',
  },
  {
    icon: 'uil uil-signout',
    name: 'Cerrar sesión',
    subMenu: true,
  },
];

export default CONSTANTS;
