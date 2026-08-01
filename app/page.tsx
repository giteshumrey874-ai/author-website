import Navbar from "@/components/Navbar";
import Image from "next/image";

const books = [
  {
    title: "The Invisible Cage",
    image: "/images/4.png",
    description: "A journey from overthinking to freedom.",
    link: "https://www.amazon.com/dp/B0HC9Y9XN9",
  },
  {
    title: "Rewire Your Brain",
    image: "/images/1.png",
    description: "Unlock the power of your mind.",
    link: "https://www.amazon.com/dp/B0GRB7CRHG",
  },
  {
    title: "The Psychology of Human Behaviour",s
    image: "/images/2.png",
    description: "Understand people like never before.",
    link: "https://www.amazon.com/dp/B0GR9ZG6BW",
  },
  {
    title: "Money: Blessing, Curse or Mirror",
    image: "/images/3.png",
    description: "Change the way you think about money.",
    link: "https://www.amazon.com/dp/B0GRC7STZT",
  },
];

export default function Home() {
  return (
    <main className="bg-[#090909] text-white">
      
      {/* NAVBAR */}

      <nav className="fixed top-0 w-full z-50 backdrop-blur-lg bg-black/50 border-b border-zinc-800">

        <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-5">

          <h1 className="font-bold text-2xl tracking-wide">
            Gitesh
          </h1>

          <div className="hidden md:flex gap-10 text-gray-300">

            <a href="#">Home</a>
            <a href="#books">Books</a>
            <a href="#">About</a>
            <a href="#">Contact</a>

          </div>

        </div>

      </nav>

      {/* HERO */}

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
            className="border border-yellow-500 px-8 py-4 rounded-full hover:bg-yellow-500 hover:text-black transition"
          >
            Featured Book
          </a>

        </div>

      </section>

      {/* BOOKS */}

      <section
        id="books"
        className="max-w-7xl mx-auto px-6 py-28"
      >

        <h2 className="text-5xl font-bold text-center mb-20">
          My Books
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {books.map((book) => (

            <div
              key={book.title}
              className="rounded-3xl bg-zinc-900 overflow-hidden hover:-translate-y-3 hover:shadow-yellow-500/20 hover:shadow-2xl transition duration-500"
            >

              <Image
                src={book.image}
                alt={book.title}
                width={500}
                height={700}
                className="w-full"
              />

              <div className="p-6">

                <h3 className="text-2xl font-bold">
                  {book.title}
                </h3>

                <p className="text-gray-400 mt-4">
                  {book.description}
                </p>

                <a
                  href={book.link}
                  target="_blank"
                  className="mt-6 inline-block bg-yellow-500 text-black px-6 py-3 rounded-full font-semibold"
                >
                  Available on Amazon →
                </a>

              </div>

            </div>

          ))}

        </div>

      </section>

    </main>
  );
}