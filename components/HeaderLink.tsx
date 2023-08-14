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
      ? 'text-accent-foreground font-bold'
      : 'text-muted-foreground';

  return (
    <li>
      <Link
        href={href}
        className={cn(textColor, 'transition-colors block py-4')}
      >
        {title}
      </Link>
    </li>
  );
}
