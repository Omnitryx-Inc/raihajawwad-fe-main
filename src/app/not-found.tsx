import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 bg-ink-950 px-6 text-center text-ivory-100">
      <p className="eyebrow">Page not found</p>
      <Link href="/" className="btn-primary">
        Back to the invitation
      </Link>
    </div>
  );
}
