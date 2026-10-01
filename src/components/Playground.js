import PathfinderGame from '@/components/PathfinderGame';

export default function Playground() {
  return (
    <section id="play" className="py-24 px-6 md:px-20">
      <h2 className="text-3xl font-mono text-white mb-4 flex items-center">
        <span className="text-[#64ffda] mr-2">03.</span> Beat the Pathfinder
        <span className="h-px bg-gray-700 w-64 ml-4 hidden md:block"></span>
      </h2>
      <p className="max-w-2xl text-[#8892b0] mb-10 leading-relaxed">
        Can you find the fastest route through a mall before the routing algorithm I&apos;m building for one does?
      </p>
      <PathfinderGame />
    </section>
  );
}
