import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import React from 'react';
import Header from './_components/header';
import './globals.css';

export const metadata = {
  title: "SampleApp on Firebase", 
  description: "APIサーバを使わずFirebaseのみで実行されるサンプルアプリ",
};

export default function RootLayout({ children } : Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>
        <AppRouterCacheProvider>
            <Header />
            {children}          
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}