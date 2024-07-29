// This component serves as a catch-all for unexpected errors.
import Link from "next/link";

export default function ErrorPage() {
  return (
    <main className="font-sans flex min-h-screen flex-col items-center justify-center p-4">
      <h2 className="text-center mb-4">Something went wrong!</h2>
      <Link
        href="/?page=1"
        className="text-center mb-2 rounded-md bg-banana px-4 py-2 text-sm text-black transition-colors hover:bg-white min-w-32"
      >
        Home Page
      </Link>
    </main>
  );
}