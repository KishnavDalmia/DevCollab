const DashNav = () => {
  return (
    <div className="flex items-center justify-between pb-3 pt-6 border-b border-neutral-800">
      <div className="font-medium flex items-center gap-2">
        <img src="/code.svg" alt="Logo" className="bg-white rounded-md w-6 h-6" />
        <span className="text-xl text-white">DevCollab</span>
      </div>
      <input name="searchInput" id="" placeholder="Search your workspaces" className="w-100 h-10 bg-neutral-800 text-white rounded-md px-6 py-auto"/>
      <div className="flex gap-3">
        <button className="px-4 py-2 rounded-md cursor-pointer font-medium">
          <img src="/logout.svg" alt="Logout Icon" className="w-6 h-6" />
        </button>
      </div>
    </div>
  )
}

export default DashNav