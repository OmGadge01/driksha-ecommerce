import MainLayout from "../../components/customer/layout/MainLayout";

import Footer from "../../components/customer/layout/Footer";

import AccountSidebar from "../../components/customer/account/AccountSidebar";

import AccountOverview from "../../components/customer/account/AccountOverview";

import AccountOrders from "../../components/customer/account/AccountOrders";

import AccountWishlistPreview from "../../components/customer/account/AccountWishlistPreview";

import AccountAddressCard from "../../components/customer/account/AccountAddressCard";

const Account = () => {
  return (
    <MainLayout>
      <div className="mx-auto max-w-7xl px-6 py-14">
        
        <div className="mb-12">
          <h1
            className="
              text-5xl
              font-bold
              tracking-tight
            "
          >
            My Account
          </h1>

          <p className="mt-4 text-gray-500">
            Manage your profile, orders,
            wishlist and addresses.
          </p>
        </div>

        <div
          className="
            grid
            gap-10
            lg:grid-cols-12
          "
        >
          <div className="lg:col-span-3">
            <AccountSidebar />
          </div>

          <div
            className="
              space-y-8
              lg:col-span-9
            "
          >
            <AccountOverview />

            <AccountOrders />

            <AccountWishlistPreview />

            <AccountAddressCard />
          </div>
        </div>
      </div>

      <Footer />
    </MainLayout>
  );
};

export default Account;