'use client';

import { Fragment } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation'
import clsx from 'clsx';

import {
  UserGroupIcon,
  HomeIcon,
  DocumentDuplicateIcon,
} from '@heroicons/react/24/outline';

const links = [
  { href: '/dashboard', icon: HomeIcon, name: 'Home' },
  { href: '/dashboard/invoices', icon: DocumentDuplicateIcon, name: 'Invoices' },
  { href: '/dashboard/customers', icon: UserGroupIcon, name: 'Customers' },
];

const NavLinks = () => {
  const pathname = usePathname();

  return (
    <Fragment>
      {links.map((link) => {
        const LinkIcon = link.icon;

        return (
          <Link
            className={clsx('flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3', {
              'bg-sky-100 text-blue-600': pathname === link.href,
            })}
            href={link.href}
            key={link.name}
          >
            <LinkIcon className={'w-6'} />
            <p className={'hidden md:block'}>
              {link.name}
            </p>
          </Link>
        );
      })}
    </Fragment>
  );
}

export default NavLinks;
