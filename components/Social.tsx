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
      <Link href={href} title={title} target="_blank">
        {children}
      </Link>
    </li>
  );
}
