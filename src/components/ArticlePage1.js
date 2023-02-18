import React from 'react'
import Article1 from '../assets/Article1.png'
import Article2 from '../assets/Article2.png'
import Article3 from '../assets/Article3.png'

const ArticlePage1 = () => {
     return (
          <>
               <div className='flex flex-col md:flex-row justify-center gap-10 py-[23px] md:py-16 mx-[52px] md:mx-0'>
                    <div className='border border-[#93A2D3] border-opacity-[0.38] rounded-[20px] p-7 md:w-[381px]'>
                         <img src={Article1} alt="" className='mx-auto' />
                         <h1 className='font-poppins text-[#0E2368] text-[16px] md:text-[21px] mt-[35px] text-center md:text-left'>Grilled  Tomatoes at Home</h1>
                         <p className='font-openSans text-[#444957] text-[12px] md:text-[15px] text-justify  mt-1.5 md:mt-[14px] px-[12px] md:px-0'>
                              PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...
                         </p>
                         <button type="" className='border border-[#424961] rounded-[21px] py-1 px-7 w-[118px] md:w-[131px] h-[26px] md:h-[42px] text-[11px] md:text-[14.5px] font-semibold flex items-center my-7 mx-auto md:mx-0'>Read More</button>
                    </div>
                    <div className='border border-[#93A2D3] border-opacity-[0.38] rounded-[20px] p-7 md:w-[381px]'>
                         <img src={Article2} alt="" />
                         <h1 className='font-poppins text-[#0E2368] text-[16px] md:text-[21px] mt-[35px] text-center md:text-left'>Snacks for Travel</h1>
                         <p className='font-openSans text-[#444957] text-[12px] md:text-[15px] text-justify  mt-1.5 md:mt-[14px] px-[12px] md:px-0'>
                              PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...
                         </p>
                         <button type="" className='border border-[#424961] rounded-[21px] py-1 px-7 w-[118px] md:w-[131px] h-[26px] md:h-[42px] text-[11px] md:text-[14.5px] font-semibold flex items-center my-7 mx-auto md:mx-0'>Read More</button>
                    </div>
                    <div className='border border-[#93A2D3] border-opacity-[0.38] rounded-[20px] p-7 md:w-[381px]'>
                         <img src={Article3} alt="" />
                         <h1 className='font-poppins text-[#0E2368] text-[16px] md:text-[21px] mt-[35px] text-center md:text-left'>Post-workout Recipes</h1>
                         <p className='font-openSans text-[#444957] text-[12px] md:text-[15px] text-justify  mt-1.5 md:mt-[14px] px-[12px] md:px-0'>PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...</p>
                         <button type="" className='border border-[#424961] rounded-[21px] py-1 px-7 w-[118px] md:w-[131px] h-[26px] md:h-[42px] text-[11px] md:text-[14.5px] font-semibold flex items-center my-7 mx-auto md:mx-0'>Read More</button>
                    </div>
               </div>
          </>
     )
}

export default ArticlePage1