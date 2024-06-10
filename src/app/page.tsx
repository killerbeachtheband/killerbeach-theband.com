import { News } from "@/components/news";

export default function Home() {
  return (
    <main className="mx-auto max-w-7xl">
      <section>
        <h2>Live</h2>
      </section>

      <section>
        <h2>News</h2>
        <News />
      </section>

      <section>
        <h2>Contact</h2>
      </section>
    </main>
  );
}
