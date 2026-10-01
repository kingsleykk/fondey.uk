import PathfinderGame from '@/components/PathfinderGame';

export default function Playground() {
  return (
    <section id="play" className="section flex flex-col gap-7">
      <div className="flex flex-col gap-4">
        <div>
          <p className="prompt m-0">
            <span>./beat-the-pathfinder</span>
          </p>
          <h2 className="h2">Beat the pathfinder</h2>
        </div>
        <p className="prose m-0 max-w-[36em]">
          Find the fastest way through a mall, then watch the routing algorithm I&apos;m building for a real one try to
          beat you. Busy corridors are slower than they look.
        </p>
      </div>
      <PathfinderGame />
    </section>
  );
}
