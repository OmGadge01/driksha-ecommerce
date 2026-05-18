import {
  Truck,
  RotateCcw,
  ShieldCheck,
} from "lucide-react";

const ProductShipping = ({
  shipping,
}) => {
  return (
    <div
      className="
        mt-10
        rounded-3xl
        border
        border-gray-100
        p-6
      "
    >
      <div className="space-y-6">
        
        <div className="flex gap-4">
          <Truck
            size={22}
            className="text-[#6C63FF]"
          />

          <div>
            <h4 className="font-semibold">
              Fast Delivery
            </h4>

            <p className="text-sm text-gray-500">
              {
                shipping.estimatedDelivery
              }
            </p>
          </div>
        </div>

        <div className="flex gap-4">
          <RotateCcw
            size={22}
            className="text-[#6C63FF]"
          />

          <div>
            <h4 className="font-semibold">
              Easy Returns
            </h4>

            <p className="text-sm text-gray-500">
              {shipping.returns}
            </p>
          </div>
        </div>

        <div className="flex gap-4">
          <ShieldCheck
            size={22}
            className="text-[#6C63FF]"
          />

          <div>
            <h4 className="font-semibold">
              Secure Checkout
            </h4>

            <p className="text-sm text-gray-500">
              SSL encrypted payment
              protection.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductShipping;