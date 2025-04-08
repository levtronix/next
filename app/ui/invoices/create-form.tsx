'use client';

import { useActionState } from 'react';
import { CustomerField } from '@/app/lib/definitions';
import Link from 'next/link';
import { createInvoice, State } from '@/app/lib/actions';
import Button from '@/app/ui/button';

import {
  CheckIcon,
  ClockIcon,
  CurrencyDollarIcon,
  UserCircleIcon,
} from '@heroicons/react/24/outline';

type FormProps = {
  customers: CustomerField[];
};

const Form = (props: FormProps) => {
  const { customers } = props;
  const initialState: State = { errors: {}, message: null };
  const [state, formAction] = useActionState(createInvoice, initialState);

  return (
    <form action={formAction}>
      <div className={'rounded-md bg-gray-50 p-4 md:p-6'}>
        <div className={'mb-4'}>
          <label className={'mb-2 block text-sm font-medium'} htmlFor={'customer'}>
            {'Choose customer'}
          </label>
          <div className={'relative'}>
            <select
              aria-describedby={'customer-error'}
              className={'peer block w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500'}
              defaultValue={''}
              id={'customer'}
              name={'customerId'}
            >
              <option disabled value={''}>
                {'Select a customer'}
              </option>
              {customers.map((customer) => (
                <option key={customer.id} value={customer.id}>
                  {customer.name}
                </option>
              ))}
            </select>
            <UserCircleIcon className={'pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500'} />
          </div>
          <div aria-atomic={'true'} aria-live={'polite'} id={'customer-error'}>
            {state.errors?.customerId &&
              state.errors.customerId.map((error: string) => (
                <p className={'mt-2 text-sm text-red-500'} key={error}>
                  {error}
                </p>
              ))}
          </div>
        </div>
        <div className={'mb-4'}>
          <label className={'mb-2 block text-sm font-medium'} htmlFor={'amount'}>
            {'Choose an amount'}
          </label>
          <div className={'relative mt-2 rounded-md'}>
            <div className={'relative'}>
              <input
                aria-describedby={'amount-error'}
                className={'peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500'}
                id={'amount'}
                name={'amount'}
                placeholder={'Enter USD amount'}
                step={'0.01'}
                type={'number'}
              />
              <CurrencyDollarIcon className={'pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900'} />
            </div>
          </div>
          <div aria-atomic={'true'} aria-live={'polite'} id={'amount-error'}>
            {state.errors?.amount &&
              state.errors.amount.map((error: string) => (
                <p className={'mt-2 text-sm text-red-500'} key={error}>
                  {error}
                </p>
              ))}
          </div>
        </div>
        <fieldset>
          <legend className={'mb-2 block text-sm font-medium'}>
            {'Set the invoice status'}
          </legend>
          <div className={'rounded-md border border-gray-200 bg-white px-[14px] py-3'}>
            <div className={'flex gap-4'}>
              <div className={'flex items-center'}>
                <input
                  className={'h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-gray-600 focus:ring-2'}
                  id={'pending'}
                  name={'status'}
                  type={'radio'}
                  value={'pending'}
                />
                <label
                  className={'ml-2 flex cursor-pointer items-center gap-1.5 rounded-full bg-gray-100 px-3 py-1.5 text-xs font-medium text-gray-600'}
                  htmlFor={'pending'}
                >
                  {'Pending'} <ClockIcon className={'h-4 w-4'} />
                </label>
              </div>
              <div className={'flex items-center'}>
                <input
                  className={'h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-gray-600 focus:ring-2'}
                  id={'paid'}
                  name={'status'}
                  type={'radio'}
                  value={'paid'}
                />
                <label
                  className={'ml-2 flex cursor-pointer items-center gap-1.5 rounded-full bg-green-500 px-3 py-1.5 text-xs font-medium text-white'}
                  htmlFor={'paid'}
                >
                  {'Paid'} <CheckIcon className={'h-4 w-4'} />
                </label>
              </div>
            </div>
          </div>
          <div aria-atomic={'true'} aria-live={'polite'} id={'status-error'}>
            {state.errors?.status &&
              state.errors.status.map((error: string) => (
                <p className={'mt-2 text-sm text-red-500'} key={error}>
                  {error}
                </p>
              ))}
          </div>
        </fieldset>
        <div aria-atomic={'true'} aria-live={'polite'} id={'form-error'}>
          {state.message ? (
            <p className={'mt-2 text-sm text-red-500'}>
              {state.message}
            </p>
          ) : null}
        </div>
      </div>
      <div className={'mt-6 flex justify-end gap-4'}>
        <Link
          className={'flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200'}
          href={'/dashboard/invoices'}
          title={'Cancel'}
        >
          {'Cancel'}
        </Link>
        <Button
          title={'Create Invoice'}
          type={'submit'}
        >
          {'Create Invoice'}
        </Button>
      </div>
    </form>
  );
}

export default Form;
