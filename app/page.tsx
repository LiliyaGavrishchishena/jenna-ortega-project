import Image from 'next/image'

const facts = [
  ['Full name:', 'Jenna Marie Ortega'],
  ['Age:', '24'],
  ['Country:', 'the USA'],
  ['Job:', 'actress'],
]

const about = [
  'Jenna Ortega is a famous American actress.',
  'She is from California, USA.',
  'She is 24 years old.',
  'She can act very well.',
  'She started acting when she was nine years old.',
  'She is famous for the TV series Wednesday.',
  'Jenna is talented, creative and hardworking.',
]

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#fbffff] px-4 py-8 text-slate-800 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-[1500px]">
        <header className="relative mb-8 text-center">
          <span className="absolute left-[21%] top-0 text-5xl text-amber-400">
            ✦
          </span>

          <span className="absolute right-[20%] top-3 text-4xl text-amber-400">
            ✦
          </span>

          <h1 className="inline-block bg-gradient-to-t from-cyan-100 from-40% to-transparent px-5 text-5xl font-black tracking-wide text-teal-800 sm:text-6xl lg:text-8xl">
            JENNA ORTEGA
          </h1>

          <p className="mt-2 text-2xl italic text-slate-700 sm:text-3xl lg:text-4xl">
            A talented actress ♡
          </p>
        </header>

        <div className="grid items-start gap-10 lg:grid-cols-[430px_1fr]">
          <aside>
            <div className="rotate-1 bg-white p-3 pb-6 shadow-2xl">
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src="/images/jenna.jpg"
                  alt="Jenna Ortega"
                  fill
                  priority
                  className="object-cover"
                />
              </div>

              <p className="mt-5 text-center text-3xl italic text-slate-500">
                Act. Create. Inspire. ♡
              </p>
            </div>

            <div className="mt-10 rotate-2 bg-cyan-100 px-6 py-4 text-center text-xl italic text-slate-600">
              Big Dreams
              <br />
              Brighter Tomorrows ♡
            </div>

            <div className="mt-6 -rotate-3 bg-cyan-100 px-6 py-4 text-center text-xl italic text-slate-600">
              Small girl. Big stories. ♡
            </div>
          </aside>

          <section className="relative flex flex-col gap-5 xl:pr-[250px]">
            <article className="relative self-start w-full rounded-3xl border-4 border-cyan-200 bg-white/90 px-6 pb-5 pt-16">
              <h2 className="absolute -left-1 -top-1 min-w-[280px] rounded-br-3xl rounded-tl-3xl rounded-tr-3xl bg-teal-600 px-6 py-3 text-2xl font-bold text-white sm:text-3xl">
                ▣ Quick Facts
              </h2>

              <div className="space-y-3">
                {facts.map(([label, value]) => (
                  <div
                    key={label}
                    className="grid gap-1 text-lg sm:grid-cols-[150px_1fr] sm:text-xl"
                  >
                    <strong>{label}</strong>
                    <span>{value}</span>
                  </div>
                ))}
              </div>
            </article>

            <div className="hidden xl:block">
              <div className="absolute right-0 top-0 rotate-1 bg-white p-2 shadow-xl">
                <div className="relative aspect-[3/4] w-[190px] overflow-hidden">
                  <Image
                    src="/images/wednesday.jpg"
                    alt="Wednesday"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            <article className="relative rounded-3xl border-4 border-cyan-200 bg-white/90 px-6 pb-6 pt-16 xl:mr-[-250px]">
              <h2 className="absolute -left-1 -top-1 min-w-[280px] rounded-br-3xl rounded-tl-3xl rounded-tr-3xl bg-teal-600 px-6 py-3 text-2xl font-bold text-white sm:text-3xl">
                ★ About her
              </h2>

              <ul className="space-y-1.5 pr-28">
                {about.map(item => (
                  <li
                    key={item}
                    className="relative pl-8 text-lg leading-7 sm:text-xl"
                  >
                    <span className="absolute left-0 text-teal-500">★</span>
                    {item}
                  </li>
                ))}
              </ul>

              <div className="absolute bottom-5 right-6 text-right text-lg italic leading-6 text-slate-600">
                Movies
                <br />
                Make a
                <br />
                Brighter
                <br />
                World ♡
              </div>
            </article>

            <article className="relative rounded-3xl border-4 border-cyan-200 bg-white/90 px-6 pb-5 pt-16 xl:mr-[-250px]">
              <h2 className="absolute -left-1 -top-1 min-w-[280px] rounded-br-3xl rounded-tl-3xl rounded-tr-3xl bg-teal-600 px-6 py-3 text-2xl font-bold text-white sm:text-3xl">
                ♥ Why I choose her
              </h2>

              <p className="text-lg sm:text-xl">
                I choose Jenna Ortega because she is talented and interesting.
              </p>
            </article>
          </section>
        </div>
      </div>
    </main>
  )
}
