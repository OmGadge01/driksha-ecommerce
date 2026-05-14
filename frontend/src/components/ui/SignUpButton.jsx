// components/ui/Button.jsx

const Button = ({
  children,
  type = 'button',
  fullWidth = true,
  onClick,
  disabled = false,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className="
        w-full
        h-10
        rounded-xl
        bg-[#6C63FF]
        text-white
        text-sm
        font-medium
        hover:bg-[#5b52f5]
        transition-all
        "
    >
      {children}
    </button>
  )
}

export default Button