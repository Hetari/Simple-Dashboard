
<template>
  <div class="">
    <div class="p-1 w-full h-screen bg-[#F8F8F8]">
      <div
        class="bg-white rounded-lg mx-2 pr-5 pt-4 mt-10 relative z-50 shadow-md"
      >
        <div class="flex justify-between">
          <div class="flex items-start ps-1">
            <router-link
              to="/admin/service/"
              class="rounded-lg hover:bg-slate-50 scale-90 hover:scale-75 transition-all duration-500 cursor-pointer"
            >
              <img src="@/assets/arrow-left.svg" alt="left arrow" />
            </router-link>

            <h1 class="capitalize text-3xl ml-3 mb-5 font-bold">service</h1>
          </div>
        </div>

        <form class="text-lg ml-[60px]" action="">
          <NormalInput
            text="title"
            type="text"
            name="service_title"
            id="service_title"
            placeholder="TITLE..."
          />
          <NormalInput
            text="subtitle"
            type="text"
            name="service_subtitle"
            title="subtitle"
            id="service_subtitle"
            placeholder="SUBTITLE..."
          />
          <DescriptionInput />
          <SaveButton />
        </form>
      </div>
      <img class="absolute right-0 bottom-20" src="@/assets/dots2.svg" alt="" />
    </div>
  </div>
</template>

<script>
import NormalInput from "@/components/NormalInput.vue";
import ImageInput from "@/components/ImageInput.vue";
import DescriptionInput from "@/components/DescriptionInput.vue";
import SaveButton from "@/components/SaveButton.vue";
export default {
  components: {
    NormalInput,
    ImageInput,
    DescriptionInput,
    SaveButton,
  },
};
</script>