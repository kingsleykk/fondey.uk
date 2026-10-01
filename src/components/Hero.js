const K = ['10001', '10010', '10100', '11000', '10100', '10010', '10001'];
const CELLS = K.flatMap((row) => (row + '0' + row).split('').map((c) => c === '1'));
const BLOCKS = ['#e5484d', '#3ddc84', '#f5d547', '#5cc8ff', '#b58cff', '#39d3c4', '#c8ccd1', '#4a5058'];

const fields = [
  ['role', 'Software Engineer'],
  ['lab', 'home servers, PCs & networks'],
  ['stack', 'web / backend / linux / infra'],
  ['now', 'studying at RMIT, Melbourne'],
];

export default function Hero() {
  return (
    <section id="top" className="flex flex-wrap items-start justify-between gap-10 pt-[clamp(48px,9vw,112px)] pb-[clamp(56px,8vw,96px)]">
      <div className="flex min-w-0 flex-[1_1_520px] flex-col gap-[22px]">
        <p className="prompt m-0">
          <span>neofetch</span>
        </p>
        <div className="flex flex-col gap-2.5">
          <h1
            className="font-display m-0 text-[clamp(34px,8vw,76px)] leading-[1.02] font-bold tracking-[-0.035em]"
            style={{ color: 'var(--bright)', textWrap: 'balance' }}
          >
            Kingsley Kong
          </h1>
          <p className="m-0 text-sm" style={{ color: 'var(--muted)' }}>
            Jia Cheng Kong <span style={{ color: '#4a5058' }}>/</span> kingsley@homelab
          </p>
        </div>
        <p className="prose m-0 max-w-[34em] text-[clamp(17px,2vw,20px)]">
          I&apos;m a software engineer in Melbourne. I build websites that real businesses run on, and the home servers
          that keep them online.
          <span className="cursor" aria-hidden="true" />
        </p>
        <dl className="m-0 grid grid-cols-[72px_minmax(0,1fr)] gap-y-1.5 text-sm leading-snug">
          {fields.map(([k, v]) => (
            <div key={k} className="contents">
              <dt style={{ color: 'var(--accent)' }}>{k}</dt>
              <dd className="m-0" style={{ color: 'var(--body)' }}>
                {v}
              </dd>
            </div>
          ))}
        </dl>
        <div className="flex flex-wrap gap-3 pt-1.5">
          <a href="/kingsley.vcf" download className="btn btn-primary">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M12 4v11" />
              <path d="M7 10l5 5 5-5" />
              <path d="M5 20h14" />
            </svg>
            Save my contact
          </a>
          <a href="/cv" className="btn btn-outline">
            Resume
          </a>
          <a href="#play" className="btn btn-ghost">
            or play a game ↓
          </a>
        </div>
      </div>

      <div className="hidden flex-col items-end gap-[18px] pt-11 sm:flex" aria-hidden="true">
        <div className="grid grid-cols-[repeat(11,12px)] gap-[3px]">
          {CELLS.map((on, i) => (
            <div key={i} className="size-3 rounded-[1px]" style={{ background: on ? 'var(--accent)' : '#1a1e22' }} />
          ))}
        </div>
        <div className="grid grid-cols-[repeat(4,16px)] gap-1">
          {BLOCKS.map((c) => (
            <div key={c} className="size-4" style={{ background: c }} />
          ))}
        </div>
      </div>
    </section>
  );
}
