<<<<<<< HEAD
const SocialButton = ({ icon, text }) => {
  return (
    <button
      className="
        w-full
        border
        border-gray-200
        rounded-xl
        py-3
        px-4
        flex
        items-center
        justify-center
        gap-3
        hover:bg-gray-50
        transition-all
        duration-300
        font-medium
      "
    >
      <img src={icon} alt="social" className="w-5 h-5" />
      {text}
    </button>
  )
}

=======
const SocialButton = ({ icon, text }) => {
  return (
    <button
      className="
        w-full
        border
        border-gray-200
        rounded-xl
        py-3
        px-4
        flex
        items-center
        justify-center
        gap-3
        hover:bg-gray-50
        transition-all
        duration-300
        font-medium
      "
    >
      <img src={icon} alt="social" className="w-5 h-5" />
      {text}
    </button>
  )
}

>>>>>>> integration
export default SocialButton