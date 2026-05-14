const Footer = () => {
  return (
    <footer className="border-t border-gray-100 bg-white">
      <div
        className="
          mx-auto
          grid
          max-w-7xl
          gap-12
          px-6
          py-20
          md:grid-cols-4
        "
      >
        <div>
          <h2
            className="
              text-2xl
              font-bold
              text-[#6C63FF]
            "
          >
            LUXE
          </h2>

          <p className="mt-4 leading-7 text-gray-500">
            Redefining modern retail through intentional
            design and premium quality.
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-gray-900">
            Shop
          </h3>

          <ul className="mt-5 space-y-3 text-gray-500">
            <li>New Arrivals</li>
            <li>Collections</li>
            <li>Accessories</li>
            <li>Sale</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-gray-900">
            Company
          </h3>

          <ul className="mt-5 space-y-3 text-gray-500">
            <li>About</li>
            <li>Careers</li>
            <li>Privacy Policy</li>
            <li>Terms</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-gray-900">
            Newsletter
          </h3>

          <p className="mt-4 text-gray-500">
            Get updates about luxury collections.
          </p>

          <div className="mt-5 flex">
            <input
              type="email"
              placeholder="Email address"
              className="
                h-12
                w-full
                rounded-l-xl
                border
                border-gray-200
                px-4
                outline-none
              "
            />

            <button
              className="
                rounded-r-xl
                bg-[#6C63FF]
                px-6
                font-medium
                text-white
              "
            >
              Join
            </button>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-100 py-6">
        <p className="text-center text-sm text-gray-500">
          © 2026 LUXE Commerce. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;