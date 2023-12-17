<template>
  <div :class="[isNotFound ? '' : 'grid grid-cols-5']">
    <div :class="[isNotFound ? '' : 'col-span-1']">
      <sidebar v-if="!isNotFound" />
    </div>
    <div :class="[isNotFound ? '' : 'col-span-4']">
      <dashHeader v-if="!isNotFound" />

      <router-view v-slot="{ Component }">
        <transition name="route" mode="out-in" appear>
          <component :is="Component"> </component>
        </transition>
      </router-view>
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
