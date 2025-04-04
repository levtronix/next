// This file contains type definitions for your data.
// It describes the shape of the data, and what data type each property should accept.
// For simplicity of teaching, we're manually defining these types.
// However, these types are generated automatically if you're using an ORM such as Prisma.
export type User = {
  email: string;
  id: string;
  name: string;
  password: string;
};

export type Customer = {
  email: string;
  id: string;
  image_url: string;
  name: string;
};

export type Invoice = {
  amount: number;
  customer_id: string;
  date: string;
  id: string;
  status: 'pending' | 'paid';
};

export type Revenue = {
  month: string;
  revenue: number;
};

export type LatestInvoice = {
  amount: string;
  email: string;
  id: string;
  image_url: string;
  name: string;
};

// The database returns a number for amount, but we later format it to a string with the formatCurrency function
export type LatestInvoiceRaw = Omit<LatestInvoice, 'amount'> & {
  amount: number;
};

export type InvoicesTable = {
  amount: number;
  customer_id: string;
  date: string;
  email: string;
  id: string;
  image_url: string;
  name: string;
  status: 'pending' | 'paid';
};

export type CustomersTableType = {
  email: string;
  id: string;
  image_url: string;
  name: string;
  total_invoices: number;
  total_paid: number;
  total_pending: number;
};

export type FormattedCustomersTable = {
  email: string;
  id: string;
  image_url: string;
  name: string;
  total_invoices: number;
  total_paid: string;
  total_pending: string;
};

export type CustomerField = {
  id: string;
  name: string;
};

export type InvoiceForm = {
  amount: number;
  customer_id: string;
  id: string;
  status: 'pending' | 'paid';
};
