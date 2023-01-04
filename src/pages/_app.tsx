import Head from 'next/head';

import type { AppProps } from 'next/app';

import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';

import theme from '@styles/themes/light-theme';
import CompanyApiContext from '@core/contexts/CompanyApiContext';

import '../styles/globals.css'
import COMPANIES_API from '@core/api/companies.api';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <link rel="icon" href="./favicon-16x16.png" sizes="16x16" />
        <link rel="icon" href="./favicon-32x32.png" sizes="32x32" />
      </Head>
      <ThemeProvider theme={theme}>
        <CompanyApiContext.Provider value={COMPANIES_API}>
          <CssBaseline />
          <Component {...pageProps} />
        </CompanyApiContext.Provider>
      </ThemeProvider>
    </>
  )
}

export default MyApp
