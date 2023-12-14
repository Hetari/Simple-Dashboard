<template>
  <div class="p-1 bg-[#F8F8F8] border-solid border-b">
    <div class="ml-2 h-14 bg-white flex justify-between rounded-lg shadow-lg">
      <div class="relative">
        <input
          class="ml-2 pl-12 mt-2 rounded-md w-[50vw] h-10"
          type="text"
          name="search"
          placeholder="search..."
        />
        <img
          class="absolute left-3 top-3 w-7"
          src="@/assets/Search.svg"
          alt=""
        />
      </div>

      <div class="flex items-center">
        <img class="w-12 h-12" src="@/assets/bell.svg" alt="" />
        <img class="h-12" src="@/assets/Line.svg" alt="" />

        <div class="w-[50%] grid grid-cols-3">
          <div class="col-span-1">
            <img class="w-20 h-12" src="@/assets/user.svg" alt="" />
          </div>
          <div class="col-span-2 flex flex-col">
            <div class="">Tammam</div>
            <div class="">Tammam@gmail.com</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>