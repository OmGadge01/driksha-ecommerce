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
        bg-primary
        text-white
        text-sm
        font-medium
        hover:bg-primary-dark
        transition-all
        "
    >
      {children}
    </button>
  )
}

export default Button