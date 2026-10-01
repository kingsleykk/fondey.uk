const links = [
  { href: '#work', label: 'work' },
  { href: '#play', label: 'play' },
  { href: '#experience', label: 'experience' },
  { href: '#contact', label: 'contact' },
];

export default function Navbar() {
  return (
    <nav
      aria-label="Main"
      className="flex flex-wrap items-center justify-between gap-x-6 gap-y-3 py-6 text-[13px]"
      style={{ borderBottom: '1px solid var(--line)' }}
    >
      <a href="#top" style={{ color: 'var(--text)', textDecoration: 'none' }}>
        <span style={{ color: 'var(--accent)' }}>~</span>/kingsley
      </a>
      <div className="flex flex-wrap items-center gap-x-5 gap-y-1">
        {links.map((l) => (
          <a key={l.href} href={l.href} className="py-2.5" style={{ color: 'var(--body)', textDecoration: 'none' }}>
            {l.label}
          </a>
        ))}
        <span className="flex items-center gap-1.5 text-xs" style={{ color: 'var(--muted)' }}>
          eth0: link up
          <span aria-hidden="true" className="inline-block size-[7px] rounded-[1px]" style={{ background: 'var(--accent-dim)' }} />
          <span aria-hidden="true" className="inline-block size-[7px] rounded-[1px]" style={{ background: 'var(--accent)' }} />
        </span>
      </div>
    </nav>
  );
}
