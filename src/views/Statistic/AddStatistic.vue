<template>
  <div class="p-1 w-full h-screen bg-[#F8F8F8]">
    <div
      class="bg-white rounded-lg mx-2 pr-5 pt-4 mt-28 relative z-50 shadow-lg"
    >
      <div class="flex justify-between">
        <div class="flex justify-between">
          <div class="flex items-start ps-1">
            <router-link
              to="/admin/Statistic/"
              class="rounded-lg hover:bg-slate-50 scale-90 hover:scale-75 transition-all duration-500 cursor-pointer"
            >
              <img src="@/assets/arrow-left.svg" alt="go back" />
            </router-link>

            <h1 class="capitalize text-3xl ml-3 mb-5 font-bold">
              statistic info
            </h1>
          </div>
        </div>
      </div>

      <form class="text-lg ml-3" action="">
        <NormalInput
          text="title"
          type="text"
          name="statistic_title"
          id="statistic_title"
          placeholder="TITLE..."
        />
        <ImageInput file_type="Icon" />
        <DescriptionInput />
        <SaveButton />
      </form>
    </div>
    <img
      class="absolute right-0 bottom-5 z-0"
      src="@/assets/dots2.svg"
      alt=""
    />
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
