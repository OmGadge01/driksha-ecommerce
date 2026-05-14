const categories = [
  {
    title: "Apparel",
    subtitle: "Timeless silhouettes, modern materials.",
    image:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1400",
    large: true,
  },
  {
    title: "Accessories",
    subtitle: "Browse premium essentials.",
    image:
      "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?q=80&w=1000",
  },
  {
    title: "Home",
    subtitle: "Minimal luxury interiors.",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1000",
  },
];

const CategoryGrid = () => {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-gray-900">
          Shop by Category
        </h2>

        <p className="mt-2 text-gray-500">
          Defining your style through curated selections.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-12 md:h-[600px]">
        <div
          className="
            group
            relative
            overflow-hidden
            rounded-3xl
            md:col-span-8
          "
        >
          <img
            src={categories[0].image}
            alt={categories[0].title}
            className="
              h-full
              w-full
              object-cover
              transition
              duration-700
              group-hover:scale-105
            "
          />

          <div className="absolute inset-0 bg-black/25" />

          <div className="absolute bottom-8 left-8">
            <h3 className="text-4xl font-bold text-white">
              {categories[0].title}
            </h3>

            <p className="mt-2 text-white/80">
              {categories[0].subtitle}
            </p>
          </div>
        </div>

        <div className="grid gap-6 md:col-span-4">
          {categories.slice(1).map((item) => (
            <div
              key={item.title}
              className="
                group
                relative
                overflow-hidden
                rounded-3xl
              "
            >
              <img
                src={item.image}
                alt={item.title}
                className="
                  h-full
                  w-full
                  object-cover
                  transition
                  duration-700
                  group-hover:scale-105
                "
              />

              <div className="absolute inset-0 bg-black/25" />

              <div className="absolute bottom-6 left-6">
                <h3 className="text-2xl font-bold text-white">
                  {item.title}
                </h3>

                <p className="mt-1 text-sm text-white/80">
                  {item.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryGrid;