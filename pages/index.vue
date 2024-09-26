<template>
 <div class="home-hero px-[20px] md:px-20 pt-12 md:pt-6">
  <Navbar></Navbar>
  <div class="flex flex-col md:flex-row items-center justify-between ">
    
    <div class="w-2/3">
      <div class="hero-content-sm hero-content">
        <span >공정하고 투명한 건물 관리,</span>
        <br>
        
        <h1 class="highlighter-sm highlighter">대한건물관리협회</h1>
        <span>가 함께합니다.</span>
      </div>
        <div class="hero-text mt-[28px]">
          <p>대한건물관리협회는 건물 관리의 공정성과 투명성을 보장하기 위해 <br> 중재와 상담을 지원하는 <span class="font-bold"> 비영리 단체</span>입니다.</p>
        </div>
        <div class="mt-[40px] flex flex-col md:flex-row">
          <button class="primary-btn md:w-[180px] mr-4 mb-4 md:mb-0"><span class="mt-1">중재 요청하기</span><i class="pi pi-arrow-right mr-2 ml-2" style="color:white;"></i> </button>
          <button class="secondary-btn mr-4">더 알아보기</button>
        </div>
        <div class="mt-12 md:mt-28 flex mb-[-100px]">
          <div class="w-2/3  flex">
            <div class="mr-8">
            <h1 class="rating-h1-sm rating-h1">100+</h1>
            <p class=" primary-p-sm primary-p">회원 수</p>
           </div>
           <div class="mr-8">
            <h1 class="rating-h1-sm rating-h1">10+</h1>
            <p class="primary-p-sm primary-p">년 이상의 업계 경력</p>
           </div>
           <div class="">
            <h1 class="rating-h1-sm rating-h1">50+</h1>
            <p class="primary-p-sm primary-p">법적 사례 해결 건수</p>
           </div>

          </div>

        </div>
    </div>
    <div class="home-hero-img w-1/3 relative hidden  md:block">
      <div class="hero-bluebox">

      </div>
      <div class="hero-greenbox">

     </div>

    </div>
    <div class="relative block md:hidden">
      <img src="/public/images/hero-building.png" alt="" srcset="">
      <div class="hero-bluebox-sm">

      </div>
      <div class="hero-greenbox-sm">

     </div>

    </div>

  </div>
 </div>
  
  <div class="building-management flex flex-col md:flex-row justify-between p-4 md:p-8 px-[20px] md:px-20 pb-24 pt-24">
    <div class="md:w-1/3 pt-[65px]">
      <h1 class="building-management-headline-sm building-management-headline">
       <span class="text-[#C4E50F]">왜</span> 건물 관리는 <br> 항상 그렇게 복잡하고 <br> 어려운 걸까요?
      </h1>
      <p class="building-management-text pb-[80px]"><span class="mr-2"> *</span> “이러한 문제들로 인해 관리자의 업무 부담이 늘어나고, <br> 건물의 가치가 저하될 수 있습니다.”</p>

    </div>

    <div class="mt-16">
      <Accordion value="0" expandIcon="pi pi-plus" collapseIcon="pi pi-minus" class="mb-4">
        <AccordionPanel value="0">
            <AccordionHeader class="accordian-header flex p-6 items-center">
               <p class="accordian-header-text font-bold">
                관리비의 불투명성
               </p>
            </AccordionHeader>
            <AccordionContent class="accordian-body">
                <p class="m-0 accordian-body-text px-1 pb-4">
                  관리비 산정 및 집행의 불투명성은 입주자와 관리주체 간의 신뢰를 저해합니다. 명확한 공시와 투명한 회계처리가 부족하면 이해관계자 간의 불신과 분쟁을 유발할 수 있습니다.
                </p>
            </AccordionContent>
        </AccordionPanel>
      </Accordion>
      <Accordion value="1" expandIcon="pi pi-plus" collapseIcon="pi pi-minus" class="mb-4">
        <AccordionPanel value="1">
            <AccordionHeader class="accordian-header flex p-6 items-center" style="border-radius: 8px !important;">
               <p class="accordian-header-text font-bold">
                공실 관리 기준의 혼란
               </p>
            </AccordionHeader>
            <AccordionContent class="accordian-body">
                <p class="m-0 accordian-body-text px-8 pb-4">
                  관리비 산정 및 집행의 불투명성은 입주자와 관리주체 간의 신뢰를 저해합니다. 명확한 공시와 투명한 회계처리가 부족하면 이해관계자 간의 불신과 분쟁을 유발할 수 있습니다.
                </p>
            </AccordionContent>
        </AccordionPanel>
      </Accordion>
      <Accordion value="2" expandIcon="pi pi-plus" collapseIcon="pi pi-minus" class="mb-4">
        <AccordionPanel value="2">
            <AccordionHeader class="accordian-header flex p-6 items-center" style="border-radius: 8px !important;">
               <p class="accordian-header-text font-bold">
                법적 분쟁의 악순환
               </p>
            </AccordionHeader>
            <AccordionContent class="accordian-body">
                <p class="m-0 accordian-body-text px-8 pb-4">
                  관리비 산정 및 집행의 불투명성은 입주자와 관리주체 간의 신뢰를 저해합니다. 명확한 공시와 투명한 회계처리가 부족하면 이해관계자 간의 불신과 분쟁을 유발할 수 있습니다.
                </p>
            </AccordionContent>
        </AccordionPanel>
      </Accordion>

    </div>

  </div>
  <div class="transparency-section flex flex-col md:flex-row justify-between items-center p-4 md:p-8 px-[20px] md:px-20 pb-12 md:pb-24 pt-24">
    <div class="md:w-1/2 pt-16">
      <img class="h-[480px] w-[520px]" src="/public/images/Frame 1171277081.png" alt="" srcset="">
    </div>
    <div class="md:w-1/2 md:ml-0 mt-16">
      <h1 class="transparency-section-heading">가장 큰 문제는 <br> <span class="highlighter-2">투명성과 공정성 </span> 의 부재입니다.</h1>
      <p class="transparency-section-h2 pt-[28px]">많은 건물에서 공실 호수의 전기료가 면적기준으로 부과되는 것이 일반적입니다.</p>
      <p class="pt-[28px] primary-p">하지만 일부 빌딩에서는 이를 사용량 기준으로 변경하면서,공실 호수들은 전기료를 내지 않게 되어, <br> 나머지 점유 호수들이 그 비용을 부담하게 되는 불공정한 상황이 발생하고 있습니다. <br>
        이러한 불투명한 관리방식은 건물주와 관리 업체 간의 갈등을 심화시키고, <br> 결국 법적 분쟁으로까지 이어질 위험이 큽니다.</p>
      
      <p class="pt-[45px] transparency-section-h2-bold">“ 불투명한 관리에서 벗어나, 이제는 <span class="text-[#4182FF]">명확한 해답</span> 이 필요합니다. ”</p>
    </div>
  </div>
  <div class="standard-building-section relative flex flex-col md:flex-row justify-between pb-24 p-4 md:p-8 px-[20px] md:px-20 pt-8 md:pt-24">
     <div class="standard-building-content !mr-20">
      <div class="flex items-center">
        <div class="w-[64px] border-t border-[#000]"></div>
        <p class="primary-p ml-2">협 회 소개</p>
      </div>
  
      <h1 class="mt-6 mb-4 standard-building-h1">건물 관리의 <br> 새로운 표준을 제시합니다. </h1>

      <p class="mb-8 standard-building-p" >대한건물관리협회는 복잡한 건물 관리 문제를 해결하고, <br> 이해관계자 간의 원활한 소통을 이끌어내기 위해 설립되었습니다.</p>

      <p class="mb-8 standard-building-p">협회는 공정한 중재와 신뢰할 수 있는 상담을 통해, <br> 건물 관리가 투명하게 이루어지도록 지원합니다. <br> 모든 이해관계자에게 합당한 기준을 제공함으로써, <br> 공공의 이익을 도모하는 것을 목표로 합니다.</p>

      <button class="primary-btn w-full md:w-[175px] mr-4 !mb-[85px] font-bold">협회 가입신청<i class="pi pi-arrow-right ml-2" style="color:white;"></i> </button>

     </div>
     <div class="flex-1 standard-building-animation flex items-center relative justify-center">
        <div class="standard-building-animation-logo box-container ">
          <div class="animated-box">
            <svg class="animated-svg" xmlns="http://www.w3.org/2000/svg" width="81" height="81" viewBox="0 0 81 81" fill="none">
            <g filter="url(#filter0_i_4_872)">
              <rect width="81" height="81" rx="40.5" fill="#23282F"/>
              <path d="M28 57.9685V56.937L40.4632 56.9588L52.9263 56.9806L52.9507 57.9903L52.975 59H40.4875H28V57.9685ZM28 43.275V30.8155L29.0584 29.9437L30.1168 29.0719L30.139 42.2958C30.1512 49.5689 30.1427 55.568 30.1201 55.6271C30.0904 55.7048 29.7916 55.7345 29.0395 55.7345H28V43.275ZM31.5958 55.6012C31.5664 55.525 31.5436 49.2303 31.5451 41.6129C31.5473 30.8598 31.5714 27.7333 31.6531 27.6296C31.8103 27.4301 33.4967 26.1734 33.6073 26.1734C33.6769 26.1734 33.6969 30.1902 33.681 40.9325L33.6592 55.6916L32.6542 55.7157C31.795 55.7363 31.6416 55.7197 31.5958 55.6012ZM35.0848 40.316V24.8922L35.2991 24.6791C35.417 24.5618 35.9031 24.1521 36.3793 23.7685L37.2452 23.071L37.2234 39.3813L37.2016 55.6916L36.1432 55.7157L35.0848 55.7398V40.316ZM38.7136 39.3673V23L39.0808 23.1578C39.4228 23.3049 41.0929 24.2046 44.1999 25.9156C44.9127 26.3082 46.2541 27.0431 47.1807 27.5489C48.1074 28.0547 49.1766 28.6413 49.5567 28.8525C52.0712 30.2498 52.6841 30.5993 52.8183 30.7127C52.9608 30.8331 52.9695 31.4614 52.9695 41.6548C52.9695 47.6026 52.9375 52.4691 52.8984 52.4691C52.8184 52.4691 51.9546 51.5855 50.4207 49.9346C49.5026 48.9465 48.7053 48.091 48.1743 47.5244C48.0024 47.3409 46.2224 45.4545 45.058 44.2216C44.7221 43.8659 44.1777 43.2848 43.8484 42.9302C42.2145 41.1712 41.0093 39.9228 40.945 39.9228C40.9057 39.9228 40.8736 40.3244 40.8736 40.8153V41.7079L41.9305 42.8562C42.5119 43.4878 43.1242 44.1564 43.2913 44.342C43.4584 44.5276 43.6535 44.7422 43.7247 44.8189C43.796 44.8957 44.3013 45.4399 44.8475 46.0283C45.3938 46.6168 46.0578 47.3302 46.3231 47.6138C48.4951 49.9353 49.631 51.1453 50.155 51.6957C52.1549 53.7962 52.8995 54.6329 52.9603 54.8479C52.998 54.9811 53.0112 55.235 52.9897 55.4123L52.9506 55.7345H52.0711H51.1916L49.899 54.3462C49.188 53.5826 48.4077 52.7415 48.165 52.4771C47.7219 51.9944 45.4911 49.5857 45.3253 49.411C45.2766 49.3596 44.8479 48.896 44.3727 48.3806C43.6425 47.5887 42.3635 46.2396 41.1623 44.9943L40.8736 44.6949L40.8776 48.2168L40.8817 51.7386L42.7784 53.6609C43.8216 54.7182 44.6751 55.6173 44.6751 55.6589C44.6751 55.701 43.3533 55.7345 41.6944 55.7345H38.7136V39.3673ZM50.8095 39.454V31.863L50.3991 31.608C49.8312 31.2552 46.8393 29.5891 44.4591 28.3001C43.9364 28.017 43.2949 27.6603 43.0335 27.5073C42.7722 27.3544 42.1793 27.0277 41.716 26.7814L40.8736 26.3336V31.6803V37.0271L42.1912 38.3675C42.9159 39.1047 44.13 40.3653 44.8892 41.1688C48.2961 44.7742 50.642 47.1481 50.739 47.0885C50.7778 47.0646 50.8095 43.6291 50.8095 39.454Z" fill="white"/>
            </g>
            <defs>
              <filter id="filter0_i_4_872" x="0" y="0" width="91" height="91" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feOffset dx="10" dy="10"/>
                <feGaussianBlur stdDeviation="20"/>
                <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.2 0"/>
                <feBlend mode="normal" in2="shape" result="effect1_innerShadow_4_872"/>
              </filter>
            </defs>
          </svg>
          <!-- The moving comet element -->
          <div class="comet"></div>
          <div class="water-drop"></div>
          <div class="water-drop-2"></div>
        </div>
        </div>
        <div class="hidden md:block">
          <div class="transparency-box">
            <img class="mx-2" src="/public/images/file.svg" alt="" srcset="">
            <p class="animation-p">투명성</p>
          </div>
          <div class="fairness-box">
            <img class="mx-2" src="/public/images/law.svg" alt="" srcset="">
            <p class="animation-p">공정성</p>
          </div>
          <div class="reliability-box">
            <img class="mx-2" src="/public/images/setting.svg" alt="" srcset="">
            <p class="animation-p">신뢰성</p>
          </div>

        </div>
   
     </div>
  </div>
  <div class="fusion-of-law-section flex flex-col md:flex-row items-center justify-between">
    <div class="fusion-of-law-content relative md:w-1/2 py-12 md:py-36 px-[20px] md:px-20 pb-16 md:pb-48 bg-[#23282f] h-[510px]">
      <div class="flex items-center mb-8">
        <div class="w-[64px] border-t border-[#fff]"></div>
        <p class="primary-p-dark ml-2">차별화</p>
      </div>
      <h1 class="fusion-of-law-h1">법률과 기술의 융합, <br> 문제 해결의 새로운 패러다임.</h1>

      <div class="fusion-bluebox">

      </div>
      <div class="fusion-greenbox">

      </div>

    </div>
    <div class="fusion-of-law-content md:w-1/2 pb-4 md:pb-40 px-[20px] md:px-20 pt-12 md:pt-40 bg-[#2E333A] md:h-[510px]">
      <p class="mb-8 text-[#FFF]">대한건물관리협회는 집합건물법에 대한 깊은 이해와 경험을 바탕으로, 법적 안정성을 제공합니다. 또한, 최신 기술을 활용하여 투명한 관리 솔루션을 제공하며, 모든 회원사들이 신뢰할 수 있는 환경을 조성합니다.</p>
      <p class="mb-8 text-[#FFF]">다른 협회와는 달리, 대한건물관리협회는 <span class="text-[#C4E50F]">실질적인 문제 해결에 집중</span> 하며,  <br> <span class="text-[#C4E50F]">중재</span>와 <span class="text-[#C4E50F]">법률 상담을</span>통해 갈등을 최소화합니다.</p>

    </div>

  </div>
  <div class="korea-building-section flex flex-col md:flex-row justify-between items-center pb-12 md:pb-40 mx-[20px] md:px-20 pt-12 md:pt-40">
    <div class="korea-building-img md:w-1/2 relative">
      <img class="h-[520px] w-[600px]" src="/public/images/korean-building.png" alt="" srcset="">
      <div class="korea-building-blackbox bg-[#23282f] hidden md:block p-6 m-20 px-8">
        <h1 class="fusion-of-law-h1">대한건물관리협회 <br> 주요 서비스 안내</h1>
        <p class="mt-8 text-[#FFF]">모든 건물 관리 문제, <span class="font-bold underline">하나의 솔루션</span>으로 해결합니다.</p>
      </div>
    </div>
    <div class="korea-building-content md:w-1/2 mt-8 ml-12 md:mt-0">
         <div class="korean-building-card mb-4 !bg-[#f5f6f8]">
          <div class="flex items-start">
            <img class="mr-6" src="/public/images/lawsm.svg" alt="">
            <div>
                 <p class="card-title mb-6">분쟁 중재</p>
                  <p class="m-0">
                    관리 과정에서 발생하는 다양한 분쟁을 공정하게 중재합니다.
                  </p>
            </div>
          </div>
         </div>
         <div class="korean-building-card mb-4">
          <div class="flex items-start">
            <img class="mr-6" src="/public/images/filesm.svg" alt="">
            <div>
                 <p class="card-title mb-6">공실 관리 솔루션</p>
                  <p class="m-0">
                    공실 발생 시, 공용전기료와 같은 문제를 투명하게 해결합니다.
                  </p>
            </div>
          </div>
         </div>
         <div class="korean-building-card mb-4">
          <div class="flex items-start">
            <img class="mr-6" src="/public/images/phonesm.svg" alt="">
            <div>
                 <p class="card-title mb-6">관리비 및 공과금 상담</p>
                  <p class="m-0">
                    관리비와 공과금의 투명한 부과를 돕기 위해 전문가의 상담 서비스를 제공합니다.
                  </p>
            </div>
          </div>
         </div>
         <div class="korean-building-card mb-4">
          <div class="flex items-start">
            <img class="mr-6" src="/public/images/foldersm.svg" alt="">
            <div>
                 <p class="card-title mb-6">법률 분쟁 지원</p>
                  <p class="m-0">
                    건물 관리와 법률적인 분쟁을 신속하고 공정하게 해결하는 데 도움을 드립니다.
                  </p>
            </div>
          </div>
         </div>
      
    </div>

  </div>
  <div class="benefits-section pb-12 md:pb-32 px-[20px] md:px-20 ">
    <div class="benefits-content flex flex-col md:flex-row justify-between items-center ">
       <h1 class="md:w-1/2 standard-building-h1 md:px-8">협회 회원이 되면 <br> 누릴 수 있는 <span class="highlighter-2">혜택</span></h1>
       <div class="md:w-1/2 mt-8 md:mt-0">
        <p class="mb-6 primary-p">협회 회원이 되시면, 공정한 중재와 상담 서비스, 최신 관리 솔루션 제공, 법적 안정성 확보, <br> 업계 네트워킹 기회 등 다양한 혜택을 누리실 수 있습니다.</p>
        <p class="primary-p">협회 가입 후 관리비 절감 및 공실 관리 문제 해결로 <br> 연간 수익이 개선된 실제 사례를 확인해보세요.</p>

       </div>
    </div>
    <div class="flex flex-col md:flex-row mt-24">
      <div class="benefits-card md:w-1/3 p-8 py-12 mb-8 md:mb-0">
        <div class="flex items-start">
          <img src="/public/images/msg.svg" alt="" srcset="">
          <h3 class="mb-6 benefits-card-title ml-8 mt-1">전문 중재 및 상담 서비스</h3>
        </div>
    
        <div>
           <p class="primary-p mt-8"><span class="font-bold">중재와 분쟁 해결: </span>전문가의 중재와 상담을 통해 건물 관리에서 발생하는 분쟁을 효과적으로 해결하세요.</p>
           <p class="primary-p mt-6"><span class="font-bold">맞춤형 컨설팅:</span>전문 컨설팅을 통해 관리 비용을 절감하고, 효율적인 운영 방안을 제시해 드립니다.</p>
        </div>
      </div>

      <div class="benefits-card md:w-1/3 p-6 py-12  mb-8 md:mb-0">
        <div class="flex items-start">
          <img src="/public/images/doc.svg" alt="" srcset="">
          <h3 class="mb-6 benefits-card-title ml-8 mt-1">최적화된 관리 솔루션</h3>
        </div>
    
        <div>
           <p class="primary-p mt-8"><span class="font-bold">관리 절감 솔루션:</span> 최신 관리 도구를 활용하여 건물 관리 비용을 절감하고, 운영 효율성을 극대화합니다.</p>
           <p class="primary-p mt-6"><span class="font-bold">사례 연구 제공:</span> 성공적인 관리 사례를 통해, 비용 절감과 효율적인 운영 방안을 확인하고 적용해 보세요.</p>
        </div>
      </div>

      <div class="benefits-card md:w-1/3 p-6 py-12  mb-8 md:mb-0">
        <div class="flex items-start">
          <img src="/public/images/tik.svg" alt="" srcset="">
          <h3 class="mb-6 benefits-card-title ml-8 mt-1">법적 보호 및 산업 네트워킹</h3>
        </div>
    
        <div>
           <p class="primary-p mt-8"><span class="font-bold">법적 안정성 확보:</span>법적 분쟁 및 이슈를 예방하고 해결하기 위해, 전문가의 법률 자문을 제공합니다.</p>
           <p class="primary-p mt-6"><span class="font-bold">협회 네트워킹 혜택:</span> 회원 간의 네트워킹을 통해, 산업 내에서 입지를 강화하고, 새로운 협력 기회를 발굴해 보세요.</p>
        </div>
      </div>

    </div>

  </div>
  <div class="success-story-section pb-12 md:pb-24 pt-12 px-[20px] md:px-8">
      <div class="md:flex mt-8  md:mx-16">
        <h1 class="standard-building-h1 md:w-2/5">협회 회원들의 성공 사례</h1>

      </div>
      <div>
         <SuccessCarousel/>
      </div>
     
  </div>
  <div class="overlooked-section relative pb-20 pt-12 px-[20px] md:px-20 flex flex-col md:flex-row justify-between">
    <div class="md:w-1/2 pt-6">
      <h1 class="overlooked-h2">건물 관리에서 놓치기 쉬운 문제들,</h1>
      <p class="carousel-header py-6">지금 점검해보세요!</p>

      <p class="mb-[40px]">현재 귀하의 건물에서 발생할 수 있는 문제들을 점검해보세요. 공실 전기료, <br> 관리비 분쟁, 법률적 문제 등 협회의 도움을 받을 수 있는 다양한 상황을 확인하십시오.</p>
      <button class="primary-btn mr-4 w-full md:w-[180px] mb-8 md:mb-0">중재 요청하기<i class="pi pi-arrow-right ml-2 " style="color:white;"></i> </button>
      <div class="overlooked-lightgreenbox">

      </div>
      <div class="overlooked-greenbox">

      </div>
    </div>
    <div class="korea-building-content md:w-1/2">
         <div class="korean-building-card mb-4">
          <div class="flex items-center">
            <img src="/public/images/tri.svg" alt="" srcset="">
            <p class="m-0 korean-building-p ml-8">
            관리비 부과 기준이 명확하고 투명하게 공개되고 있습니까?
            </p>
          </div>
        
         </div>
         <div class="korean-building-card mb-4">
          <div class="flex items-center">
            <img src="/public/images/tri.svg" alt="" srcset="">
            <p class="m-0 korean-building-p ml-8">
              건물 내 주요 시설의 유지보수가 정기적으로 이루어지고 있나요?
            </p>
          </div>
         </div>
         <div class="korean-building-card mb-4">
          <div class="flex items-center">
            <img src="/public/images/tri.svg" alt="" srcset="">
            <p class="m-0 korean-building-p ml-8">
              건물 관리와 관련된 법적 분쟁을 예방하기 위한 대비가 되어 있나요?
            </p>
          </div>
         </div>
         <div class="korean-building-card mb-4">
          <div class="flex items-center">
            <img src="/public/images/tri.svg" alt="" srcset="">
            <p class="m-0 korean-building-p ml-8">
              이해관계자 간의 소통이 원활하게 이루어지고 있나요?
            </p>
          </div>
         </div>
    </div>

  </div>
  <div class="footer pt-12 pb-8 px-[20px] md:px-20 flex flex-col md:flex-row justify-between bg-[#23282F]">
    <div class="md:w-1/2 flex flex-col md:flex-row justify-between">

        <div class="flex mb-8 md:mb-0 ">
             <svg xmlns="http://www.w3.org/2000/svg" width="25" height="36" viewBox="0 0 25 36" fill="none">
              <path d="M0 34.9685V33.937L12.4632 33.9588L24.9263 33.9806L24.9507 34.9903L24.975 36H12.4875H0V34.9685ZM0 20.275V7.81549L1.0584 6.94369L2.11679 6.07188L2.13898 19.2958C2.15119 26.5689 2.14269 32.568 2.1201 32.6271C2.09037 32.7048 1.7916 32.7345 1.03951 32.7345H0V20.275ZM3.59585 32.6012C3.56645 32.525 3.54362 26.2303 3.54514 18.6129C3.54727 7.85981 3.57142 4.73333 3.65313 4.62962C3.81032 4.43012 5.49674 3.17343 5.60727 3.17343C5.67685 3.17343 5.69693 7.19017 5.68103 17.9325L5.65918 32.6916L4.65425 32.7157C3.79504 32.7363 3.64156 32.7197 3.59585 32.6012ZM7.08477 17.316V1.89224L7.2991 1.67907C7.41697 1.56183 7.90307 1.15206 8.37932 0.768463L9.24522 0.0710194L9.22339 16.3813L9.20157 32.6916L8.14317 32.7157L7.08477 32.7398V17.316ZM10.7136 16.3673V0L11.0808 0.157847C11.4228 0.30488 13.0929 1.20461 16.1999 2.91563C16.9127 3.30816 18.2541 4.04314 19.1807 4.5489C20.1074 5.05466 21.1766 5.6413 21.5567 5.85255C24.0712 7.24978 24.6841 7.59933 24.8183 7.71273C24.9608 7.83314 24.9695 8.46139 24.9695 18.6548C24.9695 24.6026 24.9375 29.4691 24.8984 29.4691C24.8184 29.4691 23.9546 28.5855 22.4207 26.9346C21.5026 25.9465 20.7053 25.091 20.1743 24.5244C20.0024 24.3409 18.2224 22.4545 17.058 21.2216C16.7221 20.8659 16.1777 20.2848 15.8484 19.9302C14.2145 18.1712 13.0093 16.9228 12.945 16.9228C12.9057 16.9228 12.8736 17.3244 12.8736 17.8153V18.7079L13.9305 19.8562C14.5119 20.4878 15.1242 21.1564 15.2913 21.342C15.4584 21.5276 15.6535 21.7422 15.7247 21.8189C15.796 21.8957 16.3013 22.4399 16.8475 23.0283C17.3938 23.6168 18.0578 24.3302 18.3231 24.6138C20.4951 26.9353 21.631 28.1453 22.155 28.6957C24.1549 30.7962 24.8995 31.6329 24.9603 31.8479C24.998 31.9811 25.0112 32.235 24.9897 32.4123L24.9506 32.7345H24.0711H23.1916L21.899 31.3462C21.188 30.5826 20.4077 29.7415 20.165 29.4771C19.7219 28.9944 17.4911 26.5857 17.3253 26.411C17.2766 26.3596 16.8479 25.896 16.3727 25.3806C15.6425 24.5887 14.3635 23.2396 13.1623 21.9943L12.8736 21.6949L12.8776 25.2168L12.8817 28.7386L14.7784 30.6609C15.8216 31.7182 16.6751 32.6173 16.6751 32.6589C16.6751 32.701 15.3533 32.7345 13.6944 32.7345H10.7136V16.3673ZM22.8095 16.454V8.86295L22.3991 8.608C21.8312 8.25519 18.8393 6.58905 16.4591 5.30007C15.9364 5.01699 15.2949 4.66025 15.0335 4.50732C14.7722 4.35438 14.1793 4.02772 13.716 3.7814L12.8736 3.33357V8.68031V14.0271L14.1912 15.3675C14.9159 16.1047 16.13 17.3653 16.8892 18.1688C20.2961 21.7742 22.642 24.1481 22.739 24.0885C22.7778 24.0646 22.8095 20.6291 22.8095 16.454Z" fill="white"/>
            </svg>
            <h1 class="footer-h1 !ml-4 mt-2">
              대한건물관리협회
            </h1>

        </div>
        
        <div>
          <h2 class="footer-h2 mb-4">
            사단법인 대한건물관리협회(KBMS)
          </h2>
          <p class="footer-p mb-4">경기도 안산시 단원구 중앙대로 831, 24층 2420호</p>
          <p class="footer-p mb-4">연락처 : 02-545-0000</p>
          <p class="footer-p mb-4">이메일 : biz@gmail.com</p>

        </div>
    </div> 
    <div class="md:w-1/3 mt-8 md:mt-0 ">
      <p class="footer-p mb-4">협회장ㅣ김동현</p>
      <p class="footer-p mb-4">개인정보보호책임자ㅣ관리자</p>
      <p class="footer-p mb-4">사업자등록번호ㅣ800-55-54842</p>
    </div>

  </div>
  <div class="bg-[#2E333A] text-center py-4">
    <p class="footer-h3">© 2024 Korean Building Maintenance Society. All Right Reserved</p>
  </div>
</template>
