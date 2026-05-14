import MainLayout from "../../components/layout/MainLayout";

import { useCart } from "../../context/CartContext";

const Cart = () => {
  const {
    cartItems,
    increaseQuantity,
    decreaseQuantity,
    totalPrice,
  } = useCart();

  return (
    <MainLayout>
      <div className="mx-auto max-w-7xl px-6 py-12">
        <h1
          className="
            mb-10
            text-5xl
            font-bold
            text-gray-900
          "
        >
          Shopping Cart
        </h1>

        {cartItems.length === 0 ? (
          <div
            className="
              flex
              min-h-[50vh]
              items-center
              justify-center
            "
          >
            <h2
              className="
                text-3xl
                font-semibold
                text-gray-400
              "
            >
              Your cart is empty
            </h2>
          </div>
        ) : (
          <div
            className="
              grid
              gap-12
              lg:grid-cols-12
            "
          >
            <div
              className="
                space-y-6
                lg:col-span-8
              "
            >
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="
                    flex
                    gap-6
                    rounded-3xl
                    border
                    border-gray-100
                    p-5
                  "
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="
                      h-36
                      w-32
                      rounded-2xl
                      object-cover
                    "
                  />

                  <div className="flex flex-1 flex-col">
                    <h2
                      className="
                        text-2xl
                        font-semibold
                      "
                    >
                      {item.name}
                    </h2>

                    <p className="mt-2 text-gray-500">
                      {item.category}
                    </p>

                    <p
                      className="
                        mt-4
                        text-xl
                        font-bold
                        text-[#6C63FF]
                      "
                    >
                      {item.price}
                    </p>

                    <div
                      className="
                        mt-auto
                        flex
                        items-center
                        gap-4
                      "
                    >
                      <button
                        onClick={() =>
                          decreaseQuantity(
                            item.id
                          )
                        }
                        className="
                          h-10
                          w-10
                          rounded-xl
                          border
                        "
                      >
                        -
                      </button>

                      <span className="font-medium">
                        {item.quantity}
                      </span>

                      <button
                        onClick={() =>
                          increaseQuantity(
                            item.id
                          )
                        }
                        className="
                          h-10
                          w-10
                          rounded-xl
                          border
                        "
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="lg:col-span-4">
              <div
                className="
                  sticky
                  top-28
                  rounded-3xl
                  border
                  border-gray-100
                  p-8
                "
              >
                <h2
                  className="
                    text-2xl
                    font-bold
                  "
                >
                  Order Summary
                </h2>

                <div
                  className="
                    mt-8
                    flex
                    items-center
                    justify-between
                  "
                >
                  <span className="text-gray-500">
                    Total
                  </span>

                  <span
                    className="
                      text-3xl
                      font-bold
                      text-[#6C63FF]
                    "
                  >
                    ${totalPrice}
                  </span>
                </div>

                <button
                  className="
                    mt-8
                    h-14
                    w-full
                    rounded-2xl
                    bg-[#6C63FF]
                    text-lg
                    font-semibold
                    text-white
                  "
                >
                  Checkout
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </MainLayout>
  );
};

export default Cart;