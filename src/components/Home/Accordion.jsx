import React from "react";

const Accordion = () => {
  return (
    <section className="pt-[100px] pb-[1px] bg-[#080709]">
      <div className="max-w-[1020px] mx-auto">
        <details class="w-full bg-[#080709]  cursor-pointer mb-3">
          <summary class="w-full bg-[#080709] text-[#B4B5BD] text-[25px] flex justify-between px-[20px] py-[31px]  after:content-['+']">
            What is the 99x Club Membership?
          </summary>
          <p class="px-[20px] py-[31px] text-[#B4B5BD]">
            Nunc posuere dapibus urna quis cursus. Mauris malesuada tincidunt
            diam vel placerat mi tincidunt ac. Nullam augue urna, venenatis ut
            blandit eget, auctor vel eros. In ut dolor ante
          </p>
        </details>

        <details class="w-full bg-[#100f11]  cursor-pointer mb-3">
          <summary class="w-full bg-[#100f11] text-[#B4B5BD] text-[25px] flex justify-between px-[20px] py-[31px] after:content-['+']">
            How to mint an 99x Club NFT Pass?
          </summary>
          <p class="px-[20px] py-[31px] text-[#B4B5BD]">
            Fusce sed laoreet ex. Aenean justo nisl, eleifend eget eleifend sit
            amet, imperdiet id libero. Suspendisse et tempus leo, et lacinia
            arcu. Etiam at ante in est efficitur fringilla eleifend nec tellus.
            Integer sed auctor lectus, nec ullamcorper arcu. Nullam nec eros
            elit. Nulla tempor massa ut quam elementum dignissim. Sed eu
            pulvinar est, vel vehicula dolor. Pellentesque in ante vel elit
            facilisis consectetur eu id felis
          </p>
        </details>

        <details class="w-full bg-[#080709]  cursor-pointer mb-3">
          <summary class="w-full bg-[#080709] text-[#B4B5BD] text-[25px] flex justify-between px-[20px] py-[31px]  after:content-['+']">
            How long will the 99x Club membership last?
          </summary>
          <p class="px-[20px] py-[31px] text-[#B4B5BD]">
            Etiam maximus vitae eros eu vestibulum. Donec posuere, magna non
            tincidunt dignissim, magna tortor mollis augue, at maximus ante
            lacus vel tellus. Vestibulum vestibulum consectetur tortor id
            sagittis. Suspendisse nisi ipsum, pretium a lorem at, laoreet
            condimentum arcu
          </p>
        </details>
        <details class="w-full bg-[#100f11]  cursor-pointer mb-3">
          <summary class="w-full bg-[#100f11] text-[#B4B5BD] text-[25px] flex justify-between px-[20px] py-[31px]  after:content-['+']">
            What are the benefits to hold 99x Club NFT Membership?
          </summary>
          <p class="px-[20px] py-[31px] text-[#B4B5BD]">
            Etiam maximus vitae eros eu vestibulum. Donec posuere, magna non
            tincidunt dignissim, magna tortor mollis augue, at maximus ante
            lacus vel tellus. Vestibulum vestibulum consectetur tortor id
            sagittis. Suspendisse nisi ipsum, pretium a lorem at, laoreet
            condimentum arcu
          </p>
        </details>
      </div>
    </section>
  );
};

export default Accordion;
