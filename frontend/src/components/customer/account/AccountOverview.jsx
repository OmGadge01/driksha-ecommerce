const stats = [
  {
    label: "Orders",
    value: "24",
  },

  {
    label: "Wishlist",
    value: "12",
  },

  {
    label: "Reviews",
    value: "8",
  },
];

const AccountOverview = () => {
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
          flex
          flex-col
          gap-8
          md:flex-row
          md:items-center
          md:justify-between
        "
      >
        <div>
          <p
            className="
              text-sm
              uppercase
              tracking-[0.3em]
              text-[#6C63FF]
            "
          >
            Welcome Back
          </p>

          <h2
            className="
              mt-3
              text-4xl
              font-bold
              tracking-tight
            "
          >
            Om Sharma
          </h2>

          <p className="mt-4 text-gray-500">
            Manage your premium shopping
            experience and account activity.
          </p>
        </div>

        <div className="flex gap-4">
          {stats.map((item) => (
            <div
              key={item.label}
              className="
                rounded-2xl
                bg-gray-50
                px-6
                py-5
              "
            >
              <p className="text-sm text-gray-500">
                {item.label}
              </p>

              <h3
                className="
                  mt-2
                  text-3xl
                  font-bold
                "
              >
                {item.value}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AccountOverview;