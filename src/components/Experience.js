const log = [
  { when: 'now', title: 'B. Software Engineering (Professional)', detail: 'RMIT University, Melbourne', current: true },
  {
    when: 'ongoing',
    title: 'Software engineer, freelance',
    detail: 'CACM Property Management. Previously full-time. Sole engineer on Kompleks Asia City.',
  },
  { when: 'internship', title: 'Software engineer intern', detail: 'Pacific AIOT, Taipei' },
  { when: 'earlier', title: 'Technical Assistant', detail: 'Asia Pacific University, Malaysia' },
];

const lab = [
  ['self-hosting', 'Live sites served from home'],
  ['hardware', 'PCs I build myself'],
  ['remote', 'Wake-on-LAN from anywhere'],
];

export default function Experience() {
  return (
    <section id="experience" className="section grid grid-cols-[repeat(auto-fit,minmax(min(100%,420px),1fr))] gap-10">
      <div className="flex min-w-0 flex-col gap-5">
        <div>
          <p className="prompt m-0">
            <span>tail experience.log</span>
          </p>
          <h2 className="h2">Experience</h2>
        </div>
        <ol className="m-0 flex list-none flex-col p-0">
          {log.map((e, i) => (
            <li
              key={e.title}
              className="grid grid-cols-[96px_minmax(0,1fr)] gap-4 py-4"
              style={{ borderBottom: i < log.length - 1 ? '1px solid var(--line)' : 'none' }}
            >
              <span className="pt-[3px] text-xs" style={{ color: e.current ? 'var(--accent)' : 'var(--muted)' }}>
                {e.when}
              </span>
              <div className="flex flex-col gap-1">
                <span className="text-[15px]" style={{ color: 'var(--bright)' }}>
                  {e.title}
                </span>
                <span className="prose text-sm" style={{ color: 'var(--muted)' }}>
                  {e.detail}
                </span>
              </div>
            </li>
          ))}
        </ol>
        <a href="/cv" className="link">
          full resume ↗
        </a>
      </div>

      <div className="flex min-w-0 flex-col gap-5">
        <div>
          <p className="prompt m-0">
            <span>cat ~/lab/README</span>
          </p>
          <h2 className="h2">The lab</h2>
        </div>
        <p className="prose m-0">
          Outside of work I tinker. The mall site above runs on a server in my home rather than in the cloud. I build my own
          PCs, look after my home network, and can wake and reach my machines from anywhere.
        </p>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,150px),1fr))] gap-3">
          {lab.map(([k, v]) => (
            <div key={k} className="flex flex-col gap-1.5 rounded-[10px] p-4" style={{ border: '1px solid var(--line)' }}>
              <span className="text-xs" style={{ color: 'var(--accent)' }}>
                {k}
              </span>
              <span className="prose text-sm leading-normal">{v}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
