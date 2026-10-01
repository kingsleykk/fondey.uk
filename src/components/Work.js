const LANGS = ['EN', 'MS', '中文', '日本語', '한국어'];

const featureBullets = [
  { text: 'Store directory, events and leasing info in five languages', live: true },
  { text: 'A CMS so mall staff can post news and notices themselves', live: true },
  { text: 'Hosted at home, reached through a Cloudflare tunnel', live: true },
  { text: 'In progress: indoor wayfinding, with the mall mapped as a graph of nodes', live: false },
];

function SitePreview() {
  return (
    <div
      className="flex min-h-[260px] flex-col overflow-hidden rounded-lg"
      style={{ border: '1px solid var(--line-strong)', background: 'var(--bg)' }}
      aria-hidden="true"
    >
      <div className="flex items-center gap-2 px-3 py-2.5 text-[11px]" style={{ borderBottom: '1px solid var(--line)', color: 'var(--muted)' }}>
        <span className="size-2 rounded-full" style={{ background: '#2c333b' }} />
        <span className="size-2 rounded-full" style={{ background: '#2c333b' }} />
        <span className="size-2 rounded-full" style={{ background: '#2c333b' }} />
        <span className="ml-2 truncate rounded px-2 py-1" style={{ background: 'var(--surface)' }}>
          https://kompleksasiacity.com
        </span>
      </div>
      <div className="flex flex-1 flex-col justify-between gap-6 p-5">
        <div className="flex flex-col gap-2">
          <span className="text-[11px] tracking-[0.12em] uppercase" style={{ color: 'var(--muted)' }}>
            Kota Kinabalu, Malaysia
          </span>
          <span className="font-display text-[clamp(20px,3vw,28px)] leading-tight font-bold" style={{ color: 'var(--bright)' }}>
            Kompleks Asia City
          </span>
          <span className="prose text-sm">Dining, shopping and entertainment</span>
        </div>
        <div className="grid grid-cols-3 gap-2 text-[11px]" style={{ color: 'var(--body)' }}>
          {['Directory', 'Events', 'Leasing'].map((t) => (
            <span key={t} className="rounded-md px-2 py-2.5 text-center" style={{ border: '1px solid var(--line)' }}>
              {t}
            </span>
          ))}
        </div>
        <div className="flex flex-wrap gap-1.5 text-[11px]">
          {LANGS.map((l, i) => (
            <span
              key={l}
              className="rounded px-2 py-1"
              style={i === 0 ? { background: 'var(--accent)', color: 'var(--bg)' } : { border: '1px solid var(--line)', color: 'var(--muted)' }}
            >
              {l}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Work() {
  return (
    <section id="work" className="section flex flex-col gap-7">
      <div>
        <p className="prompt m-0">
          <span>ls ~/work</span>
        </p>
        <h2 className="h2">Work</h2>
      </div>

      <article className="card-feature grid grid-cols-[repeat(auto-fit,minmax(min(100%,380px),1fr))] gap-7 p-[clamp(20px,3vw,32px)]">
        <div className="flex min-w-0 flex-col gap-4">
          <div className="flex flex-wrap items-center gap-2.5 text-xs">
            <span className="inline-flex items-center gap-1.5" style={{ color: 'var(--accent)' }}>
              <span className="size-[7px] rounded-full" style={{ background: 'var(--accent)' }} />
              live
            </span>
            <span style={{ color: 'var(--muted)' }}>served from my home server</span>
          </div>
          <h3 className="font-display m-0 text-[clamp(20px,2.6vw,26px)] font-bold tracking-[-0.02em]" style={{ color: 'var(--bright)' }}>
            Kompleks Asia City
          </h3>
          <p className="prose m-0">
            The website for a shopping mall in Kota Kinabalu, Malaysia. I&apos;m the only software engineer on it: I designed
            it, built it, and keep it running.
          </p>
          <ul className="m-0 flex list-none flex-col gap-2 p-0 text-sm leading-normal">
            {featureBullets.map((b) => (
              <li key={b.text} className="flex gap-2.5" style={{ color: b.live ? 'var(--body)' : 'var(--muted)' }}>
                <span aria-hidden="true" style={{ color: b.live ? 'var(--accent)' : 'var(--muted)' }}>
                  &gt;
                </span>
                <span>{b.text}</span>
              </li>
            ))}
          </ul>
          <div className="flex flex-wrap items-center justify-between gap-3 pt-1">
            <div className="tags">
              <span>next.js</span>
              <span>hasura</span>
              <span>postgres</span>
              <span>cloudflare</span>
            </div>
            <a href="https://kompleksasiacity.com" target="_blank" rel="noopener noreferrer" className="link">
              visit the site ↗
            </a>
          </div>
        </div>
        <SitePreview />
      </article>

      <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,320px),1fr))] gap-5">
        <article className="card flex flex-col gap-3.5 p-6">
          <video
            src="/output.mp4"
            autoPlay
            loop
            muted
            playsInline
            aria-label="Ship detection model running on harbour footage"
            className="aspect-video w-full rounded-md object-cover"
            style={{ border: '1px solid var(--line)' }}
          />
          <span className="text-xs" style={{ color: 'var(--muted)' }}>
            internship · Taipei
          </span>
          <h3 className="font-display m-0 text-[19px] font-bold tracking-[-0.02em]" style={{ color: 'var(--bright)' }}>
            Ship detection
          </h3>
          <p className="prose m-0 text-[15px]">
            Trained YOLO models to spot specific types of vessels in Kaohsiung Harbor during my internship at Pacific AIOT.
          </p>
          <div className="tags">
            <span>python</span>
            <span>pytorch</span>
            <span>cuda</span>
          </div>
        </article>

        <article className="card flex flex-col gap-3.5 p-6">
          <span className="text-xs" style={{ color: 'var(--muted)' }}>
            you are here
          </span>
          <h3 className="font-display m-0 text-[19px] font-bold tracking-[-0.02em]" style={{ color: 'var(--bright)' }}>
            fondey.uk
          </h3>
          <p className="prose m-0 text-[15px]">
            This site, plus a mini game based on the wayfinding I&apos;m building for the mall. The business card that
            brought you here points at it too.
          </p>
          <div className="mt-auto flex flex-wrap items-center justify-between gap-3">
            <div className="tags">
              <span>next.js</span>
              <span>react</span>
              <span>vercel</span>
            </div>
            <a href="https://github.com/kingsleykk/fondey.uk" target="_blank" rel="noopener noreferrer" className="link">
              source ↗
            </a>
          </div>
        </article>
      </div>
    </section>
  );
}
