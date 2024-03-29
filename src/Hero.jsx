import image from './pro2.jpg'
const Hero = () => {

return (
    <div className="hero">
<div className="md:flex flex-row">
  <div className="app__details md:p-20">
      <p className="app__title w-full px-4 text-4xl ml-3 md:text-5xl md:w-3/4">
       OpenAPI 
      </p>
      <p className="app__subtitle ml-4 px-4 py-1 md:w-2/3 font-bold text-3xl  mt-3">
        Before You Create A Real Backend, use OpenAPI to build up your prototype
         </p>
  </div>
  <div className="hero__image">
   <img  src={image} className=" md:absolute right-0 mt-2 w-1/2  h-2/3 object-cover" alt={image}  />
   
  </div>
  </div>
  <div className="more flex flex-col mb-10">
    <p className='font-semibold text-center mt-32 mb-3 text-3xl font-[Gabriola]'>Wanna Build Visual Appealing Protoype With No Backend???</p>
    <p className="text-center px-52 font-[Mulish] text-[1em] font-light">
      Creating A Real Backend takes a lot of time but you don't have to wait before building a real backend. OpenAPI supports a large set of data for your prototype and fakes a real backend.
    </p>
  </div>
  
  <div className="example__code py-10 px-16">
    <p className="title font-extrabold font-[Nunito] text-2xl text-[#512bd4] ml-[10em]
    mb-[1em]">Example Code</p>
    <div className="code__container bg-[#333] text-white p-15 w-3/5 ml-[15em] rounded-md ">
    <p  className=' code font-[] py-10 px-40 font-xl font-normal '>
        fetch('https://openapi.com/products/1')
            .then(res=>res.json( )
            )
            .then(json=>console.log(json)
            ) 
            </p>
    </div>
     <button className='bg-[#512bd4] text-white rounded-xl p-3 mt-6 ml-[15em]'>Copy Code</button>
  </div>

  <div className="resources mb-[2em]">
    <p className="title font-extrabold font-[Nunito] text-2xl text-[#512bd4] ml-[12em]
    mb-[1em]">Resources</p>
    <p className=" font-extralight font-[Nunito] text-[1em]  ml-[18em]
    mb-[1em]">List of all resources that you can access in our REST API </p>
    <div className="resource__list flex flex-row ml-[9em]">
        <p className="route font-extrabold font-[Nunito] text-[1em] text-[#512bd4] ml-[11em]
    mb-[1em]">/products</p>
        <p class=
        "font-extrabold font-[Nunito] text-[1em] text-[#000] ml-[11em]"> 100 Products</p>
    </div> 
    <div className="resource__list flex flex-row ml-[9em]">
        <p className="route font-extrabold font-[Nunito] text-[1em] text-[#512bd4] ml-[11em]
    mb-[1em]">/products</p>
        <p class=
        "font-extrabold font-[Nunito] text-[1em] text-[#000] ml-[11em]"> 100 Products</p>
    </div> 
    <div className="resource__list flex flex-row ml-[9em]">
        <p className="route font-extrabold font-[Nunito] text-[1em] text-[#512bd4] ml-[11em]
    mb-[1em]">/products</p>
        <p class=
        "font-extrabold font-[Nunito] text-[1em] text-[#000] ml-[11em]"> 100 Products</p>
    </div> 
    <div className="resource__list flex flex-row ml-[9em]">
        <p className="route font-extrabold font-[Nunito] text-[1em] text-[#512bd4] ml-[11em]
    mb-[1em]">/products</p>
        <p class=
        "font-extrabold font-[Nunito] text-[1em] text-[#000] ml-[11em]"> 100 Products</p>
    </div> 
    
    <div className="resource__list flex flex-row ml-[9em]">
        <p className="route font-extrabold font-[Nunito] text-[1em] text-[#512bd4] ml-[11em]
    mb-[1em]">/products</p>
        <p class=
        "font-extrabold font-[Nunito] text-[1em] text-[#000] ml-[11em]"> 100 Products</p>
    </div> 
  </div>

  <div className="routes">
    <p className="title font-extrabold font-[Nunito] text-2xl text-[#512bd4] ml-[12em]
    mb-[1em]">Routes</p>
    <p className=" font-extralight font-[Nunito] text-[1em]  ml-[18em]
    mb-[1em]">List of Http Methods our API supports </p>
    <div className="resource__list flex flex-row ml-[9em]">
        <p className="route font-extrabold font-[Nunito] text-[1em] text-[#512bd4] ml-[11em]
    mb-[1em]">GET</p>
        <p class=
        "font-extrabold font-[Nunito] text-[1em] text-[#508cb9] ml-[11em]">/products</p>
    </div> 
    <div className="resource__list flex flex-row ml-[9em]">
        <p className="route font-extrabold font-[Nunito] text-[1em] text-[#512bd4] ml-[11em]
    mb-[1em]">GET</p>
        <p class=
        "font-extrabold font-[Nunito] text-[1em] text-[#508cb9] ml-[11em]">/products</p>
    </div> 
    <div className="resource__list flex flex-row ml-[9em]">
        <p className="route font-extrabold font-[Nunito] text-[1em] text-[#512bd4] ml-[11em]
    mb-[1em]">GET</p>
        <p class=
        "font-extrabold font-[Nunito] text-[1em] text-[#508cb9] ml-[11em]">/products</p>
    </div> 
    <div className="resource__list flex flex-row ml-[9em]">
        <p className="route font-extrabold font-[Nunito] text-[1em] text-[#512bd4] ml-[11em]
    mb-[1em]">GET</p>
        <p class=
        "font-extrabold font-[Nunito] text-[1em] text-[#508cb9] ml-[11em]">/products</p>
    </div> 
    
    <div className="resource__list flex flex-row ml-[9em]">
        <p className="route font-extrabold font-[Nunito] text-[1em] text-[#512bd4] ml-[11em]
    mb-[1em]">GET</p>
        <p class=
        "font-extrabold font-[Nunito] text-[1em] text-[#508cb9] ml-[11em]">/products</p>
    </div> 
  </div>
</div>
);
}
export default Hero