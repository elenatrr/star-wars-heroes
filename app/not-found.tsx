import Link from 'next/link';
 
export default function NotFound() {
  return (
    <main className="font-sans flex min-h-screen flex-col items-center justify-center p-4">
      <h2 className="text-center mb-2">404 Not Found</h2>
      <p className='mb-4'>Could not find the requested data.</p>
      <Link
        href="/?page=1"
        className="text-center rounded-md bg-banana px-4 py-2 text-sm text-black transition-colors hover:bg-white min-w-32"
      >
        Home Page
      </Link>
    </main>
  );
}