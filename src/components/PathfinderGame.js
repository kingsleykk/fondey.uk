'use client';

import { useEffect, useMemo, useRef, useState } from 'react';

/*
 * Beat the Pathfinder
 * A tiny version of the wayfinding graph being built for kompleksasiacity.com.
 * Nodes are walkable points, edges carry walking time, and the same
 * Dijkstra approach as utils/pathfinding.js picks the fastest route.
 */

const C = {
  bg: '#0a0a0a',
  panel: 'rgba(20, 20, 30, 0.7)',
  line: '#233042',
  text: '#ccd6f6',
  muted: '#8892b0',
  you: '#64ffda',
  algo: '#ff4d6d',
  shop: '#141a24',
  shopLine: '#1f2a3a',
};

const METERS_PER_UNIT = 0.5;
const WALK_SPEED = 1.3; // metres per second
const BUSY_FACTOR = 2.6;

const NODES = {
  E1: { x: 22, y: 130, type: 'entrance', name: 'West entrance' },
  E2: { x: 200, y: 246, type: 'entrance', name: 'South entrance' },
  J1: { x: 72, y: 130, type: 'junction' },
  J2: { x: 140, y: 130, type: 'junction' },
  A: { x: 200, y: 130, type: 'shop', name: 'Food court' },
  J3: { x: 260, y: 130, type: 'junction' },
  J4: { x: 328, y: 130, type: 'junction' },
  J5: { x: 380, y: 130, type: 'shop', name: 'Cinema' },
  N1: { x: 72, y: 56, type: 'shop', name: 'Pharmacy' },
  N2: { x: 200, y: 56, type: 'shop', name: 'Supermarket' },
  N3: { x: 328, y: 56, type: 'shop', name: 'Bookshop' },
  S1: { x: 72, y: 204, type: 'shop', name: 'Shoe store' },
  S2: { x: 200, y: 204, type: 'shop', name: 'Arcade' },
  S3: { x: 328, y: 204, type: 'shop', name: 'Bubble tea' },
};

const EDGE_LIST = [
  ['E1', 'J1'], ['J1', 'J2'], ['J2', 'A', true], ['A', 'J3', true], ['J3', 'J4'], ['J4', 'J5'],
  ['J1', 'N1'], ['J1', 'S1'], ['A', 'N2', true], ['A', 'S2', true], ['J4', 'N3'], ['J4', 'S3'],
  ['S2', 'E2'], ['N1', 'N2'], ['N2', 'N3'], ['S1', 'S2'], ['S2', 'S3'], ['N3', 'J5'], ['S3', 'J5'],
];

const EDGES = EDGE_LIST.map(([from, to, busy]) => {
  const a = NODES[from];
  const b = NODES[to];
  const meters = Math.hypot(a.x - b.x, a.y - b.y) * METERS_PER_UNIT;
  const seconds = (meters / WALK_SPEED) * (busy ? BUSY_FACTOR : 1);
  return { from, to, busy: !!busy, meters, seconds };
});

const ROUNDS = [
  { start: 'E1', goal: 'N3' },
  { start: 'E2', goal: 'J5' },
  { start: 'E1', goal: 'S3' },
  { start: 'E2', goal: 'N1' },
  { start: 'E1', goal: 'N2' },
];

function neighbors(id) {
  return EDGES.filter((e) => e.from === id || e.to === id).map((e) => ({
    id: e.from === id ? e.to : e.from,
    edge: e,
  }));
}

function edgeBetween(a, b) {
  return EDGES.find((e) => (e.from === a && e.to === b) || (e.from === b && e.to === a));
}

function pathSeconds(path) {
  let t = 0;
  for (let i = 0; i < path.length - 1; i++) t += edgeBetween(path[i], path[i + 1]).seconds;
  return t;
}

