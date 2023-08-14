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
    href === path ? 'text-foreground font-bold' : 'text-muted-foreground';

  return (
    <li className="px-2 py-4">
      <Link href={href} className={cn(textColor, 'transition-colors')}>
        {title}
      </Link>
    </li>
  );
}
