'use client';

import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function HeaderLink({
  title,
  href,
}: {
  title: string;
  href: string;
}) {
  const path = usePathname();
  const textColor =
    href === path
      ? 'text-accent-foreground'
      : 'text-muted-foreground opacity-40';

  return (
    <li>
      <Link
        href={href}
        className={cn(
          textColor,
          'transition-all duration-200 block py-4 md:hover:opacity-100'
        )}
      >
        {title}
      </Link>
    </li>
  );
}
