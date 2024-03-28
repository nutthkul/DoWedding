<template>
  <v-responsive class="align-center text-center fill-height">
    <v-row>
      <v-col cols="12" md="12" sm="12">
        <v-img
          src="../assets/schedule/Nat1.png"
          max-width="1200px"
          class="mx-auto"
        ></v-img>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" md="6" sm="12">
        <span style="font-size: 24px">SAVE THE DATE</span>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" md="12" sm="12">
        <span style="font-size: 60px; font-weight: bold">02</span>
        <v-card
          :width="$vuetify.display.smAndDown ? '20%' : '10%'"
          flat
          class="mx-auto"
        >
          <v-divider :thickness="11" color="error"></v-divider>
        </v-card>
      </v-col>
      <v-col cols="12" md="12" sm="12" class="mt-n5">
        <span style="font-size: 60px; font-weight: bold">06</span>
        <v-card
          :width="$vuetify.display.smAndDown ? '20%' : '10%'"
          flat
          class="mx-auto"
        >
          <!-- <v-divider :thickness="11" color="error"></v-divider> -->
        </v-card>
      </v-col>

      <v-col cols="12" sm="12">
        <div>
          <span style="font-size: 20px">Remaining</span>
        </div>
        <div class="mt-5">
          <v-row>
            <v-col cols="3" md="3" sm="0"></v-col>
            <v-col cols="6" md="6" sm="12">
              <v-row>
                <v-col cols="6" md="3" sm="6">
                  <span style="font-size: 40px">{{ dayCount }}</span>
                  <br />
                  Days
                </v-col>
                <v-col cols="6" md="3" sm="6">
                  <span style="font-size: 40px">{{ hrCount }}</span>
                  <br />
                  Hours
                </v-col>
                <v-col cols="6" md="3" sm="6">
                  <span style="font-size: 40px">{{ minCount }}</span>
                  <br />
                  Minutes
                </v-col>
                <v-col cols="6" md="3" sm="6">
                  <span style="font-size: 40px">{{ secCount }}</span>
                  <br />
                  Seconds
                </v-col>
              </v-row>
            </v-col>
            <v-col cols="3" md="3" sm="0"></v-col>
          </v-row>
        </div>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12" sm="12">
        <v-card
          :width="$vuetify.display.smAndDown ? '80%' : '40%'"
          flat
          class="mx-auto text-start"
        >
          <span style="font-size: 20px">FOR THE WEDDING OF</span>
          <br />
          <br />
          <span style="font-size: 50px"
            >NUTCHITA & <br />
            NUTTHAPON</span
          >
          <br />
          <br />
          <span style="font-size: 20px">ณ สมาคมชาวไร่อ้อย เขต 6 กำแพงเพชร</span>
        </v-card>
      </v-col>
    </v-row>

    <v-container>
      <swiper
        :slides-per-view="$vuetify.display.smAndDown ? 1 : 4"
        :spaceBetween="30"
        :centeredSlides="false"
        :autoplay="{
          delay: 3000,
          disableOnInteraction: false,
        }"
        :navigation="false"
        :modules="modules"
        class="mySwiper"
      >
        <swiper-slide v-for="(image, index) in images" :key="index">
          <img
            :src="image.src"
            :style="
              $vuetify.display.smAndDown
                ? 'width: 335px; height: auto'
                : $vuetify.display.mdAndDown
                ? 'width: 200px; height: auto'
                : 'width: 290px; height: auto'
            "
          />
        </swiper-slide>
      </swiper>
    </v-container>

    <v-row class="mt-10">
      <v-col cols="12" md="12" sm="12">
        <span style="font-size: 40px"><u>พิธีการ&กำหนดการ</u></span>
      </v-col>

      <v-col cols="12" md="12" sm="12">
        <v-img
          src="../assets/schedule/Nat2.png"
          max-width="1200px"
          class="mx-auto"
        ></v-img>
      </v-col>
    </v-row>

    <v-container>
      <swiper
        :slides-per-view="$vuetify.display.smAndDown ? 1 : 4"
        :spaceBetween="30"
        :centeredSlides="false"
        :autoplay="{
          delay: 2500,
          disableOnInteraction: false,
        }"
        :navigation="false"
        :modules="modules"
        class="mySwiper"
      >
        <swiper-slide v-for="(image, index) in images1" :key="index">
          <img
            :src="image.src"
            :style="
              $vuetify.display.smAndDown
                ? 'width: 335px; height: auto'
                : $vuetify.display.mdAndDown
                ? 'width: 200px; height: auto'
                : 'width: 290px; height: auto'
            "
          />
        </swiper-slide>
      </swiper>
    </v-container>
  </v-responsive>
</template>

