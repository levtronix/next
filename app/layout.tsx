import { ReactNode } from 'react';
import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
import { Metadata } from 'next';

export const metadata: Metadata = {
  description: 'The official Next.js Course Dashboard, built with App Router.',
  metadataBase: new URL('https://next-learn-dashboard.vercel.sh'),
  title: {
    default: 'Acme Dashboard',
    template: '%s | Acme Dashboard'
  },
};

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

