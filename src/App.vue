<template>
  <div class="overflow-y-auto">
    <div :class="[isNotFound ? '' : 'grid grid-cols-5']">
      <div :class="[isNotFound ? '' : 'col-span-1']">
        <sidebar v-if="!isNotFound" />
      </div>
      <div :class="[isNotFound ? '' : 'col-span-4']">
        <dashHeader v-if="!isNotFound" />
        <router-view />
      </div>
    </div>
  </div>
</template>


<script>
import sidebar from "@/components/Sidebar";
import dashHeader from "@/components/DashHeader";

export default {
  components: {
    sidebar,
    dashHeader,
  },
  computed: {
    isNotFound() {
      return this.$route.name === "NotFound";
    },
  },
};
</script>
