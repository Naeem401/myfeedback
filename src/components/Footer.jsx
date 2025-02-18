

function Footer() {
  return (
   <div className="border-t-2">
     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-16 lg:gap-32 w-[50%] mx-auto mt-4">
        <div>
          <h2 className="font-extrabold text-xl text-[#1E1E1E]">About</h2>
          <div className="font-normal text-[14px] text-[#5E5E5E] mt-4">
            <h4 className="mb-2">About MyFeedback</h4>
            <h4>Investor Relations</h4>
          </div>
        </div>
        <div>
          <h2 className="font-extrabold text-xl text-[#1E1E1E]">MyFeedback</h2>
          <div className="font-normal text-[14px] text-[#5E5E5E] mt-4">
            <h4 className="mb-2">MyFeedback for business</h4>
            <h4 className="mb-2">Collections</h4>
            <h4 className="mb-2">Events</h4>
            <h4 className="mb-2">MyFeedback blog</h4>
            <h4 className="mb-2">Support</h4>
            <h4>Developers</h4>
          </div>
        </div>
        <div>
          <h2 className="font-extrabold text-xl text-[#1E1E1E]">Languages</h2>
            <h4 className="font-normal text-[14px] text-[#5E5E5E] mt-4">English</h4>
          <h2 className="font-extrabold text-xl text-[#1E1E1E]">Countries</h2>
            <h4 className="font-normal text-[14px] text-[#5E5E5E] mt-4">Singapour</h4>
          
        </div>
    </div>
    <p className="text-center p-10">Copyright Septembre 2023 myfeedback, designed by scott</p>
   </div>
  )
}

export default Footer