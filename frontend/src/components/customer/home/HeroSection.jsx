const HeroSection = () => {
  return (
    <section className="relative h-[850px] overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=1600"
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-white/90 to-transparent" />

      <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-6">
        <div className="max-w-2xl">
          <span className="mb-4 block text-sm font-semibold tracking-[0.25em] text-primary">
            ESTABLISHED 2024
          </span>

          <h1 className="text-6xl font-bold leading-tight tracking-tight text-gray-900">
            Elevated Essentials for the Modern Individual.
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-gray-600">
            Discover curated luxury pieces blending timeless elegance with contemporary design.
          </p>

          <div className="mt-10 flex gap-4">
            <button className="rounded-xl bg-primary px-8 py-4 font-medium text-white transition hover:bg-primary-dark">
              Shop New Arrivals
            </button>
            <button className="rounded-xl border border-primary px-8 py-4 font-medium text-primary transition hover:bg-primary/5">
              Explore Collections
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
