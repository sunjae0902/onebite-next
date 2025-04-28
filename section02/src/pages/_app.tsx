import GlobalLayout from '@/components/global/global-layout';
import '@/styles/globals.css';
import { NextPage } from 'next';
import { AppProps } from 'next/app';
import { ReactNode } from 'react';

type NextPageWithLayout = NextPage & { 
  getLayout?: (page: ReactNode) => ReactNode; // 옵셔널 타입으로 선언
};

export default function App({ Component, pageProps }: AppProps & { Component: NextPageWithLayout; }) { // Component 타입 확장
  const getLayout = Component.getLayout ?? ((page: ReactNode) => page); // search bar를 사용하지 않는 페이지의 경우 그냥 page 리턴

  return ( // 전체 페이지에 적용할 글로벌 레이아웃
    <GlobalLayout> 
      {
        getLayout(< Component {...pageProps}></Component>) // 함수 호출
      }
    </GlobalLayout>
  );
}
