<template>
    <div class="card !relative">
      <Carousel
        :value="products"
        :numVisible="3"
        :numScroll="3"
        :responsiveOptions="responsiveOptions"
      >
        <template #item="slotProps">
          <div
            class="border mt-24  !rounded-[16px] m-2 p-8" :class="{ 'bg-[#F5F6F8;]' : slotProps.index == 0}"
          >
           <div class="h-[200px]">
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="26" viewBox="0 0 30 26" fill="none">
                <path d="M8.79252 21.9128C7.7411 21.9128 6.82679 21.6354 6.04966 21.0808C5.27253 20.4799 4.67823 19.671 4.2668 18.6541C3.85537 17.6372 3.64966 16.4817 3.64966 15.1874C3.64966 13.6159 3.90109 12.1137 4.40394 10.6808C4.95252 9.20167 5.77537 7.8381 6.87252 6.5901C7.96966 5.3421 9.38682 4.30209 11.1239 3.47009L14.0039 6.1741C12.7697 6.5901 11.6725 7.16786 10.7125 7.90743C9.79824 8.647 9.04396 9.479 8.44966 10.4034C7.90109 11.3279 7.5125 12.2754 7.28394 13.2461L7.55823 13.3848C7.7411 13.2461 7.96966 13.1305 8.24394 13.0381C8.51823 12.9457 8.92966 12.8994 9.47823 12.8994C10.0268 12.8994 10.5982 13.0612 11.1925 13.3848C11.7868 13.7083 12.2668 14.1937 12.6325 14.8408C13.0439 15.4417 13.2497 16.2505 13.2497 17.2674C13.2497 18.0994 13.0439 18.8621 12.6325 19.5554C12.2668 20.2488 11.7411 20.8265 11.0554 21.2888C10.3697 21.7048 9.61537 21.9128 8.79252 21.9128ZM21.6839 21.9128C20.6325 21.9128 19.7182 21.6354 18.9411 21.0808C18.164 20.4799 17.5697 19.671 17.1582 18.6541C16.7468 17.6372 16.5411 16.4817 16.5411 15.1874C16.5411 13.6159 16.7925 12.1137 17.2954 10.6808C17.8439 9.20167 18.6668 7.8381 19.7639 6.5901C20.8611 5.3421 22.2782 4.30209 24.0154 3.47009L26.8954 6.1741C25.6611 6.5901 24.5639 7.16786 23.6039 7.90743C22.6897 8.647 21.9354 9.479 21.3411 10.4034C20.7925 11.3279 20.4039 12.2754 20.1754 13.2461L20.4497 13.3848C20.6325 13.2461 20.8611 13.1305 21.1354 13.0381C21.4097 12.9457 21.8211 12.8994 22.3697 12.8994C22.9182 12.8994 23.4896 13.0612 24.0839 13.3848C24.6782 13.7083 25.1582 14.1937 25.5239 14.8408C25.9354 15.4417 26.1411 16.2505 26.1411 17.2674C26.1411 18.0994 25.9354 18.8621 25.5239 19.5554C25.1582 20.2488 24.6325 20.8265 23.9468 21.2888C23.2611 21.7048 22.5068 21.9128 21.6839 21.9128Z" fill="#23282F"/>
              </svg>
              <h2 class="carousel-header mt-6">{{ slotProps.data.heading }}</h2>
              <p class="mt-6">{{ slotProps.data.content }}</p>
            </div>
              <div class="flex items-center mt-16">
                <img :src="slotProps.data.img" alt="" srcset="">
                <div class="ml-6">
                  <p class="success-profile">{{slotProps.data.name}}</p>
                  <p class="primary-p">{{slotProps.data.info}}t</p>
                </div>

              </div>
         
     
      
          </div>
        </template>
     
      </Carousel>
      <div class="nexticon">
            <i class="pi pi-arrow-right text-[#FFF]"></i>
         </div>
  
   
         <div class="previcon">
           <i class="pi pi-arrow-left text-[#000]"></i>
         </div>
  
  </div>
</template>

<script setup>

const products = ref([
  {heading:"대한건물관리협회에 감사의 말씀을 전하고 싶습니다.",
  content:"관리 솔루션 덕분에 비용을 대폭 줄일 수 있었어요. 맞춤형 컨설팅으로 관리 업무가 효율적이고 체계적으로 개선되었습니다.",
  img:"/images/g-1.svg",
  name:"박철민",
  info:"회원"
  },
  {heading:"긴 법적 분쟁을 빠르게 해결해 주셔서 감사합니다.",
  content:"대한건물관리협회의 도움 덕분에 오랜 법적 분쟁을 빠르게 해결할 수 있었습니다. 협회의 전문적인 중재와 법률 지원 덕분에, 시간과 비용을 크게 절감할 수 있었습니다.",
  img:"/images/g-2.svg",
  name:"이영희",
  info:"회원"
  },
  {heading:"복잡한 규제 문제를 한 번에 해결했어요.",
  content:"복잡한 규제 문제를 협회와 함께 해결했습니다. 덕분에 모든 법적 요구 사항을 충족하고, 안정성을 높일 수 있었습니다.",
  img:"/images/g-3.svg",
  name:"이영희",
  info:"회원"
  },
  {heading:"대한건물관리협회에 감사의 말씀을 전하고 싶습니다.",
  content:"관리 솔루션 덕분에 비용을 대폭 줄일 수 있었어요. 맞춤형 컨설팅으로 관리 업무가 효율적이고 체계적으로 개선되었습니다.",
  img:"/images/g-1.svg",
  name:"박철민",
  info:"회원"
  },


]);
const responsiveOptions = ref([
  {
    breakpoint: '1400px',
    numVisible: 2,
    numScroll: 1,
  },
  {
    breakpoint: '1199px',
    numVisible: 3,
    numScroll: 1,
  },
  {
    breakpoint: '767px',
    numVisible: 2,
    numScroll: 1,
  },
  {
    breakpoint: '575px',
    numVisible: 1,
    numScroll: 1,
  },
]);



    // Function to go to the previous slide
    const prev = () => {
      if (carousel.value) {
        carousel.value.prev();
      }
    };

    // Function to go to the next slide
    const next = () => {
      if (carousel.value) {
        carousel.value.next();
      }
    };

</script>
