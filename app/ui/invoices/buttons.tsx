import { PencilIcon, PlusIcon, TrashIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { deleteInvoice } from '@/app/lib/actions';

export const CreateInvoice = () => {
  return (
    <Link
      className={'flex h-10 items-center rounded-lg bg-blue-600 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600'}
      href={'/dashboard/invoices/create'}
      title={'Create Invoice'}
    >
      <span className={'hidden md:block'}>
        {'Create Invoice'}
      </span>
      <PlusIcon className={'h-5 md:ml-4'} />
    </Link>
  );
};

type UpdateInvoiceProps = {
  id: string;
};

export const UpdateInvoice = (props: UpdateInvoiceProps) => {
  const { id } = props;

  return (
    <Link
      className={'rounded-md border p-2 hover:bg-gray-100'}
      href={`/dashboard/invoices/${id}/edit`}
      title={'Edit'}
    >
      <PencilIcon className={'w-5'} />
    </Link>
  );
};

type DeleteInvoiceProps = {
  id: string;
};

export const DeleteInvoice = (props: DeleteInvoiceProps) => {
  const { id } = props;
  const deleteInvoiceWithId = deleteInvoice.bind(null, id);

  return (
    <form action={deleteInvoiceWithId}>
      <button
          className={'rounded-md border p-2 hover:bg-gray-100'}
          id={id}
          title={'Delete'}
          type={'submit'}
      >
        <span className={'sr-only'}>
          {'Delete'}
        </span>
        <TrashIcon className={'w-5'} />
      </button>
    </form>
  );
}
