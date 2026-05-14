<<<<<<< HEAD
import {
  Globe,
  ShieldCheck,
  Truck,
} from "lucide-react";

const values = [
  {
    icon: Globe,
    title: "Ethical Sourcing",
    text:
      "We partner with artisans who share our commitment to sustainability.",
  },
  {
    icon: Truck,
    title: "Global Fulfillment",
    text:
      "Expedited carbon-neutral shipping available worldwide.",
  },
  {
    icon: ShieldCheck,
    title: "Lifetime Guarantee",
    text:
      "Every product is built to last with premium craftsmanship.",
  },
];

const ValuesSection = () => {
  return (
    <section className="bg-gray-50 py-24">
      <div
        className="
          mx-auto
          grid
          max-w-7xl
          gap-12
          px-6
          md:grid-cols-3
        "
      >
        {values.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className="text-center"
            >
              <div
                className="
                  mx-auto
                  flex
                  h-16
                  w-16
                  items-center
                  justify-center
                  rounded-2xl
                  bg-[#6C63FF]/10
                  text-[#6C63FF]
                "
              >
                <Icon size={30} />
              </div>

              <h3
                className="
                  mt-6
                  text-2xl
                  font-semibold
                  text-gray-900
                "
              >
                {item.title}
              </h3>

              <p
                className="
                  mt-3
                  leading-7
                  text-gray-500
                "
              >
                {item.text}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

=======
import {
  Globe,
  ShieldCheck,
  Truck,
} from "lucide-react";

const values = [
  {
    icon: Globe,
    title: "Ethical Sourcing",
    text:
      "We partner with artisans who share our commitment to sustainability.",
  },
  {
    icon: Truck,
    title: "Global Fulfillment",
    text:
      "Expedited carbon-neutral shipping available worldwide.",
  },
  {
    icon: ShieldCheck,
    title: "Lifetime Guarantee",
    text:
      "Every product is built to last with premium craftsmanship.",
  },
];

const ValuesSection = () => {
  return (
    <section className="bg-gray-50 py-24">
      <div
        className="
          mx-auto
          grid
          max-w-7xl
          gap-12
          px-6
          md:grid-cols-3
        "
      >
        {values.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className="text-center"
            >
              <div
                className="
                  mx-auto
                  flex
                  h-16
                  w-16
                  items-center
                  justify-center
                  rounded-2xl
                  bg-[#6C63FF]/10
                  text-[#6C63FF]
                "
              >
                <Icon size={30} />
              </div>

              <h3
                className="
                  mt-6
                  text-2xl
                  font-semibold
                  text-gray-900
                "
              >
                {item.title}
              </h3>

              <p
                className="
                  mt-3
                  leading-7
                  text-gray-500
                "
              >
                {item.text}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

>>>>>>> integration
export default ValuesSection;