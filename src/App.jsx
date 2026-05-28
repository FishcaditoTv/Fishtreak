import { motion } from "framer-motion"

const teams = [
  {
    rank: "#1",
    name: "ECLIPSE",
    captain: "Aether",
    streak: 42,
    status: "LIVE",
    viewers: "4.2K",
  },
  {
    rank: "#2",
    name: "NOCTIS",
    captain: "Krow",
    streak: 37,
    status: "HUNTED",
    viewers: "3.8K",
  },
  {
    rank: "#3",
    name: "PHANTOM",
    captain: "Nyx",
    streak: 29,
    status: "WAR",
    viewers: "2.9K",
  },
]

export default function App() {
  return (
    <div className="min-h-screen bg-[#0D0D0D] text-white overflow-hidden">

      {/* BACKGROUND FX */}
      <div className="fixed inset-0 -z-10 overflow-hidden">

        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[1200px] bg-red-500/5 blur-3xl rounded-full" />

        <div className="absolute bottom-[-300px] right-[-200px] w-[700px] h-[700px] bg-red-900/10 blur-3xl rounded-full" />

        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />

      </div>

      {/* NAVBAR */}
      <nav className="border-b border-red-900/30 bg-black/50 backdrop-blur sticky top-0 z-50">

        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">

          <h1 className="text-3xl md:text-4xl font-black tracking-[0.3em] text-red-500">
            FISHTREAK
          </h1>

          <div className="hidden md:flex items-center gap-3 uppercase text-xs tracking-[0.3em]">

            <button className="px-5 py-3 rounded-2xl bg-red-500/10 border border-red-500/20 text-red-400">
              Home
            </button>

            <button className="px-5 py-3 rounded-2xl hover:bg-zinc-900 transition">
              Teams
            </button>

            <button className="px-5 py-3 rounded-2xl hover:bg-zinc-900 transition">
              Hunters
            </button>

            <button className="px-5 py-3 rounded-2xl hover:bg-zinc-900 transition">
              Cemetery
            </button>

          </div>

        </div>

      </nav>

      {/* HERO */}
      <motion.section
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative min-h-[90vh] flex items-center justify-center text-center px-6"
      >

        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-red-500/10 blur-3xl rounded-full" />

        <div className="relative z-10 max-w-5xl">

          <p className="uppercase tracking-[0.5em] text-red-500 text-xs md:text-sm mb-5">
            Reality Competitive Event
          </p>

          <h1 className="text-6xl md:text-9xl font-black leading-none">
            FISHTREAK
          </h1>

          <h2 className="mt-6 text-xl md:text-3xl uppercase tracking-[0.4em] text-zinc-300">
            SOBREVIVE LOS 5
          </h2>

          <p className="mt-8 text-zinc-400 text-base md:text-xl max-w-3xl mx-auto leading-relaxed">
            El evento competitivo en vivo donde los mejores equipos de Dead by Daylight
            defienden su racha frente a hunters oficiales y miles de espectadores.
          </p>

          <div className="flex flex-col md:flex-row gap-5 justify-center mt-12">

            <button className="bg-red-600 hover:bg-red-500 hover:scale-105 transition-all duration-300 px-10 py-5 rounded-3xl uppercase tracking-[0.3em] font-black shadow-[0_0_50px_rgba(255,45,45,0.35)]">
              Ver Leaderboard
            </button>

            <button className="border border-zinc-700 hover:border-red-500 hover:-translate-y-1 transition-all duration-300 px-10 py-5 rounded-3xl uppercase tracking-[0.3em] bg-zinc-900/40">
              Hunts Activas
            </button>

          </div>

        </div>

      </motion.section>

      {/* LIVE TICKER */}
      <div className="border-y border-red-900/20 bg-black/40 overflow-hidden whitespace-nowrap py-4 mb-24">

        <motion.div
          animate={{ x: ["100%", "-100%"] }}
          transition={{
            repeat: Infinity,
            duration: 18,
            ease: "linear",
          }}
          className="flex gap-20 text-sm uppercase tracking-[0.3em] text-red-400 font-semibold"
        >

          <span>NIGHTMARE inició hunt sobre ECLIPSE</span>
          <span>VOID eliminó a OBLIVION</span>
          <span>NOCTIS alcanzó racha de 37</span>
          <span>BLACKOUT cayó al Cemetery</span>
          <span>REAPER entró en WAR MATCH</span>

        </motion.div>

      </div>

      {/* ACTIVE HUNTS */}
      <section className="max-w-7xl mx-auto px-6 pb-32">

        <div className="mb-10">

          <p className="uppercase tracking-[0.4em] text-red-500 text-xs mb-4">
            LIVE CONFLICTS
          </p>

          <h2 className="text-5xl md:text-6xl font-black uppercase">
            ACTIVE HUNTS
          </h2>

        </div>

        <div className="grid lg:grid-cols-2 gap-6">

          <motion.div
            whileHover={{ y: -8 }}
            className="relative overflow-hidden rounded-[2rem] border border-red-900/30 bg-zinc-900/80 p-8 hover:border-red-500 hover:shadow-[0_0_40px_rgba(255,0,0,0.15)] transition-all duration-300"
          >

            <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 to-transparent" />

            <div className="relative z-10">

              <div className="flex items-center justify-between mb-8">

                <span className="uppercase tracking-[0.3em] text-xs text-red-400">
                  HIGH RISK
                </span>

                <div className="flex items-center gap-2 text-red-500 text-xs uppercase tracking-[0.3em]">

                  <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />

                  LIVE

                </div>

              </div>

              <h3 className="text-4xl md:text-5xl font-black mb-6">
                NIGHTMARE
              </h3>

              <div className="flex items-center gap-4 mb-6">

                <div className="h-[1px] flex-1 bg-red-900/40" />

                <span className="uppercase tracking-[0.3em] text-xs text-zinc-500">
                  Hunting
                </span>

                <div className="h-[1px] flex-1 bg-red-900/40" />

              </div>

              <h4 className="text-3xl font-black text-red-400 mb-8">
                ECLIPSE
              </h4>

            </div>

          </motion.div>

          <motion.div
            whileHover={{ y: -8 }}
            className="relative overflow-hidden rounded-[2rem] border border-red-900/30 bg-zinc-900/80 p-8 hover:border-red-500 hover:shadow-[0_0_40px_rgba(255,0,0,0.15)] transition-all duration-300"
          >

            <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 to-transparent" />

            <div className="relative z-10">

              <div className="flex items-center justify-between mb-8">

                <span className="uppercase tracking-[0.3em] text-xs text-yellow-400">
                  WAR MATCH
                </span>

                <div className="flex items-center gap-2 text-red-500 text-xs uppercase tracking-[0.3em]">

                  <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />

                  LIVE

                </div>

              </div>

              <h3 className="text-4xl md:text-5xl font-black mb-6">
                VOID
              </h3>

              <div className="flex items-center gap-4 mb-6">

                <div className="h-[1px] flex-1 bg-red-900/40" />

                <span className="uppercase tracking-[0.3em] text-xs text-zinc-500">
                  Hunting
                </span>

                <div className="h-[1px] flex-1 bg-red-900/40" />

              </div>

              <h4 className="text-3xl font-black text-red-400 mb-8">
                NOCTIS
              </h4>

            </div>

          </motion.div>

        </div>

      </section>

      {/* LEADERBOARD */}
      <section className="max-w-7xl mx-auto px-6 pb-32">

        <div className="mb-10">

          <p className="uppercase tracking-[0.4em] text-red-500 text-xs mb-4">
            LIVE STATUS
          </p>

          <h2 className="text-5xl md:text-6xl font-black uppercase">
            LEADERBOARD
          </h2>

        </div>

        <div className="grid gap-6">

          {teams.map((team) => (
            <motion.div
              key={team.name}
              whileHover={{ y: -8 }}
              className="bg-zinc-900/70 border border-zinc-800 rounded-[2rem] p-8 hover:border-red-500 hover:shadow-[0_0_40px_rgba(255,0,0,0.15)] transition-all duration-300"
            >

              <div className="flex flex-col lg:flex-row justify-between gap-10">

                <div className="flex items-center gap-6">

                  <div className="w-16 h-16 rounded-2xl bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-400 font-black text-xl">
                    {team.rank}
                  </div>

                  <div>

                    <h3 className="text-4xl font-black">
                      {team.name}
                    </h3>

                    <p className="text-zinc-500 uppercase tracking-[0.3em] text-xs mt-2">
                      Captain: {team.captain}
                    </p>

                  </div>

                </div>

                <div className="flex flex-wrap gap-10">

                  <div>

                    <p className="text-zinc-500 uppercase tracking-[0.3em] text-xs mb-2">
                      Streak
                    </p>

                    <h4 className="text-5xl font-black text-red-500">
                      {team.streak}
                    </h4>

                  </div>

                  <div>

                    <p className="text-zinc-500 uppercase tracking-[0.3em] text-xs mb-2">
                      Status
                    </p>

                    <h4 className="text-xl font-black text-red-400">
                      {team.status}
                    </h4>

                  </div>

                  <div>

                    <p className="text-zinc-500 uppercase tracking-[0.3em] text-xs mb-2">
                      Viewers
                    </p>

                    <h4 className="text-xl font-black">
                      {team.viewers}
                    </h4>

                  </div>

                </div>

              </div>

            </motion.div>
          ))}

        </div>

      </section>
</section>

{/* HUNTERS */}
<section className="max-w-7xl mx-auto px-6 pb-32">
{/* CEMETERY */}
<section className="max-w-7xl mx-auto px-6 pb-40">

  <div className="mb-10">

    <p className="uppercase tracking-[0.4em] text-red-500 text-xs mb-4">
      ELIMINATED TEAMS
    </p>

    <h2 className="text-5xl md:text-6xl font-black uppercase">
      CEMETERY
    </h2>

  </div>
{/* FOOTER */}
<footer className="border-t border-red-900/20 bg-black/40 backdrop-blur">

  <div className="max-w-7xl mx-auto px-6 py-16">

    <div className="grid md:grid-cols-3 gap-12">

      {/* BRAND */}
      <div>

        <h3 className="text-4xl font-black tracking-[0.3em] text-red-500 mb-6">
          FISHTREAK
        </h3>

        <p className="text-zinc-500 leading-relaxed max-w-sm">
          Competitive Dead by Daylight reality event where elite teams survive hunts,
          wars and elimination matches live.
        </p>

      </div>

      {/* NAVIGATION */}
      <div>

        <h4 className="uppercase tracking-[0.3em] text-sm text-zinc-400 mb-6">
          Navigation
        </h4>

        <div className="flex flex-col gap-4 text-zinc-500 uppercase tracking-[0.2em] text-sm">

          <button className="hover:text-red-400 transition text-left">
            Home
          </button>

          <button className="hover:text-red-400 transition text-left">
            Leaderboard
          </button>

          <button className="hover:text-red-400 transition text-left">
            Hunters
          </button>

          <button className="hover:text-red-400 transition text-left">
            Cemetery
          </button>

        </div>

      </div>

      {/* STATUS */}
      <div>

        <h4 className="uppercase tracking-[0.3em] text-sm text-zinc-400 mb-6">
          Live Status
        </h4>

        <div className="space-y-4">

          <div className="flex items-center gap-3">

            <div className="w-3 h-3 rounded-full bg-red-500 animate-pulse" />

            <p className="uppercase tracking-[0.2em] text-sm text-zinc-400">
              5 Hunts Active
            </p>

          </div>

          <div className="flex items-center gap-3">

            <div className="w-3 h-3 rounded-full bg-green-500" />

            <p className="uppercase tracking-[0.2em] text-sm text-zinc-400">
              Stream Online
            </p>

          </div>

          <div className="flex items-center gap-3">

            <div className="w-3 h-3 rounded-full bg-yellow-400" />

            <p className="uppercase tracking-[0.2em] text-sm text-zinc-400">
              Season 01 Active
            </p>

          </div>

        </div>

      </div>

    </div>

    <div className="border-t border-zinc-900 mt-16 pt-8 flex flex-col md:flex-row justify-between gap-6">

      <p className="text-zinc-600 uppercase tracking-[0.2em] text-xs">
        © 2026 FISHTREAK — ALL RIGHTS RESERVED
      </p>

      <p className="text-zinc-700 uppercase tracking-[0.2em] text-xs">
        POWERED BY DEAD BY DAYLIGHT COMPETITIVE COMMUNITY
      </p>

    </div>

  </div>

</footer>
  <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">

    {/* TEAM */}
    <motion.div
      whileHover={{ y: -8 }}
      className="relative overflow-hidden rounded-[2rem] border border-zinc-800 bg-black/60 p-8 hover:border-red-500 transition-all duration-300"
    >

      <div className="absolute inset-0 bg-gradient-to-br from-red-900/10 to-transparent" />

      <div className="relative z-10">

        <div className="flex items-center justify-between mb-8">

          <span className="uppercase tracking-[0.3em] text-xs text-zinc-500">
            ELIMINATED
          </span>

          <div className="w-3 h-3 rounded-full bg-zinc-600" />

        </div>

        <h3 className="text-4xl font-black mb-4 text-zinc-300">
          BLACKOUT
        </h3>

        <p className="text-zinc-500 leading-relaxed mb-8">
          Eliminados tras perder una WAR contra NIGHTMARE.
        </p>

        <div className="grid grid-cols-2 gap-6">

          <div>

            <p className="text-zinc-600 uppercase tracking-[0.3em] text-xs mb-2">
              Final Streak
            </p>

            <h4 className="text-3xl font-black text-red-500">
              18
            </h4>

          </div>

          <div>

            <p className="text-zinc-600 uppercase tracking-[0.3em] text-xs mb-2">
              Cause
            </p>

            <h4 className="text-xl font-black text-zinc-400">
              WAR LOSS
            </h4>

          </div>

        </div>

      </div>

    </motion.div>

    {/* TEAM */}
    <motion.div
      whileHover={{ y: -8 }}
      className="relative overflow-hidden rounded-[2rem] border border-zinc-800 bg-black/60 p-8 hover:border-red-500 transition-all duration-300"
    >

      <div className="absolute inset-0 bg-gradient-to-br from-red-900/10 to-transparent" />

      <div className="relative z-10">

        <div className="flex items-center justify-between mb-8">

          <span className="uppercase tracking-[0.3em] text-xs text-zinc-500">
            ELIMINATED
          </span>

          <div className="w-3 h-3 rounded-full bg-zinc-600" />

        </div>

        <h3 className="text-4xl font-black mb-4 text-zinc-300">
          OBLIVION
        </h3>

        <p className="text-zinc-500 leading-relaxed mb-8">
          Hunter REAPER terminó su streak durante una hunt crítica.
        </p>

        <div className="grid grid-cols-2 gap-6">

          <div>

            <p className="text-zinc-600 uppercase tracking-[0.3em] text-xs mb-2">
              Final Streak
            </p>

            <h4 className="text-3xl font-black text-red-500">
              24
            </h4>

          </div>

          <div>

            <p className="text-zinc-600 uppercase tracking-[0.3em] text-xs mb-2">
              Cause
            </p>

            <h4 className="text-xl font-black text-zinc-400">
              HUNT LOSS
            </h4>

          </div>

        </div>

      </div>

    </motion.div>

    {/* TEAM */}
    <motion.div
      whileHover={{ y: -8 }}
      className="relative overflow-hidden rounded-[2rem] border border-zinc-800 bg-black/60 p-8 hover:border-red-500 transition-all duration-300"
    >

      <div className="absolute inset-0 bg-gradient-to-br from-red-900/10 to-transparent" />

      <div className="relative z-10">

        <div className="flex items-center justify-between mb-8">

          <span className="uppercase tracking-[0.3em] text-xs text-zinc-500">
            ELIMINATED
          </span>

          <div className="w-3 h-3 rounded-full bg-zinc-600" />

        </div>

        <h3 className="text-4xl font-black mb-4 text-zinc-300">
          SPECTRAL
        </h3>

        <p className="text-zinc-500 leading-relaxed mb-8">
          Eliminados después de perder 3 hunts consecutivas.
        </p>

        <div className="grid grid-cols-2 gap-6">

          <div>

            <p className="text-zinc-600 uppercase tracking-[0.3em] text-xs mb-2">
              Final Streak
            </p>

            <h4 className="text-3xl font-black text-red-500">
              11
            </h4>

          </div>

          <div>

            <p className="text-zinc-600 uppercase tracking-[0.3em] text-xs mb-2">
              Cause
            </p>

            <h4 className="text-xl font-black text-zinc-400">
              COLLAPSE
            </h4>

          </div>

        </div>

      </div>

    </motion.div>

  </div>

</section>
...
</section>

</div>
    </div>
  )
}