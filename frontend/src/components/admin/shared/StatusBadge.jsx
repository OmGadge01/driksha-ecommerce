const STATUS_STYLES = {
  Delivered:  "bg-success-light text-success",
  Processing: "bg-info-light text-info",
  Pending:    "bg-warning-light text-warning",
  Cancelled:  "bg-danger-light text-danger",
};

export default function StatusBadge({ status }) {
  const style = STATUS_STYLES[status] || "bg-gray-100 text-gray-500";

  return (
    <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${style}`}>
      {status}
    </span>
  );
}
