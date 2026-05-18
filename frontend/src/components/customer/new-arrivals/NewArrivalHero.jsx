import newArrivals from "../../../assets/new-arrivals.png"
const NewArrivalHero = () => {
  return (
    <section
      className="
        relative
        overflow-hidden
        bg-[#F6F3FF]
      "
    >
      <div
        className="
          mx-auto
          grid
          min-h-[500px]
          max-w-7xl
          items-center
          gap-16
          px-6
          py-20
          lg:grid-cols-2
        "
      >
        <div>
          <span
            className="
              rounded-full
              bg-[#6C63FF]/10
              px-5
              py-2
              text-xs
              font-semibold
              uppercase
              tracking-[0.25em]
              text-[#6C63FF]
            "
          >
            New Collection
          </span>

          <h1
            className="
              mt-8
              text-5xl
              font-bold
              leading-tight
              tracking-tight
              text-gray-900
              lg:text-7xl
            "
          >
            Discover The Latest Arrivals
          </h1>

          <p
            className="
              mt-8
              max-w-xl
              text-lg
              leading-8
              text-gray-500
            "
          >
            Explore our newest premium
            products curated for modern
            lifestyles, timeless aesthetics,
            and elevated everyday luxury.
          </p>

          <button
            className="
              mt-10
              h-14
              rounded-2xl
              bg-[#6C63FF]
              px-10
              text-sm
              font-semibold
              uppercase
              tracking-wider
              text-white
              transition-all
              hover:bg-[#5b52f5]
            "
          >
            Explore Collection
          </button>
        </div>

        <div
          className="
            overflow-hidden
            rounded-[40px]
          "
        >
          <img
            src={newArrivals}
            alt="New arrivals"
            className="
              h-full
              w-full
              object-cover
            "
          />
        </div>
      </div>
    </section>
  );
};

export default NewArrivalHero;