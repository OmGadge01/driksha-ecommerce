import { useWishlist } from "../../../context/WishlistContext";

const AccountWishlistPreview = () => {
  const { wishlistItems } =
    useWishlist();

  return (
    <div
      className="
        rounded-3xl
        border
        border-gray-200
        bg-white
        p-8
      "
    >
      <div
        className="
          mb-8
          flex
          items-center
          justify-between
        "
      >
        <h2
          className="
            text-2xl
            font-bold
          "
        >
          Wishlist
        </h2>

        <p className="text-gray-500">
          {wishlistItems.length} saved items
        </p>
      </div>

      <div
        className="
          grid
          gap-6
          sm:grid-cols-2
        "
      >
        {wishlistItems
          .slice(0, 2)
          .map((item) => (
            <div
              key={item.id}
              className="
                flex
                items-center
                gap-4
                rounded-2xl
                border
                border-gray-100
                p-4
              "
            >
              <img
                src={item.image}
                alt={item.name}
                className="
                  h-20
                  w-20
                  rounded-2xl
                  object-cover
                "
              />

              <div>
                <h3 className="font-semibold">
                  {item.name}
                </h3>

                <p className="text-[#6C63FF]">
                  {item.price}
                </p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default AccountWishlistPreview;