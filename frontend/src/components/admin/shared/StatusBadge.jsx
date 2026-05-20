const STATUS_STYLES = {
  Delivered:  "bg-green-100 text-green-600",
  Processing: "bg-purple-100 text-purple-600",
  Pending:    "bg-orange-100 text-orange-600",
  Cancelled:  "bg-red-100 text-red-600",
};

export default function StatusBadge({ status }) {
  const style = STATUS_STYLES[status] || "bg-gray-100 text-gray-500";

  return (
    <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${style}`}>
      {status}
    </span>
  );
}