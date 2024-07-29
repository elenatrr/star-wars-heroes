// This component serves as a catch-all for unexpected errors.
'use client';

import { useEffect } from 'react';
 
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);
 
  return (
    <main className="font-sans flex min-h-screen flex-col items-center justify-center p-4">
      <h2 className="text-center mb-4">Something went wrong!</h2>
      <a
        href="/?page=1"
        className="text-center mb-2 rounded-md bg-banana px-4 py-2 text-sm text-black transition-colors hover:bg-white min-w-32"
      >
        Home Page
      </a>
      <button
        className="text-center rounded-md bg-banana px-4 py-2 text-sm text-black transition-colors hover:bg-white min-w-32"
        onClick={
          () => reset()
        }
      >
        Try again
      </button>
    </main>
  );
}