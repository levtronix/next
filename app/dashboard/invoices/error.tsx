'use client';

import { useEffect } from 'react';

type ErrorProps = {
  error: Error & { digest?: string };
  reset: () => void;
}

const Error = (props: ErrorProps) => {
  const { error, reset } = props;

  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className={'flex h-full flex-col items-center justify-center'}>
      <h2 className={'text-center'}>{'Something went wrong!'}</h2>
      <button
        className={'mt-4 rounded-md bg-blue-500 px-4 py-2 text-sm text-white transition-colors hover:bg-blue-400'}
        onClick={
          // Attempt to recover by trying to re-render the invoices route
          () => reset()
        }
        title={'Try again'}
        type={'button'}
      >
        {'Try again'}
      </button>
    </main>
  );
}

export default Error;
