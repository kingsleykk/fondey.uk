const channels = [
  { k: 'mail', label: 'kingsleykong05@gmail.com', href: 'mailto:kingsleykong05@gmail.com' },
  { k: 'in', label: 'linkedin ↗', href: 'https://www.linkedin.com/in/jia-cheng-kong-b61aa7363/', external: true },
  { k: 'git', label: 'github.com/kingsleykk ↗', href: 'https://github.com/kingsleykk', external: true },
];

export default function Contact() {
  return (
    <section id="contact" className="section grid grid-cols-[repeat(auto-fit,minmax(min(100%,380px),1fr))] gap-10 pb-20">
      <div className="flex min-w-0 flex-col gap-[18px]">
        <p className="prompt m-0">
          <span>./contact.sh</span>
        </p>
        <h2 className="h2 mt-0 text-[clamp(30px,5vw,48px)]">Say hi</h2>
        <p className="prose m-0 max-w-[30em]">
          Internships, freelance work, or just a question about my setup. I read everything.
        </p>
        <dl className="m-0 grid grid-cols-[72px_minmax(0,1fr)] gap-y-2.5 text-sm leading-snug">
          {channels.map((c) => (
            <div key={c.k} className="contents">
              <dt style={{ color: 'var(--muted)' }}>{c.k}</dt>
              <dd className="m-0 min-w-0">
                <a
                  href={c.href}
                  {...(c.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  style={{ color: 'var(--text)', textDecoration: 'none', overflowWrap: 'anywhere' }}
                >
                  {c.label}
                </a>
              </dd>
            </div>
          ))}
        </dl>
      </div>

      <form
        action="https://formspree.io/f/mldbvgke"
        method="POST"
        className="flex flex-col gap-3 rounded-xl p-[clamp(18px,3vw,28px)]"
        style={{ border: '1px solid var(--line)', background: 'var(--surface)' }}
      >
        <label htmlFor="cf-name" className="text-xs" style={{ color: 'var(--muted)' }}>
          name
        </label>
        <input id="cf-name" name="name" type="text" required placeholder="Your name" className="field" />
        <label htmlFor="cf-email" className="text-xs" style={{ color: 'var(--muted)' }}>
          email
        </label>
        <input id="cf-email" name="email" type="email" required placeholder="you@example.com" className="field" />
        <label htmlFor="cf-msg" className="text-xs" style={{ color: 'var(--muted)' }}>
          message
        </label>
        <textarea id="cf-msg" name="message" rows={4} required placeholder="What's up?" className="field" />
        <button type="submit" className="btn btn-primary mt-1 cursor-pointer self-start border-0 font-[inherit]">
          Send message
        </button>
      </form>
    </section>
  );
}
