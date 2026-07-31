import Image from "next/image";

const books = [
  {
    title: "The Invisible Cage",
    image: "/images/4.png",
    description:
      "A journey from overthinking to freedom. Learn to quiet your mind and take control of your life.",
    link: "https://www.amazon.com/dp/B0HC5Z2LGX",
    featured: true,
  },
  {
    title: "Rewire Your Brain",
    image: "/images/1.png",
    description:
      "Unlock the power of your mind and reshape your habits for a better future.",
    link: "https://www.amazon.com/dp/B0GRB7CRHG",
  },
  {
    title: "The Psychology of Human Behaviour",
    image: "/images/2.png",
    description:
      "Understand why people think, feel and behave the way they do.",
    link: "https://www.amazon.com/dp/B0GR9ZG6BW",
  },
  {
    title: "Money: Blessing, Curse or Mirror",
    image: "/images/3.png",
    description:
      "Discover the psychology behind money and the beliefs that shape your financial life.",
    link: "https://www.amazon.com/dp/B0GRC7STZT",
  },
];

export default function Home() {
  return (
    <main className="bg-black text-white">

      {/* HERO */}

      <section className="min-h-screen flex flex-col justify-center items-center text-center px-6">

        <p className="uppercase tracking-[8px] text-yellow-500">
          Author • Creator • Thinker
        </p>

        <h1 className="text-6xl md:text-8xl font-bold mt-6">
          Gitesh Kumar Umrey
        </h1>

        <p className="mt-8 max-w-3xl text-xl text-gray-300">
          Helping people overcome overthinking, build discipline,
          understand psychology, and create a meaningful life.
        </p>

        <p className="mt-10 italic text-yellow-400 text-2xl">
          "The cage was never locked.
          <br />
          The key has always been you."
        </p>

      </section>

      {/* BOOKS */}

      <section className="max-w-7xl mx-auto px-6 py-24">

        <h2 className="text-5xl font-bold text-center mb-16">
          My Books
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">

          {books.map((book) => (

            <div
              key={book.title}
              className="bg-zinc-900 rounded-2xl overflow-hidden hover:scale-105 transition duration-300 shadow-xl"
            >

              <Image
                src={book.image}
                alt={book.title}
                width={400}
                height={600}
                className="w-full"
              />

              <div className="p-6">

                {book.featured && (
                  <span className="text-yellow-400 text-sm font-bold">
                    ⭐ Featured Book
                  </span>
                )}

                <h3 className="text-2xl font-bold mt-2">
                  {book.title}
                </h3>

                <p className="text-gray-400 mt-4 text-sm leading-7">
                  {book.description}
                </p>

                <a
                  href={book.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-block bg-yellow-500 text-black font-bold px-6 py-3 rounded-full hover:bg-yellow-400 transition"
                >
                  Buy on Amazon
                </a>

              </div>

            </div>

          ))}

        </div>

      </section>

    </main>
  );
}