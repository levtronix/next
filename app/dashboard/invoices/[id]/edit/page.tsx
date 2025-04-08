import { Metadata } from 'next';
import Form from '@/app/ui/invoices/edit-form';
import Breadcrumbs from '@/app/ui/invoices/breadcrumbs';
import { fetchInvoiceById, fetchCustomers } from '@/app/lib/data';
import { notFound } from 'next/navigation';

export const metadata: Metadata = {
  title: 'Edit Invoice',
};

type PageProps = {
  params: Promise<{ id: string }>
}

const Page = async (props: PageProps) => {
  const params = await props.params;
  const id = params.id;

  const [customers, invoice] = await Promise.all([
    fetchCustomers(),
    fetchInvoiceById(id),
  ]);

  if (!invoice) {
    notFound();
  }

  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { href: '/dashboard/invoices', label: 'Invoices' },
          { active: true, href: `/dashboard/invoices/${id}/edit`, label: 'Edit Invoice' }
        ]}
      />
      <Form customers={customers} invoice={invoice} />
    </main>
  );
}

export default Page;