// Dijkstra on walking time, recording the order nodes are settled so it can be animated.
function dijkstra(start, goal) {
  const dist = {};
  const prev = {};
  const open = new Set(Object.keys(NODES));
  Object.keys(NODES).forEach((id) => {
    dist[id] = Infinity;
    prev[id] = null;
  });
  dist[start] = 0;
  const visited = [];
  while (open.size) {
    let cur = null;
    open.forEach((id) => {
      if (cur === null || dist[id] < dist[cur]) cur = id;
    });
    if (cur === null || dist[cur] === Infinity) break;
    open.delete(cur);
    visited.push(cur);
    if (cur === goal) break;
    neighbors(cur).forEach(({ id, edge }) => {
      if (!open.has(id)) return;
      const alt = dist[cur] + edge.seconds;
      if (alt < dist[id]) {
        dist[id] = alt;
        prev[id] = cur;
      }
    });
  }
  const path = [];
  for (let n = goal; n; n = prev[n]) path.unshift(n);
  return { path, seconds: dist[goal], visited };
}

function fmt(seconds) {
  const s = Math.round(seconds);
  const m = Math.floor(s / 60);
  return m ? `${m}m ${String(s % 60).padStart(2, '0')}s` : `${s}s`;
}

function pointsOf(path) {
  return path.map((id) => `${NODES[id].x},${NODES[id].y}`).join(' ');
}

