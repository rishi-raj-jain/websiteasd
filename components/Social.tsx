import Link from 'next/link';

export default function Social({
  title,
  href,
  children,
}: {
  title: string;
  href: string;
  children: React.ReactNode;
}) {
  return (
    <li>
      <Link
        href={href}
        title={title}
        target="_blank"
        className="md:hover:opacity-30 transition-opacity duration-200"
      >
        {children}
      </Link>
    </li>
  );
}
