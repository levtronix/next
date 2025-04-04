import { Fragment } from 'react';
import { lusitana } from '@/app/ui/fonts';
import { fetchCardData } from '@/app/lib/data';

import {
  BanknotesIcon,
  ClockIcon,
  UserGroupIcon,
  InboxIcon,
} from '@heroicons/react/24/outline';

const iconMap = {
  collected: BanknotesIcon,
  customers: UserGroupIcon,
  pending: ClockIcon,
  invoices: InboxIcon,
};

const CardWrapper = async () => {
  const {
    numberOfCustomers,
    numberOfInvoices,
    totalPaidInvoices,
    totalPendingInvoices
  } = await fetchCardData();

  return (
    <Fragment>
      <Card title={'Collected'} type={'collected'} value={totalPaidInvoices} />
      <Card title={'Pending'} type={'pending'} value={totalPendingInvoices} />
      <Card title={'Total Invoices'} type={'invoices'} value={numberOfInvoices} />
      <Card title={'Total Customers'} type={'customers'} value={numberOfCustomers} />
    </Fragment>
  );
}

export default CardWrapper;

type CardProps = {
  title: string;
  type: 'invoices' | 'customers' | 'pending' | 'collected';
  value: number | string;
}

export const Card = (props: CardProps) => {
  const { title, type, value } = props;
  const Icon = iconMap[type];

  return (
    <div className={'rounded-xl bg-gray-50 p-2 shadow-sm'}>
      <div className={'flex p-4'}>
        {Icon ? <Icon className={'h-5 w-5 text-gray-700'} /> : null}
        <h3 className={'ml-2 text-sm font-medium'}>{title}</h3>
      </div>
      <p className={`${lusitana.className} truncate rounded-xl bg-white px-4 py-8 text-center text-2xl`}>
        {value}
      </p>
    </div>
  );
}
