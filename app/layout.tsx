import { ReactNode } from 'react';
import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';

type RootLayoutProps = {
  children: ReactNode;
}

const RootLayout = (props: RootLayoutProps) => {
  const { children } = props;

  return (
    <html lang={'en'}>
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}

export default RootLayout;

