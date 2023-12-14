<template>
  <div class="flex items-center justify-center">
    <div class="p-1 h-screen w-full bg-[#F8F8F8]">
      <div class="bg-white p-5 mx-2 mt-10 relative z-50 shadow-lg">
        <div class="flex justify-between">
          <h1 class="capitalize text-3xl ml-3 mb-5 font-bold">
            list spacial service
          </h1>
          <router-link to="/admin/SpacialService/add">
            <AddButton />
          </router-link>
        </div>
        <div class="w-full">
          <table class="w-full border-0">
            <thead>
              <tr class="border-y-2">
                <th class="p-2 pl-0 text-start capitalize">subtitle</th>
                <th class="p-2 text-center capitalize">description</th>
                <th class="p-2 text-center capitalize">image</th>
                <th class="p-2 text-center capitalize">features title</th>
                <th class="p-2 text-center capitalize">features description</th>
                <th class="p-2 text-end capitalize">Edit/delete</th>
              </tr>
            </thead>
            <tbody>
              <!-- <tr class="border-b">
                <td class="p-2 pl-0 capitalize">text</td>
                <td class="p-2 flex justify-center">
                  <img src="@/assets/statistic.svg" alt="" />
                </td>
                <td class="p-2 capitalize">
                  <img class="mx-auto" src="@/assets/Mountain.svg" alt="" />
                </td>
                <td class="p-2 capitalize">
                  <p class="flex justify-center">text</p>
                </td>
                <td class="p-2 capitalize">
                  <p class="flex justify-center">text</p>
                </td>
                <td class="p-2">
                  <div class="flex justify-end">
                    <img class="px-6 cursor-pointer" src="@/assets/edit.svg" alt="" />
                    <img src="@/assets/delete.svg" alt="delete" class="cursor-pointer" />
                  </div>
                </td>
              </tr> -->
            </tbody>
          </table>
          <!-- <div class="flex items-center justify-center"> -->
          <p class="w-[100%] text-center mt-4 text-gray-400">
            No value, please add to see them
          </p>
          <!-- </div> -->
        </div>
      </div>
      <img
        class="absolute right-0 bottom-5 z-0"
        src="@/assets/dots2.svg"
        alt=""
      />
    </div>
  </div>
</template>
  
<script>
import SaveButton from "@/components/SaveButton.vue";
import AddButton from "@/components/AddButton.vue";

export default {
  components: {
    SaveButton,
    AddButton,
  },
};
</script>
