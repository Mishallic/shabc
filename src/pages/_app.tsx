import type { AppProps } from 'next/app';
import '@/styles/globals.css';
import { NextPage } from 'next';
import { ReactElement, ReactNode } from 'react';
import { AppProvider } from '@/providers/app';


// eslint-disable-next-line @typescript-eslint/ban-types
export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
	getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
	Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
	const getLayout = Component.getLayout ?? ((page) => page);
	return <AppProvider>{getLayout(<Component {...pageProps} />)}</AppProvider>;
}
