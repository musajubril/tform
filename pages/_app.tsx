import React from 'react'
import { AppProps } from 'next/app'

import { ToastProvider } from 'react-toast-notifications';

import '../styles/index.css'

function MyApp({ Component, pageProps }: AppProps) {
  return <ToastProvider>
  <Component {...pageProps} />
</ToastProvider> 
}

export default MyApp;