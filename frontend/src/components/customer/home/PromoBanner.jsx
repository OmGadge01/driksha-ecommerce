const PromoBanner = () => {
  return (
    <section className="bg-[#6C63FF] py-24">
      <div
        className="
          mx-auto
          flex
          max-w-7xl
          flex-col
          items-center
          justify-between
          gap-10
          px-6
          text-center
          md:flex-row
          md:text-left
        "
      >
        <div>
          <span
            className="
              rounded-full
              bg-white/15
              px-4
              py-1
              text-sm
              font-medium
              text-white
            "
          >
            SEASONAL EVENT
          </span>

          <h2
            className="
              mt-5
              text-5xl
              font-bold
              leading-tight
              text-white
            "
          >
            Elevate Your Spring Wardrobe.
          </h2>

          <p className="mt-4 text-lg text-white/80">
            Exclusive access to our private sale.
            Up to 40% off selected items.
          </p>
        </div>

        <button
          className="
            rounded-2xl
            bg-white
            px-8
            py-4
            font-semibold
            text-[#6C63FF]
            transition
            hover:scale-105
          "
        >
          Shop the Sale
        </button>
      </div>
    </section>
  );
};

export default PromoBanner;