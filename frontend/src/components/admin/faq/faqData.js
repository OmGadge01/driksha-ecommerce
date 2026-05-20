export const CATEGORIES = ["General", "Shipping", "Returns", "Orders", "Payments", "Account"];

export const INITIAL_FAQS = [
  {
    id: 1,
    question: "How long does delivery take?",
    answer: "Standard delivery takes 3–5 business days. Express delivery is available at checkout for 1–2 business days.",
    category: "Shipping",
    active: true,
  },
  {
    id: 2,
    question: "What is your return policy?",
    answer: "You can return any item within 7 days of delivery. The product must be unused and in its original packaging.",
    category: "Returns",
    active: true,
  },
  {
    id: 3,
    question: "How can I track my order?",
    answer: "Once your order is shipped, you will receive a tracking link via email and SMS. You can also track it from your account dashboard.",
    category: "Orders",
    active: true,
  },
  {
    id: 4,
    question: "Do you offer Cash on Delivery?",
    answer: "Yes, COD is available for orders below ₹5000. COD charges of ₹49 apply.",
    category: "Payments",
    active: false,
  },
  {
    id: 5,
    question: "Can I change my order after placing it?",
    answer: "Orders can be modified within 1 hour of placing. After that, the order enters processing and cannot be changed.",
    category: "Orders",
    active: true,
  },
];

export const EMPTY_FAQ = {
  id: null,
  question: "",
  answer: "",
  category: "General",
  active: true,
};