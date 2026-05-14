const CollectionHeader = () => {
  return (
    <section className="mb-12">
      <div
        className="
          mb-5
          flex
          items-center
          gap-2
          text-sm
          text-gray-500
        "
      >
        <span>Home</span>
        <span>/</span>
        <span>Collections</span>
        <span>/</span>

        <span className="font-medium text-gray-900">
          Premium Essentials
        </span>
      </div>

      <div
        className="
          flex
          flex-col
          justify-between
          gap-6
          md:flex-row
          md:items-end
        "
      >
        <div>
          <h1
            className="
              text-5xl
              font-bold
              tracking-tight
              text-gray-900
            "
          >
            Premium Essentials
          </h1>

          <p
            className="
              mt-4
              max-w-2xl
              leading-7
              text-gray-500
            "
          >
            Discover curated luxury essentials designed
            for the modern professional lifestyle.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <span className="text-sm text-gray-500">
            Sort by:
          </span>

          <select
            className="
              h-11
              rounded-xl
              border
              border-gray-200
              px-4
              text-sm
              outline-none
              focus:border-[#6C63FF]
            "
          >
            <option>Recommended</option>
            <option>Newest</option>
            <option>Price Low to High</option>
            <option>Price High to Low</option>
          </select>
        </div>
      </div>
    </section>
  );
};

export default CollectionHeader;