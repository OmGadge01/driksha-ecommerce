import { useState } from "react";

const tabs = ["Description", "Specifications", "Reviews"];

const ProductTabs = ({ product }) => {
  const [activeTab, setActiveTab] = useState("Description");

  return (
    <div className="mt-24">
      <div className="flex gap-10 border-b border-gray-200">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`relative pb-5 text-sm font-medium ${activeTab === tab ? "text-primary" : "text-gray-500"}`}
          >
            {tab}
            {activeTab === tab && (
              <span className="absolute bottom-0 left-0 h-[2px] w-full bg-primary" />
            )}
          </button>
        ))}
      </div>

      <div className="pt-10">
        {activeTab === "Description" && (
          <div>
            <p className="max-w-4xl leading-8 text-gray-600">{product.description}</p>
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {product.features.map((feature) => (
                <div key={feature} className="rounded-2xl border border-gray-100 p-5">{feature}</div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "Specifications" && (
          <div className="overflow-hidden rounded-3xl border border-gray-100">
            {Object.entries(product.specifications).map(([key, value]) => (
              <div key={key} className="flex justify-between border-b border-gray-100 px-6 py-5 last:border-none">
                <span className="font-medium capitalize">{key}</span>
                <span className="text-gray-500">{value}</span>
              </div>
            ))}
          </div>
        )}

        {activeTab === "Reviews" && (
          <div className="space-y-6">
            {product.reviews.map((review) => (
              <div key={review.id} className="rounded-3xl border border-gray-100 p-6">
                <div className="flex items-center justify-between">
                  <h4 className="font-semibold">{review.name}</h4>
                  <span className="text-sm text-primary">{review.rating}/5</span>
                </div>
                <p className="mt-4 leading-7 text-gray-500">{review.comment}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductTabs;
