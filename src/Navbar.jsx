import { useEffect } from "react"

const Navbar = () => {
   useEffect(() => {
      fetch('localhost:')
   },[])
    return (
        <div className="flex nav md:flex w-full justify-between p-6 px-32 z-0">
        <div className="logo">
          <p className="app__name -ml-28 md:-ml-11 text-black font-bold text-2xl -mt-2 ">
         OpenAPI
          </p>
        </div>
    
        <div className="link absolute right-4 ">
        {/* <FaEllipsisH className="md:hidden" onClick={()=> {}} />  */}
          <ul className="nav__link hidden md:flex gap-10 mt-1 -ml-50 font-bold ">
            
            <li><a href="#">Home</a></li>
            <li><a href="#services">How To</a></li>
            <li><a href="#services">Documentation</a></li>
            <li><a href="#services">Github</a></li>
              </ul>
          </div>
        </div> 
    
        )
}
export default Navbar