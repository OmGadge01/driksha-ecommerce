const NewsletterBanner = () => {
  return (
    <section className="bg-primary py-24">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <h2 className="text-4xl font-bold tracking-tight text-white lg:text-5xl">
          Stay Updated With New Drops
        </h2>

        <p className="mt-6 text-lg leading-8 text-white/80">
          Subscribe to receive updates on exclusive arrivals, premium collections, and limited offers.
        </p>

        <div className="mx-auto mt-10 flex max-w-2xl overflow-hidden rounded-2xl bg-white">
          <input
            type="email"
            placeholder="Enter your email"
            className="h-14 flex-1 px-5 outline-none focus:border-primary"
          />
          <button className="bg-secondary px-8 text-sm font-semibold uppercase tracking-wider text-white hover:opacity-90 transition">
            Subscribe
          </button>
        </div>
      </div>
    </section>
  );
};

export default NewsletterBanner;
