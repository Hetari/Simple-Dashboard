<template>
  <aside
    class="min-h-screen relative bg-[#0F113C] text-white rounded-e-lg pl-4 pt-5 shadow-sm"
  >
    <router-link :to="{ name: 'Root' }">
      <img class="mt-3" src="@/assets/logo.svg" alt="" />
    </router-link>
    <div class="flex items-end">
      <img src="@/assets/star.svg" alt="" />
    </div>
    <div class="flex items-end justify-end mb-2 w-[90%]">
      <img src="@/assets/star.svg" alt="" />
    </div>
    <h1 class="text-3xl inline-block font-bold capitalize">Dashboard</h1>
    <ul class="ml-3 mt-[43px] capitalize">
      <li class="cursor-pointer" :class="showItems['home'] ? 'mb-5' : 'mb-12'">
        <a
          class="flex items-center relative"
          @click.prevent=""
          @click="toggleShow('home')"
        >
          <img
            src="@/assets/Home_duotone.svg"
            alt="Home"
            class="-translate-x-1"
          />
          <p class="text-2xl cursor-pointer inline-block ml-[13px]">
            home page
          </p>
        </a>
        <ul ref="continuer" v-if="showItems['home']" class="ml-3 pt-2">
          <li class="flex relative pb-[15px]">
            <img class="absolute top-0" src="@/assets/arrow1.svg" alt="" />
            <router-link
              @click.prevent=""
              class="ml-9 mt-0.5 text-lg w-full"
              :class="
                $route.name.includes('HeroInfo')
                  ? 'router-link-exact-active'
                  : ''
              "
              :to="{ name: 'HeroInfo' }"
            >
              hero info</router-link
            >
          </li>

          <li class="flex relative">
            <img class="absolute -top-7" src="@/assets/arrow2.svg" alt="" />
            <router-link
              @click.prevent=""
              class="text-lg -translate-y-2 ml-9 w-full"
              :class="
                $route.name.includes('Statistic')
                  ? 'router-link-exact-active'
                  : ''
              "
              :to="{ name: 'Statistic' }"
            >
              Statistics
            </router-link>
          </li>
        </ul>
      </li>

      <li
        class="cursor-pointer"
        :class="showItems['special-service'] ? 'mb-5' : 'mb-12'"
      >
        <a
          class="flex items-center relative"
          @click.prevent=""
          @click="toggleShow('special-service')"
        >
          <img src="@/assets/special-services.svg" alt="Home" class="" />
          <p class="text-2xl inline-block w-full ml-[13px]">special service</p>
        </a>

        <ul v-if="showItems['special-service']" class="ml-3 pt-2">
          <li class="flex relative pb-[15px]">
            <img class="absolute top-0" src="@/assets/arrow1.svg" alt="" />
            <router-link
              @click.prevent=""
              class="ml-9 mt-0.5 text-lg w-full"
              :to="{ name: 'SpecialService' }"
            >
              special service</router-link
            >
          </li>
        </ul>
      </li>

      <li
        class="cursor-pointer"
        :class="showItems['about-us'] ? 'mb-5' : 'mb-12'"
      >
        <a
          class="flex items-center relative"
          @click.prevent=""
          @click="toggleShow('about-us')"
        >
          <img src="@/assets/about-us.svg" alt="Home" class="-translate-x-2" />
          <p class="text-2xl cursor-pointer inline-block ml-1.5">about us</p>
        </a>

        <ul v-if="showItems['about-us']" class="ml-3 pt-2">
          <li class="flex relative pb-[15px]">
            <img class="absolute top-0" src="@/assets/arrow1.svg" alt="" />
            <router-link
              :class="
                $route.name.includes('About') ? 'router-link-exact-active' : ''
              "
              @click.prevent=""
              class="ml-9 mt-0.5 text-lg w-full"
              :to="{ name: 'About' }"
            >
              about us info</router-link
            >
          </li>
        </ul>
      </li>

      <li
        class="cursor-pointer"
        :class="showItems['latest-services'] ? 'mb-5' : 'mb-12'"
      >
        <a
          class="flex items-center relative"
          @click.prevent=""
          @click="toggleShow('latest-services')"
        >
          <img
            src="@/assets/latest-services.svg"
            alt="Home"
            class="translate-x-0"
          />
          <p class="text-2xl cursor-pointer inline-block ml-5">
            latest services
          </p>
        </a>

        <ul v-if="showItems['latest-services']" class="ml-3 pt-2">
          <li class="flex relative pb-[15px]">
            <img class="absolute top-0" src="@/assets/arrow1.svg" alt="" />
            <router-link
              @click.prevent=""
              class="ml-9 mt-0.5 text-lg w-full"
              :to="{ name: 'Service' }"
            >
              services</router-link
            >
          </li>
          <li class="flex relative w-full">
            <img class="absolute -top-7" src="@/assets/arrow2.svg" alt="" />
            <router-link
              @click.prevent=""
              class="text-lg -translate-y-2 ml-9 w-full"
              :to="{ name: 'Details' }"
            >
              details</router-link
            >
          </li>
        </ul>
      </li>

      <li
        class="cursor-pointer"
        :class="showItems['recent-work'] ? 'mb-5' : 'mb-12'"
      >
        <a
          class="flex items-center relative"
          @click.prevent=""
          @click="toggleShow('recent-work')"
        >
          <img
            src="@/assets/recent-work.svg"
            alt="Home"
            class="-translate-x-1"
          />
          <p class="text-2xl cursor-pointer inline-block ml-[13px]">
            recent work
          </p>
        </a>

        <ul v-if="showItems['recent-work']" class="ml-3 pt-2">
          <li class="flex relative pb-[15px]">
            <img class="absolute top-0" src="@/assets/arrow1.svg" alt="" />
            <router-link
              @click.prevent=""
              class="ml-9 mt-0.5 text-lg w-full"
              :to="{ name: 'Project' }"
            >
              project</router-link
            >
          </li>
        </ul>
      </li>

      <li
        class="cursor-pointer"
        :class="showItems['comment'] ? 'mb-5' : 'mb-12'"
      >
        <a
          class="flex items-center relative"
          @click.prevent=""
          @click="toggleShow('comment')"
        >
          <img src="@/assets/comment.svg" alt="Home" class="-translate-x-1" />
          <p class="text-2xl cursor-pointer inline-block ml-[13px]">comment</p>
        </a>

        <ul v-if="showItems['comment']" class="ml-3 pt-2">
          <li class="flex relative pb-[15px]">
            <img class="absolute top-0" src="@/assets/arrow1.svg" alt="" />
            <router-link
              @click.prevent=""
              class="ml-9 mt-0.5 text-lg w-full"
              :to="{ name: 'Comment' }"
            >
              comment</router-link
            >
          </li>
        </ul>
      </li>

      <li
        class="cursor-pointer"
        :class="showItems['clients'] ? 'mb-5' : 'mb-12'"
      >
        <a
          class="flex items-center relative"
          @click.prevent=""
          @click="toggleShow('clients')"
        >
          <img src="@/assets/clients.svg" alt="Home" class="-translate-x-1" />
          <p class="text-2xl cursor-pointer inline-block ml-[13px]">clients</p>
        </a>

        <ul v-if="showItems['clients']" class="ml-3 pt-2">
          <li class="flex relative pb-[15px]">
            <img class="absolute top-0" src="@/assets/arrow1.svg" alt="" />
            <router-link
              @click.prevent=""
              class="ml-9 mt-0.5 text-lg w-full"
              :to="{ name: 'Brand' }"
            >
              brand</router-link
            >
          </li>
        </ul>
      </li>
    </ul>
    <img
      class="absolute left-0 -bottom-10 overflow-hidden"
      src="@/assets/dots.svg"
      alt=""
    />
  </aside>
</template>

<script>
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
};
</script>

<style>
.item-container {
  width: 100%;
  overflow: hidden;
  transition: height 0.3s ease;
}
</style>