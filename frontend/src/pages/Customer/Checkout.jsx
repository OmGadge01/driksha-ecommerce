import MainLayout from "../../components/layout/MainLayout";

import { useCheckout } from "../../context/CheckoutContext";

const Checkout = () => {
  const {
    checkoutItems,
    subtotal,
    shipping,
    tax,
    total,
  } = useCheckout();

  return (
    <MainLayout>
      <div className="mx-auto max-w-7xl px-6 py-12">
        
        <h1
          className="
            mb-12
            text-5xl
            font-bold
            text-gray-900
          "
        >
          Checkout
        </h1>

        <div className="grid gap-12 lg:grid-cols-12">
          
          <div className="lg:col-span-7">
            
            <div
              className="
                rounded-3xl
                border
                border-gray-100
                p-8
              "
            >
              <h2
                className="
                  mb-8
                  text-2xl
                  font-bold
                "
              >
                Shipping Details
              </h2>

              <div className="grid gap-6 md:grid-cols-2">
                
                <input
                  type="text"
                  placeholder="First Name"
                  className="h-14 rounded-2xl border border-gray-200 px-5 outline-none focus:border-[#6C63FF]"
                />

                <input
                  type="text"
                  placeholder="Last Name"
                  className="h-14 rounded-2xl border border-gray-200 px-5 outline-none focus:border-[#6C63FF]"
                />

                <input
                  type="email"
                  placeholder="Email Address"
                  className="h-14 rounded-2xl border border-gray-200 px-5 outline-none focus:border-[#6C63FF] md:col-span-2"
                />

                <input
                  type="text"
                  placeholder="Address"
                  className="h-14 rounded-2xl border border-gray-200 px-5 outline-none focus:border-[#6C63FF] md:col-span-2"
                />

                <input
                  type="text"
                  placeholder="City"
                  className="h-14 rounded-2xl border border-gray-200 px-5 outline-none focus:border-[#6C63FF]"
                />

                <input
                  type="text"
                  placeholder="Postal Code"
                  className="h-14 rounded-2xl border border-gray-200 px-5 outline-none focus:border-[#6C63FF]"
                />
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            
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
                  mb-8
                  text-2xl
                  font-bold
                "
              >
                Order Summary
              </h2>

              <div className="space-y-5">
                {checkoutItems.map((item) => (
                  <div
                    key={item.id}
                    className="
                      flex
                      items-center
                      gap-4
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

                    <div className="flex-1">
                      <h3 className="font-semibold">
                        {item.name}
                      </h3>

                      <p className="text-sm text-gray-500">
                        Qty: {item.quantity}
                      </p>
                    </div>

                    <p className="font-semibold">
                      {item.price}
                    </p>
                  </div>
                ))}
              </div>

              <div
                className="
                  mt-8
                  space-y-4
                  border-t
                  border-gray-100
                  pt-6
                "
              >
                <div className="flex justify-between">
                  <span>Subtotal</span>

                  <span>${subtotal}</span>
                </div>

                <div className="flex justify-between">
                  <span>Shipping</span>

                  <span>
                    {shipping === 0
                      ? "Free"
                      : `$${shipping}`}
                  </span>
                </div>

                <div className="flex justify-between">
                  <span>Tax</span>

                  <span>
                    ${tax.toFixed(2)}
                  </span>
                </div>

                <div
                  className="
                    flex
                    justify-between
                    border-t
                    border-gray-100
                    pt-5
                    text-xl
                    font-bold
                  "
                >
                  <span>Total</span>

                  <span>${total.toFixed(2)}</span>
                </div>
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
                Place Order
              </button>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Checkout;