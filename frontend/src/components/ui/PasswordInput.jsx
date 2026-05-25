import { useState } from 'react'
import { Eye, EyeOff } from 'lucide-react'

const PasswordInput = ({
  label,
  placeholder,
  value,
  onChange,
}) => {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <div className="flex flex-col gap-2 w-full">
      <label className="text-sm font-medium text-gray-700">
        {label}
      </label>

      <div className="relative">
        <input
          type={showPassword ? 'text' : 'password'}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className="
            w-full
            px-4
            py-2
            border
            border-gray-200
            rounded-xl
            outline-none
            transition-all
            duration-300
            focus:border-primary
            focus:ring-4
            focus:ring-primary/10
            bg-white
          "
        />

        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500"
        >
          {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
        </button>
      </div>
    </div>
  )
}

export default PasswordInput