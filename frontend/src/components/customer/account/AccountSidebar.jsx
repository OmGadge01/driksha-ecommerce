const links = ["Profile", "Orders", "Wishlist", "Addresses", "Security"];

const AccountSidebar = () => {
  return (
    <div className="rounded-3xl border border-gray-200 bg-white p-6">
      <div className="mb-8">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-2xl font-semibold text-white">
          O
        </div>
        <h3 className="mt-4 text-xl font-semibold">Om</h3>
        <p className="text-gray-500">Premium Member</p>
      </div>

      <div className="space-y-2">
        {links.map((item, index) => (
          <button
            key={item}
            className={`flex w-full items-center rounded-2xl px-4 py-3 text-left transition-all ${
              index === 0 ? "bg-primary text-white" : "text-gray-600 hover:bg-primary-light hover:text-primary"
            }`}
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
};

export default AccountSidebar;
