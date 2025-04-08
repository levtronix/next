import { Metadata } from 'next';
import Form from '@/app/ui/invoices/create-form';
import Breadcrumbs from '@/app/ui/invoices/breadcrumbs';
import { fetchCustomers } from '@/app/lib/data';

export const metadata: Metadata = {
  title: 'Create Invoice',
};

const Page = async () => {
  const customers = await fetchCustomers();

  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
            { label: 'Invoices', href: '/dashboard/invoices' },
            { active: true,  href: '/dashboard/invoices/create', label: 'Create Invoice' }
        ]}
      />
      <Form customers={customers} />
    </main>
  );
}

export default Page;