<script>
import { Virtual } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },

  setup() {
    const slides = Array.from({ length: 1000 }).map(
      (el, index) => `Slide ${index + 1}`
    );
    return {
      slides,
      Virtual,
      modules: [Autoplay, Pagination, Navigation],
    };
  },
  data() {
    return {
      countdown: "",
      dayCount: "",
      hrCount: "",
      minCount: "",
      secCount: "",

      currentIndex: 0,
      images: [
        {
          src: new URL("@/assets/slidePic/1.jpeg", import.meta.url).href,
        },
        {
          src: new URL("@/assets/slidePic/2.jpeg", import.meta.url).href,
        },
        {
          src: new URL("@/assets/slidePic/3.jpeg", import.meta.url).href,
        },
        {
          src: new URL("@/assets/slidePic/4.jpeg", import.meta.url).href,
        },
        {
          src: new URL("@/assets/slidePic/5.jpeg", import.meta.url).href,
        },
        {
          src: new URL("@/assets/slidePic/6.jpeg", import.meta.url).href,
        },
        {
          src: new URL("@/assets/slidePic/7.jpeg", import.meta.url).href,
        },
        {
          src: new URL("@/assets/slidePic/8.jpeg", import.meta.url).href,
        },
        {
          src: new URL("@/assets/slidePic/9.jpeg", import.meta.url).href,
        },
        {
          src: new URL("@/assets/slidePic/10.jpeg", import.meta.url).href,
        },
        {
          src: new URL("@/assets/slidePic/11.jpeg", import.meta.url).href,
        },
        {
          src: new URL("@/assets/slidePic/12.jpeg", import.meta.url).href,
        },
        {
          src: new URL("@/assets/slidePic/13.jpeg", import.meta.url).href,
        },
        {
          src: new URL("@/assets/slidePic/14.jpeg", import.meta.url).href,
        },
        {
          src: new URL("@/assets/slidePic/15.jpeg", import.meta.url).href,
        },
        {
          src: new URL("@/assets/slidePic/16.jpeg", import.meta.url).href,
        },
        {
          src: new URL("@/assets/slidePic/17.jpeg", import.meta.url).href,
        },
        {
          src: new URL("@/assets/slidePic/18.jpeg", import.meta.url).href,
        },
        {
          src: new URL("@/assets/slidePic/19.jpeg", import.meta.url).href,
        },
        {
          src: new URL("@/assets/slidePic/20.jpeg", import.meta.url).href,
        },
        {
          src: new URL("@/assets/slidePic/21.jpeg", import.meta.url).href,
        },
        {
          src: new URL("@/assets/slidePic/22.jpeg", import.meta.url).href,
        },
        {
          src: new URL("@/assets/slidePic/23.jpeg", import.meta.url).href,
        },
        {
          src: new URL("@/assets/slidePic/24.jpeg", import.meta.url).href,
        },
        {
          src: new URL("@/assets/slidePic/25.jpeg", import.meta.url).href,
        },
        {
          src: new URL("@/assets/slidePic/26.jpeg", import.meta.url).href,
        },
        {
          src: new URL("@/assets/slidePic/27.jpeg", import.meta.url).href,
        },
        {
          src: new URL("@/assets/slidePic/28.jpeg", import.meta.url).href,
        },
        {
          src: new URL("@/assets/slidePic/29.jpeg", import.meta.url).href,
        },
      ],
      images1: [
        {
          src: new URL("@/assets/slidePic/30.jpeg", import.meta.url).href,
        },
        {
          src: new URL("@/assets/slidePic/31.jpeg", import.meta.url).href,
        },
        {
          src: new URL("@/assets/slidePic/32.jpeg", import.meta.url).href,
        },
        {
          src: new URL("@/assets/slidePic/33.jpeg", import.meta.url).href,
        },
        {
          src: new URL("@/assets/slidePic/34.jpeg", import.meta.url).href,
        },
        {
          src: new URL("@/assets/slidePic/35.jpeg", import.meta.url).href,
        },
        {
          src: new URL("@/assets/slidePic/36.jpeg", import.meta.url).href,
        },
        {
          src: new URL("@/assets/slidePic/37.jpeg", import.meta.url).href,
        },
        {
          src: new URL("@/assets/slidePic/38.jpeg", import.meta.url).href,
        },
        {
          src: new URL("@/assets/slidePic/39.jpeg", import.meta.url).href,
        },
        {
          src: new URL("@/assets/slidePic/40.jpeg", import.meta.url).href,
        },
        {
          src: new URL("@/assets/slidePic/41.jpeg", import.meta.url).href,
        },
        {
          src: new URL("@/assets/slidePic/42.jpeg", import.meta.url).href,
        },
        {
          src: new URL("@/assets/slidePic/43.jpeg", import.meta.url).href,
        },
        {
          src: new URL("@/assets/slidePic/44.jpeg", import.meta.url).href,
        },
        {
          src: new URL("@/assets/slidePic/45.jpeg", import.meta.url).href,
        },
        {
          src: new URL("@/assets/slidePic/46.jpeg", import.meta.url).href,
        },
        {
          src: new URL("@/assets/slidePic/47.jpeg", import.meta.url).href,
        },
        {
          src: new URL("@/assets/slidePic/48.jpeg", import.meta.url).href,
        },
        {
          src: new URL("@/assets/slidePic/49.jpeg", import.meta.url).href,
        },
      ],
    };
  },

  async created() {
    this.countDownTime();
  },

  mounted() {},

  methods: {
    countDownTime() {
      const targetDate = new Date("2024-06-02T08:00:00").getTime();
      const timer = setInterval(() => {
        const now = new Date().getTime();
        const distance = targetDate - now;
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        this.countdown = `${days}d ${hours}h ${minutes}m ${seconds}s`;
        this.dayCount = days;
        this.hrCount = hours;
        this.minCount = minutes;
        this.secCount = seconds;
        if (distance < 0) {
          clearInterval(timer);
          this.countdown = "Congratulations";
        }
      }, 1000);
    },
  },
};
</script>
