const Navbar = () => {
  return (
    <div className="flex items-center justify-between px-6 pb-6 pt-8 border-b border-gray-800">
      <div className="text-2xl font-medium flex items-center gap-2">
        <img src="/code.svg" alt="Logo" className="bg-white rounded-md w-8 h-8" />
        <span className="text-3xl">DevCollab</span>
      </div>
      <div className="flex gap-3">
        <button className="hover:bg-blue-500 text-white px-4 py-2 rounded-md transition ease-in-out duration-200 cursor-pointer font-medium"><a href="/login">Login</a></button>
        <button className="bg-white text-[#343434] px-4 py-2 rounded-md hover:bg-gray-200 transition ease-in-out duration-200 cursor-pointer font-medium"><a href="/register">Sign Up</a></ button>
      </div>
    </div>
  )
}

export default Navbar