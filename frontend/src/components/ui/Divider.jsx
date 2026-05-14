const Divider = ({ text = 'OR CONTINUE WITH' }) => {
  return (
    <div className="flex items-center gap-4 my-6">
      <div className="flex-1 h-[1px] bg-gray-200"></div>

      <span className="text-sm text-gray-400 font-medium">
        {text}
      </span>

      <div className="flex-1 h-[1px] bg-gray-200"></div>
    </div>
  )
}

export default Divider