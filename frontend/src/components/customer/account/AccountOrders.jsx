const orders = [
  {
    id: "#ORD-1024",
    date: "12 May 2026",
    status: "Delivered",
    total: "$450",
  },

  {
    id: "#ORD-1025",
    date: "15 May 2026",
    status: "Processing",
    total: "$890",
  },
];

const AccountOrders = () => {
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
          Recent Orders
        </h2>

        <button className="text-[#6C63FF]">
          View All
        </button>
      </div>

      <div className="space-y-4">
        {orders.map((order) => (
          <div
            key={order.id}
            className="
              flex
              flex-col
              gap-4
              rounded-2xl
              border
              border-gray-100
              p-5
              md:flex-row
              md:items-center
              md:justify-between
            "
          >
            <div>
              <h3 className="font-semibold">
                {order.id}
              </h3>

              <p className="text-gray-500">
                {order.date}
              </p>
            </div>

            <div>
              <span
                className="
                  rounded-full
                  bg-[#6C63FF]/10
                  px-4
                  py-2
                  text-sm
                  font-medium
                  text-[#6C63FF]
                "
              >
                {order.status}
              </span>
            </div>

            <h3
              className="
                text-lg
                font-bold
              "
            >
              {order.total}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AccountOrders;