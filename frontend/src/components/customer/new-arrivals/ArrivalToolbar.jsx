const ArrivalToolbar = ({
  totalProducts,
}) => {
  return (
    <div
      className="
        mb-12
        flex
        flex-col
        gap-6
        md:flex-row
        md:items-center
        md:justify-between
      "
    >
      <div>
        <h2
          className="
            text-3xl
            font-bold
            tracking-tight
          "
        >
          Latest Products
        </h2>

        <p className="mt-2 text-gray-500">
          Showing {totalProducts} new
          arrivals
        </p>
      </div>

      <select
        className="
          h-12
          rounded-2xl
          border
          border-gray-200
          px-5
          text-sm
          outline-none
        "
      >
        <option>
          Sort by Latest
        </option>

        <option>
          Price Low to High
        </option>

        <option>
          Price High to Low
        </option>

        <option>
          Top Rated
        </option>
      </select>
    </div>
  );
};

export default ArrivalToolbar;