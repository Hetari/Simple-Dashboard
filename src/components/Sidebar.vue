<template>
  <aside
    class="min-h-screen relative bg-[#0F113C] text-white rounded-e-lg pl-4 pt-5 shadow-sm"
  >
    <img class="mt-3" src="../assets/logo.svg" alt="" />
    <div class="flex items-end">
      <img src="../assets/star.svg" alt="" />
    </div>
    <div class="flex items-end justify-end mb-2 w-[90%]">
      <img src="../assets/star.svg" alt="" />
    </div>
    <h1 class="text-3xl inline-block font-bold capitalize">Dashboard</h1>

    <ul class="ml-3 mt-[43px] capitalize">
      <li class="mb-12">
        <a
          class="flex items-center relative"
          @click.prevent=""
          @click="toggleShow('home')"
          href="#"
        >
          <img
            src="../assets/Home_duotone.svg"
            alt="Home"
            class="-translate-x-1"
          />
          <p class="text-2xl inline-block ml-[13px]">home page</p>
        </a>

        <ul v-if="showItems['home']" class="ml-2 pt-2 mb-12">
          <li class="flex relative pb-[15px] not-last:pb-0">
            <img class="absolute top-0" src="../assets/arrow1.svg" alt="" />
            <router-link
              @click.prevent=""
              class="ml-9 mt-0.5 text-lg w-full"
              to="/admin/heroInfo"
            >
              hero info</router-link
            >
          </li>

          <li class="flex relative not-last:pb-0">
            <img class="absolute -top-7" src="../assets/arrow2.svg" alt="" />
            <router-link
              @click.prevent=""
              class="absolute text-lg w-[87%] -top-2.5 ml-9"
              to="/admin/Statistic"
            >
              Statistics</router-link
            >
          </li>
        </ul>
      </li>

      <li class="mb-12">
        <a
          class="flex items-center relative"
          @click.prevent=""
          @click="toggleShow('special-service')"
          href="#"
        >
          <img src="../assets/special-services.svg" alt="Home" class="" />
          <p class="text-2xl inline-block w-full ml-[13px]">special service</p>
        </a>

        <ul v-if="showItems['special-service']" class="ml-2 pt-2">
          <li class="flex relative pb-[15px] not-last:pb-0 ]">
            <img class="absolute top-0" src="../assets/arrow1.svg" alt="" />
            <router-link
              @click.prevent=""
              class="ml-9 mt-0.5 text-lg w-full"
              to="/admin/SpecialService"
            >
              special service</router-link
            >
          </li>
        </ul>
      </li>

      <li class="mb-12">
        <a
          class="flex items-center relative"
          @click.prevent=""
          @click="toggleShow('about-us')"
          href="#"
        >
          <img src="../assets/about-us.svg" alt="Home" class="-translate-x-2" />
          <p class="text-2xl inline-block ml-[13px]">about us</p>
        </a>

        <ul v-if="showItems['about-us']" class="ml-2 pt-2">
          <li class="flex relative pb-[15px] not-last:pb-0">
            <img class="absolute top-0" src="../assets/arrow1.svg" alt="" />
            <router-link
              @click.prevent=""
              class="ml-9 mt-0.5 text-lg w-full"
              to="/admin/AboutUsInfo"
            >
              about us info</router-link
            >
          </li>
        </ul>
      </li>

      <li class="mb-12">
        <a
          class="flex items-center relative"
          @click.prevent=""
          @click="toggleShow('latest-services')"
          href="#"
        >
          <img
            src="../assets/latest-services.svg"
            alt="Home"
            class="-translate-x-1"
          />
          <p class="text-2xl inline-block ml-[13px]">latest services</p>
        </a>

        <ul v-if="showItems['latest-services']" class="ml-2 pt-2 mb-12">
          <li class="flex relative pb-[15px] not-last:pb-0">
            <img class="absolute top-0" src="../assets/arrow1.svg" alt="" />
            <router-link
              @click.prevent=""
              class="ml-9 mt-0.5 text-lg w-full"
              to="/admin/Service"
            >
              services</router-link
            >
          </li>
          <li class="flex relative not-last:pb-0">
            <img class="absolute -top-7" src="../assets/arrow2.svg" alt="" />
            <router-link
              @click.prevent=""
              class="absolute text-lg -top-2.5 ml-9 w-[87%]"
              to="/admin/Details"
            >
              details</router-link
            >
          </li>
        </ul>
      </li>

      <li class="mb-12">
        <a
          class="flex items-center relative"
          @click.prevent=""
          @click="toggleShow('recent-work')"
          href="#"
        >
          <img
            src="../assets/recent-work.svg"
            alt="Home"
            class="-translate-x-1"
          />
          <p class="text-2xl inline-block ml-[13px]">recent work</p>
        </a>

        <ul v-if="showItems['recent-work']" class="ml-2 pt-2">
          <li class="flex relative pb-[15px] not-last:pb-0">
            <img class="absolute top-0" src="../assets/arrow1.svg" alt="" />
            <router-link
              @click.prevent=""
              class="ml-9 mt-0.5 text-lg w-full"
              to="/admin/Project"
            >
              project</router-link
            >
          </li>
        </ul>
      </li>

      <li class="mb-12">
        <a
          class="flex items-center relative"
          @click.prevent=""
          @click="toggleShow('comment')"
          href="#"
        >
          <img src="../assets/comment.svg" alt="Home" class="-translate-x-1" />
          <p class="text-2xl inline-block ml-[13px]">comment</p>
        </a>

        <ul v-if="showItems['comment']" class="ml-2 pt-2">
          <li class="flex relative pb-[15px] not-last:pb-0">
            <img class="absolute top-0" src="../assets/arrow1.svg" alt="" />
            <router-link
              @click.prevent=""
              class="ml-9 mt-0.5 text-lg w-full"
              to="/admin/Comment"
            >
              comment</router-link
            >
          </li>
        </ul>
      </li>

      <li class="mb-12">
        <a
          class="flex items-center relative"
          @click.prevent=""
          @click="toggleShow('clients')"
          href="#"
        >
          <img src="../assets/clients.svg" alt="Home" class="-translate-x-1" />
          <p class="text-2xl inline-block ml-[13px]">clients</p>
        </a>

        <ul v-if="showItems['clients']" class="ml-2 pt-2">
          <li class="flex relative pb-[15px] not-last:pb-0">
            <img class="absolute top-0" src="../assets/arrow1.svg" alt="" />
            <router-link
              @click.prevent=""
              class="ml-9 mt-0.5 text-lg w-full"
              to="/admin/Brand"
            >
              brand</router-link
            >
          </li>
        </ul>
      </li>
    </ul>

    <img class="absolute left-0 -bottom-2" src="../assets/dots.svg" alt="" />
  </aside>
</template>
 
<script >
import { useRouter } from "vue-router";
export default {
  name: "sidebar",
  data() {
    return {
      showItems: {
        home: false,
        "special-service": false,
        "about-us": false,
        "latest-services": false,
        "recent-work": false,
        comment: false,
        clients: false,
      },
    };
  },
  methods: {
    toggleShow(itemKey) {
      if (this.showItems[itemKey]) {
        this.showItems[itemKey] = !this.showItems[itemKey];
        return;
      }
      Object.keys(this.showItems).forEach((index) => {
        this.showItems[index] = false;
      });
      this.showItems[itemKey] = !this.showItems[itemKey];
    },
  },
  computed: {
    isHeroInfoActive() {
      return this.$route.path === "/admin/heroInfo";
    },
    isStatisticsActive() {
      return this.$route.path === "/admin/statistics";
    },
  },
};
</script>