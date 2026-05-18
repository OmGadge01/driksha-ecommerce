const AccountAddressCard = () => {
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
          Default Address
        </h2>

        <button className="text-[#6C63FF]">
          Edit
        </button>
      </div>

      <div className="space-y-3 text-gray-600">
        <p>Om Sharma</p>

        <p>221B Baker Street</p>

        <p>London, United Kingdom</p>

        <p>+44 123 456 789</p>
      </div>
    </div>
  );
};

export default AccountAddressCard;