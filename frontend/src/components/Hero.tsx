const Hero = () => {
  return (
    <div>
      <div className="min-w-screen pl-[10%] pt-40 pb-24 border-b border-gray-800">
        <h1 className="text-white text-7xl max-w-[65%] font-bold leading-21 text-shadow-xl">The complete platform to build the web.</h1>
        <p className="text-neutral-500/70 text-xl mt-8 max-w-[60%]">
          Your team's toolkit to stop configuring and start innovating. Securely build, deploy, and scale the best web experiences with DevCollab.
        </p>
        <button className="bg-white text-[#343434] px-6 py-3 rounded-md hover:bg-gray-200 transition ease-in-out duration-200 cursor-pointer font-medium mt-12">Get Started</button>
        <button className="border border-white text-white px-6 py-3 rounded-md hover:bg-gray-800 transition ease-in-out duration-200 cursor-pointer font-medium mt-8 ml-4">View Features</button>
      </div>
      <div className="flex justify-center text-neutral-400 gap-24 py-8 text-[14px]">
        <div className="flex flex-col gap-2">
          <span>20 days</span>
          <span>saved on daily builds</span>
        </div>
        <div className="flex flex-col gap-2">
          <span>98%</span>
          <span>faster time to market.</span>
        </div>
        <div className="flex flex-col gap-2">
          <span>300%</span>
          <span>increase in SEO.</span>
        </div>
        <div className="flex flex-col gap-2">
          <span>6X</span>
          <span>faster to build + deploy</span>
        </div>
      </div>
    </div>
  )
}

export default Hero