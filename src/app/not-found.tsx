import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 bg-ivory-100 px-6 text-center text-ink-900">
      <p className="eyebrow">Page not found</p>
      <Link href="/" className="btn-primary">
        Back to the invitation
      </Link>
    </div>
  );
}
