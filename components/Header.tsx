import HeaderLink from './HeaderLink';

export default function Header() {
  return (
    <nav className="flex justify-center">
      <ul className="flex gap-16 bg-muted px-10 rounded-full shadow-xl">
        <HeaderLink title="About" href="/" />
        <HeaderLink title="Projects" href="/projects" />
        <HeaderLink title="Blog" href="/blog" />
      </ul>
    </nav>
  );
}
