import React, { useState } from 'react';
import logo from './assets/logo.png';
import FooterLogo from './assets/FooterLogo.png';
import heroSideBar from './assets/HeroSideBar.png';
import heroPizza from './assets/HeroPizza.png';
import aboutImage from './assets/AboutImage.png'
import ArticlePage1 from './components/ArticlePage1';
import ArticlePage2 from './components/ArticlePage2';


function App() {
     const pages = [{ content: <ArticlePage1 /> }, { content: <ArticlePage2 /> }];
     const [currentPageIndex, setCurrentPageIndex] = useState(0);
     function handlePrevious() {
          if (currentPageIndex > 0) {
               setCurrentPageIndex(currentPageIndex - 1);
          }
     }

     function handleNext() {
          if (currentPageIndex < pages.length - 1) {
               setCurrentPageIndex(currentPageIndex + 1);
          }
     }
     const currentPage = pages[currentPageIndex];
     return (
          <>
               <section className='flex flex-col-reverse md:flex-row md:h-screen mb-[68px] md:mb-48'>
                    <div className='flex flex-col md:pl-[100px] text-left md:w-1/2'>
                         <img src={logo} alt="Logo" width={70} className="hidden md:block pt-6" />
                         <h1 className='text-[38px] md:text-[62px] pt-[75px] md:pt-[111px] pl-16 pr-16 md:pl-0 md:pr-[250px] pb-0 font-sourceSansPro font-bold leading-[46px] md:leading-[69px] text-[#0E2368] text-center md:text-left'>Discover the <span className='text-[#E23744]'>Best</span> Food and Drinks</h1>
                         <span className='text-[11px] md:text-[16.4447px] pt-[21px] md:pt-[27px] pr-[63px] pl-[63px] md:pl-0 md:pr-[290px] font-openSans font-normal text-center md:text-left'>Naturally made Healthcare Products for the better care & support of your body.</span>
                         <button type="" className='bg-[#E23744] h-[40px] md:h-[63px] w-[120px] md:w-[190px] rounded-[34px] text-[12.2664px] md:text-[18px] leading-[36px] text-white mt-[28px] md:mt-[55px] font-openSans font-bold mx-auto md:mx-0'>Explore Now</button>
                    </div>
                    <div className=''>
                         <button type="" className='absolute flex justify-center items-center bg-transparent border-white border text-white z-10 w-[88px] md:w-[133px] h-[31px] md:h-[36px] text-[10px] md:text-[16px] font-sourceSansPro leading-[36px] font-semibold rounded-[34px] px-4 right-6 md:right-[52.5px] top-[18px] md:top-[35px] py-auto'>Get In Touch</button>
                         <img src={heroPizza} alt="" className='m-0 absolute md:-right-3 top-1 -z-10' />
                         <img src={heroSideBar} alt="" className='m-0 md:absolute right-0 -top-2 -z-10' />

                    </div>
               </section>
               <section className='aboutus flex md:my-48'>
                    <div className='hidden md:block w-1/2 pl-6'>
                         <img src={aboutImage} alt="" className='mx-auto ' />
                    </div>
                    <div className='md:w-1/2 h-fit md:my-auto my-[140px]  md:pl-[90px]'>
                         <h2 className='font-poppins text-[26px] md:text-[45px] text-[#0E2368] pb-[20px] text-center md:text-left'>About Us</h2>
                         <p className='pl-[50px] md:pl-0 pr-[50px] md:pr-[204px] font-openSans text-[#444957] font-normal text-center md:text-left text-[11px] md:text-base'>
                              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                              when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                              It has survived not only five centuries.
                         </p>
                         <button type="" className='flex items-center justify-center bg-[#E23744] h-[25px] md:h-[42px] w-[96px] md:w-[132px] rounded-[21px] text-[11px] md:text-[16px] leading-[46px] md:leading-[36px] text-white mt-[21px] font-openSans md:font-semibold mx-auto md:mx-0'>Read More</button>
                    </div>
               </section>
               <section className=' md:px-[108px] pt-[132px] md:pt-0 pb-16'>
                    <h1 className='font-sourceSansPro font-semibold text-[28px] md:text-[56px] leading-[54px] md:leading-[42px] text-[#0E2368] text-center md:text-left'>Latest Articles</h1>
                    {currentPage.content}
                    <div className='flex items-center justify-center text-center'>
                         <button onClick={handlePrevious} disabled={currentPageIndex === 0} className="border border-[#424961] w-7 h-7 rounded text-2xl leading-[0px] py-0 items-center">{`<`}</button>
                         <span className='mx-2'>{currentPageIndex + 1}/2</span>
                         <button onClick={handleNext} disabled={currentPageIndex === pages.length - 1} className="border border-[#424961] w-7 h-7 rounded text-2xl leading-[0px] py-0">{`>`}</button>
                    </div>
               </section>
               <footer className='bg-[#F8F8F8] '>
                    <div className='flex flex-col md:flex-row items-center md:h-[362px] pt-[52px] md:pt-0 pb-[107px] md:pb-0'>
                         <div className='md:w-1/4 text-center'>
                              <img src={FooterLogo} alt="" className='mx-auto w-[75px] md:w-[161px] pb-[42px] md:pb-0 cursor-pointer' />
                         </div>
                         <div className='flex flex-col md:flex-row w-3/4 justify-around md:pl-12 md:pr-20'>
                              <div className='flex flex-col md:w-1/3'>
                                   <span className='font-sourceSansPro font-semibold text-[15.77] md:text-[18.8px] leading-[34.8px] md:leading-[27px] pb-3 text-[#0E2368]'>Contact Us</span>
                                   <p className='md:w-2/3 text-[8.76px] md:text-base leading-[12.27px] md:leading-normal'>Lorem Ipsum Pvt Ltd.5/1, Magalton Road, Phartosh Gate near YTM Market, XYZ-343434</p>
                                   <span className='text-[8.76px] md:text-base leading-[29.45px] md:leading-normal md:py-4'>example2020@gmail.com</span>
                                   <span className='text-[8.76px] md:text-base leading-[29.45px] md:leading-normal'>(904) 443-0343</span>
                              </div>
                              <div className='flex flex-col justify-center w-fit my-[28px] md:my-0'>
                                   <span className='font-sourceSansPro font-semibold text-[15.77px] md:text-[18.8px] leading-[34.8px] md:leading-[27px] text-[#0E2368]'>More</span>
                                   <ul className=''>
                                        <li className='font-openSans font-normal text-[8.76px] md:text-[14.65px] leading-[34.8px] md:leading-[36px] cursor-pointer'>About Us</li>
                                        <li className='font-openSans font-normal text-[8.76px] md:text-[14.65px] leading-[34.8px] md:leading-[36px] cursor-pointer'>Products</li>
                                        <li className='font-openSans font-normal text-[8.76px] md:text-[14.65px] leading-[34.8px] md:leading-[36px] cursor-pointer'>Career</li>
                                        <li className='font-openSans font-normal text-[8.76px] md:text-[14.65px] leading-[34.8px] md:leading-[36px] cursor-pointer'>Contact Us</li>
                                   </ul>
                              </div>
                              <div className='flex flex-col-reverse md:flex-col justify-between md:text-right text-center mx-auto md:mx-0'>
                                   <div className='flex flex-col justify-center md:justify-end text-center md:text-left mx-auto md:mx-0'>
                                        <span className='hidden md:block font-sourceSansPro font-semibold text-[18.8px] leading-[27px] pb-3 pr-8 text-[#0E2368] text-right'>Social Links</span>
                                        <div className='flex justify-end gap-7 text-2xl text-[#0E2368]'>
                                             <i class='bx bxl-instagram  cursor-pointer'></i>
                                             <i class='bx bxl-twitter  cursor-pointer'></i>
                                             <i class='bx bxl-facebook  cursor-pointer'></i>
                                        </div>
                                   </div>
                                   <span className='text-[8.76px] md:text-base leading-[32.13px] md:leading-normal '>© 2022 Food Truck Example</span>
                              </div>
                         </div>
                    </div>
               </footer>
          </>
     );
}

export default App;