export default function PathfinderGame() {
  const [round, setRound] = useState(0);
  const [path, setPath] = useState([ROUNDS[0].start]);
  const [phase, setPhase] = useState('play'); // play | solving | result | done
  const [explored, setExplored] = useState([]);
  const [showBest, setShowBest] = useState(false);
  const [scores, setScores] = useState([]);
  const timers = useRef([]);

  const { start, goal } = ROUNDS[round];
  const current = path[path.length - 1];
  const best = useMemo(() => dijkstra(start, goal), [start, goal]);
  const yourTime = pathSeconds(path);
  const reachable = phase === 'play' ? neighbors(current).map((n) => n.id) : [];

  useEffect(() => () => timers.current.forEach(clearTimeout), []);

  function later(fn, ms) {
    timers.current.push(setTimeout(fn, ms));
  }

  function solve(finalPath) {
    setPhase('solving');
    setExplored([]);
    setShowBest(false);
    const step = 140;
    best.visited.forEach((id, i) => later(() => setExplored((v) => [...v, id]), 300 + i * step));
    const end = 300 + best.visited.length * step;
    later(() => setShowBest(true), end + 150);
    later(() => {
      const ratio = best.seconds / pathSeconds(finalPath);
      setScores((s) => [...s, Math.round(Math.min(1, ratio) * 100)]);
      setPhase('result');
    }, end + 700);
  }

  function step(id) {
    if (phase !== 'play' || !reachable.includes(id)) return;
    if (path.length > 1 && path[path.length - 2] === id) {
      setPath(path.slice(0, -1));
      return;
    }
    const next = [...path, id];
    setPath(next);
    if (id === goal) solve(next);
  }

  function undo() {
    if (phase === 'play' && path.length > 1) setPath(path.slice(0, -1));
  }

  function resetRound(r) {
    timers.current.forEach(clearTimeout);
    timers.current = [];
    setRound(r);
    setPath([ROUNDS[r].start]);
    setExplored([]);
    setShowBest(false);
    setPhase('play');
  }

  function nextRound() {
    if (round + 1 < ROUNDS.length) resetRound(round + 1);
    else setPhase('done');
  }

  function playAgain() {
    setScores([]);
    resetRound(0);
  }

  const total = scores.length ? Math.round(scores.reduce((a, b) => a + b, 0) / scores.length) : 0;
  const lastScore = scores[scores.length - 1];
  const perfect = phase === 'result' && lastScore === 100;

  const btn = {
    fontFamily: 'inherit',
    fontSize: 13,
    padding: '10px 14px',
    minHeight: 44,
    borderRadius: 6,
    border: `1px solid ${C.line}`,
    background: 'transparent',
    color: C.text,
    cursor: 'pointer',
  };
  const primary = { ...btn, borderColor: C.you, color: C.you };

  return (
    <section
      aria-label="Beat the pathfinder mini game"
      style={{
        fontFamily: 'var(--font-mono), "JetBrains Mono", ui-monospace, monospace',
        color: C.text,
        background: C.panel,
        border: `1px solid ${C.line}`,
        borderRadius: 12,
        padding: 'clamp(14px, 3vw, 24px)',
        maxWidth: 760,
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        gap: 14,
      }}
    >
      <header style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: 8, alignItems: 'baseline' }}>
        <div style={{ fontSize: 14, minWidth: 0 }}>
          <span style={{ color: C.you }}>$</span> navigate --to{' '}
          <span style={{ color: '#fff' }}>&quot;{NODES[goal].name.toLowerCase()}&quot;</span>
        </div>
        <div style={{ fontSize: 12, color: C.muted, fontVariantNumeric: 'tabular-nums' }}>
          round {Math.min(round + 1, ROUNDS.length)}/{ROUNDS.length}
        </div>
      </header>

      <p style={{ margin: 0, fontSize: 13, lineHeight: 1.6, color: C.muted }}>
        Start at the <span style={{ color: C.text }}>{NODES[start].name.toLowerCase()}</span> and tap your way to the{' '}
        <span style={{ color: C.text }}>{NODES[goal].name.toLowerCase()}</span>. Busy corridors are slower. Then watch
        Dijkstra find the fastest route.
      </p>

      <div style={{ width: '100%', overflowX: 'auto' }}>
        <svg viewBox="0 0 400 270" style={{ width: '100%', maxWidth: '100%', display: 'block', touchAction: 'manipulation' }} role="group" aria-label="Mall floor plan">
          <rect x="4" y="22" width="392" height="242" rx="10" fill={C.bg} stroke={C.line} />
          {[
            [92, 72, 96, 46], [212, 72, 104, 46], [92, 142, 96, 46], [212, 142, 104, 46],
            [92, 26, 96, 22], [212, 26, 104, 22], [92, 216, 96, 22], [212, 216, 104, 22],
          ].map(([x, y, w, h], i) => (
            <rect key={i} x={x} y={y} width={w} height={h} rx="3" fill={C.shop} stroke={C.shopLine} />
          ))}

          {EDGES.map((e) => {
            const a = NODES[e.from];
            const b = NODES[e.to];
            return (
              <line
                key={e.from + e.to}
                x1={a.x}
                y1={a.y}
                x2={b.x}
                y2={b.y}
                stroke={e.busy ? '#5a3a1e' : C.line}
                strokeWidth={e.busy ? 5 : 3}
                strokeDasharray={e.busy ? '2 4' : undefined}
                strokeLinecap="round"
              />
            );
          })}

          {showBest && (
            <polyline points={pointsOf(best.path)} fill="none" stroke={C.algo} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" opacity="0.9" />
          )}
          {path.length > 1 && (
            <polyline points={pointsOf(path)} fill="none" stroke={C.you} strokeWidth={showBest ? 2 : 3} strokeLinecap="round" strokeLinejoin="round" strokeDasharray={showBest ? '5 4' : undefined} />
          )}

          {Object.entries(NODES).map(([id, n]) => {
            const isGoal = id === goal;
            const isStart = id === start;
            const canGo = reachable.includes(id);
            const seen = explored.includes(id);
            const r = n.type === 'junction' ? 4.5 : 6.5;
            return (
              <g
                key={id}
                data-node={id}
                role={canGo ? 'button' : undefined}
                tabIndex={canGo ? 0 : -1}
                aria-label={canGo ? `Walk to ${n.name || 'junction'}` : undefined}
                onClick={() => step(id)}
                onKeyDown={(ev) => {
                  if (ev.key === 'Enter' || ev.key === ' ') {
                    ev.preventDefault();
                    step(id);
                  }
                }}
                style={{ cursor: canGo ? 'pointer' : 'default', outline: 'none' }}
              >
                <circle cx={n.x} cy={n.y} r="16" fill="transparent" />
                {canGo && (
                  <circle cx={n.x} cy={n.y} r={r + 5} fill="none" stroke={C.you} strokeWidth="1.2" opacity="0.7">
                    <animate attributeName="r" values={`${r + 3};${r + 7};${r + 3}`} dur="1.6s" repeatCount="indefinite" />
                  </circle>
                )}
                {seen && <circle cx={n.x} cy={n.y} r={r + 3} fill="none" stroke={C.algo} strokeWidth="1.5" />}
                <circle
                  cx={n.x}
                  cy={n.y}
                  r={r}
                  fill={isGoal ? C.algo : id === current ? C.you : n.type === 'entrance' ? '#ccd6f6' : '#2b3a50'}
                  stroke={isStart ? C.you : 'none'}
                  strokeWidth="1.5"
                />
                {n.name && n.type !== 'junction' && (
                  <text
                    x={n.x}
                    y={n.y + (n.y < 100 ? -12 : 18)}
                    textAnchor={n.x < 40 ? 'start' : n.x > 360 ? 'end' : 'middle'}
                    fontSize="9"
                    fill={isGoal ? C.algo : C.muted}
                    style={{ fontFamily: 'inherit', pointerEvents: 'none' }}
                  >
                    {n.name.toLowerCase()}
                  </text>
                )}
              </g>
            );
          })}
        </svg>
      </div>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px 16px', fontSize: 11, color: C.muted }}>
        <span><span style={{ color: C.you }}>━</span> your route</span>
        <span><span style={{ color: C.algo }}>━</span> dijkstra</span>
        <span><span style={{ color: '#b07a3e' }}>┄</span> busy corridor</span>
      </div>

      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: 10 }}>
        <div aria-live="polite" style={{ fontSize: 13, fontVariantNumeric: 'tabular-nums', minWidth: 0 }}>
          {phase === 'play' && (
            <span>
              your time <span style={{ color: C.you }}>{fmt(yourTime)}</span>
            </span>
          )}
          {phase === 'solving' && <span style={{ color: C.muted }}>running dijkstra… exploring {explored.length} nodes</span>}
          {phase === 'result' && (
            <span>
              you <span style={{ color: C.you }}>{fmt(yourTime)}</span> · dijkstra{' '}
              <span style={{ color: C.algo }}>{fmt(best.seconds)}</span> ·{' '}
              <span style={{ color: '#fff' }}>{perfect ? 'perfect route' : `${lastScore}%`}</span>
            </span>
          )}
          {phase === 'done' && (
            <span>
              final score <span style={{ color: '#fff' }}>{total}%</span>{' '}
              <span style={{ color: C.muted }}>
                {total === 100 ? '· you are the algorithm' : total >= 85 ? '· nearly optimal' : '· dijkstra wins this time'}
              </span>
            </span>
          )}
        </div>
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
          {phase === 'play' && (
            <>
              <button type="button" style={btn} onClick={undo} disabled={path.length < 2}>
                undo
              </button>
              <button type="button" style={btn} onClick={() => resetRound(round)}>
                restart
              </button>
            </>
          )}
          {phase === 'result' && (
            <button type="button" style={primary} onClick={nextRound}>
              {round + 1 < ROUNDS.length ? 'next round →' : 'see score →'}
            </button>
          )}
          {phase === 'done' && (
            <>
              <button type="button" style={primary} onClick={playAgain}>
                play again
              </button>
              <a href="https://kompleksasiacity.com" target="_blank" rel="noopener noreferrer" style={{ ...btn, textDecoration: 'none', display: 'inline-flex', alignItems: 'center' }}>
                see the real mall ↗
              </a>
            </>
          )}
        </div>
      </div>

      <p style={{ margin: 0, fontSize: 11, lineHeight: 1.6, color: C.muted }}>
        A simplified version of the wayfinding I&apos;m building for kompleksasiacity.com. Each corridor is weighted by
        walking time, and the route is found with Dijkstra&apos;s algorithm.
      </p>
    </section>
  );
}
