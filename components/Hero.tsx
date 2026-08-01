export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-6">

      <p className="uppercase tracking-[10px] text-yellow-500">
        Author • Creator • Thinker
      </p>

      <h1 className="text-7xl md:text-9xl font-bold mt-8">
        Gitesh Kumar Umrey
      </h1>

      <p className="mt-10 max-w-3xl text-gray-400 text-xl leading-9">
        Helping people overcome overthinking,
        understand psychology,
        and build a meaningful life.
      </p>

      <div className="flex gap-6 mt-12">

        <a
          href="#books"
          className="bg-yellow-500 text-black px-8 py-4 rounded-full font-bold hover:scale-105 transition"
        >
          Explore Books
        </a>

        <a
          href="https://www.amazon.com/dp/B0HC5Z2LGX"
          target="_blank"
          rel="noopener noreferrer"
          className="border border-yellow-500 px-8 py-4 rounded-full hover:bg-yellow-500 hover:text-black transition"
        >
          Featured Book
        </a>

      </div>

    </section>
  );
}