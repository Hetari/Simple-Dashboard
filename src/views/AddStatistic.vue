<template>
  <div class="p-1 w-full h-screen bg-[#F8F8F8]">
    <div
      class="bg-white rounded-lg mx-2 pr-5 pt-4 mt-28 relative z-50 shadow-lg"
    >
      <div class="flex justify-between">
        <div class="flex justify-between">
          <div class="flex items-start ps-1">
            <a
              href="#"
              class="rounded-lg hover:bg-slate-50 hover:scale-110 transition-all duration-500"
            >
              <img
                src="@/assets/arrow-left.svg"
                alt="go back"
                @click="this.$router.go(-1)"
              />
            </a>

            <h1 class="capitalize text-3xl ml-3 mb-5 font-bold">hero info</h1>
          </div>
        </div>
      </div>

      <form class="text-lg ml-3" action="">
        <NormalInput
          text="title"
          type="text"
          name="home_title"
          title="title"
          id="home_title"
          placeholder="TITLE..."
        />
        <ImageInput file_type="Icon" />
        <DescriptionInput />
        <SaveButton />
      </form>
    </div>
    <img
      class="absolute right-0 bottom-5 z-0"
      src="../assets/dots2.svg"
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


<style></style>