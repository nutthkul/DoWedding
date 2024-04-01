<template>
  <v-responsive class="align-center text-center fill-height">
    <div>
      <v-img src="../assets/Banner.jpeg" class="mx-auto"></v-img>
    </div>
    <div class="wrapper_presence">
      <div class="request_txt mt-15">Request the honer of your presence</div>
      <br />
      <div class="celeb_txt">TO CELEBRATE OUR MARRIAGE</div>
      <br />
      <div class="request_txt mt-n5">02 JUNE 2024</div>
      <br />
      <div class="chapter_txt">#DONATNEWCHAPTER</div>
    </div>

    <v-card
      :class="$vuetify.display.smAndDown ? 'pa-3' : 'pa-10'"
      style="background-color: #f6f6f6"
      flat
    >
      <!-- <v-card :class="$vuetify.display.smAndDown ? 'pa-3' : 'pa-10'" flat> -->
      <v-row class="mt-4 mb-4">
        <v-col cols="6" class="pa-4">
          <!-- <v-card
            :class="
              $vuetify.display.smAndDown
                ? 'pa-2 card_rounded'
                : 'pa-6 card_rounded'
            "
            rounded
            height="100%"
            elevation="3"
          > -->
          <v-img
            class="title_img img_hover_zoom1"
            src="/src/assets/slidePic/35.jpeg"
            :style="
              $vuetify.display.smAndDown
                ? 'display: flex; align-items: flex-end'
                : ''
            "
          >
            <div class="wrapper_txt_title_img">
              <span class="name_profile_txt mt-10 mb-10"
                >Nutthapon Kulkrittayarat</span
              >
            </div>
          </v-img>
          <!-- </v-card> -->
        </v-col>
        <v-col cols="6" class="pa-4">
          <!-- <v-card
            :class="
              $vuetify.display.smAndDown
                ? 'pa-2 card_rounded'
                : 'pa-6 card_rounded'
            "
            height="100%"
            elevation="3"
          > -->
          <v-img
            class="title_img img_hover_zoom1"
            src="/src/assets/slidePic/36.jpeg"
            :style="
              $vuetify.display.smAndDown
                ? 'display: flex; align-items: flex-end'
                : ''
            "
          >
            <div class="wrapper_txt_title_img">
              <span class="name_profile_txt mt-10 mb-10 font-weight-bold"
                >Nutchita Saksupawattanakul</span
              >
            </div>
          </v-img>
          <!-- </v-card> -->
        </v-col>
      </v-row>
    </v-card>

    <div class="wrapper_presence">
      <div class="request_txt">HERE'S A SNEAK PEEK OF</div>
      <br />
      <div class="celeb_txt">OUR SPECIAL DAY'S <br />SCHEDULE</div>

      <div class="wrapper_grid mb-16 pa-10">
        <div class="img_icon">
          <img src="/src/assets/iconWedding1.png" />
          <br />
          <div class="icon_txt">
            08.09 AM
            <br />
            Khan maak Procession
          </div>
        </div>

        <div class="img_icon">
          <img src="/src/assets/iconWedding2.png" />
          <br />
          <div class="icon_txt">
            09.09 AM
            <br />
            The Engagement
          </div>
        </div>

        <div class="img_icon">
          <img src="/src/assets/iconWedding3.png" />
          <br />
          <div class="icon_txt">
            09.39 AM
            <br />
            Tea Ceremony
          </div>
        </div>

        <div class="img_icon">
          <img src="/src/assets/iconWedding4.png" />
          <br />
          <div class="icon_txt">
            18.00 AM
            <br />
            Wedding Ceremony
          </div>
        </div>
      </div>
    </div>

    <v-card
      :class="$vuetify.display.smAndDown ? 'pa-3' : 'pa-10'"
      style="background-color: #f6f6f6"
      flat
    >
      <div class="wedding_theme_txt mt-6">WEDDING THEME</div>
      <div class="dress_code_txt">#DRESS CODE</div>
      <v-img
        src="../assets/dress_code_item.png"
        class="mx-auto mt-6 mb-6"
      ></v-img>
    </v-card>

    <div class="pa-16 pb-7">
      <span
        :style="
          $vuetify.display.smAndDown
            ? ' font-size: 18px; font-weight: 400'
            : ' font-size: 38px; font-weight: 400'
        "
        style="font-family: 'Nanum Myeongjo', serif; font-weight: 500"
        >OUR WEDDING GALLERY</span
      >
    </div>

    <div class="mb-10">
      <swiper
        :slides-per-view="$vuetify.display.smAndDown ? 3 : 5"
        :spaceBetween="$vuetify.display.smAndDown ? 15 : 20"
        :centeredSlides="false"
        :autoplay="{
          delay: 0,
          disableOnInteraction: false,
        }"
        :navigation="false"
        :modules="modules"
        class="mySwiper wrapper_slide"
        speed="2000"
      >
        <swiper-slide v-for="(image, index) in images" :key="index">
          <img
            class="img_slide img_hover_zoom"
            :src="image.src"
            :style="
              $vuetify.display.smAndDown
                ? 'width: 100%; height: auto'
                : $vuetify.display.mdAndDown
                ? 'width: 100%; height: auto'
                : 'width: 100%; height: auto'
            "
          />
        </swiper-slide>
      </swiper>
    </div>

    <div class="mb-5">
      <span
        :style="
          $vuetify.display.smAndDown
            ? ' font-size: 22px; font-weight: 400'
            : ' font-size: 38px; font-weight: 400'
        "
        style="font-family: 'Nanum Myeongjo', serif; font-weight: 500"
        >Click here to get the map</span
      >
    </div>

    <v-row class="pa-5">
      <v-col cols="12" md="12" lg="12" xl="12">
        <v-card class="mx-auto mb-15 card_map" max-width="1000">
          <a
            href="https://maps.app.goo.gl/JNRwjb3ctpqVXBKK8?g_st=il"
            target="_blank"
          >
            <v-img
              height="auto"
              src="../assets/mapKhampheang6.jpeg"
              cover
              class="mx-auto img_map"
            ></v-img>
          </a>

          <v-card-title class="mt-8 txt_map">
            Canegrowers Association of Region 6 Kamphaengphet
          </v-card-title>

          <v-card-title class="mb-8 txt_map">
            สมาคมชาวไร่อ้อยเขต 6 กำแพงเพชร
          </v-card-title>
        </v-card>
      </v-col>
    </v-row>

    <div style="background-color: #f6f6f6" class="pt-10">
      <span
        :style="
          $vuetify.display.smAndDown
            ? ' font-size: 22px; font-weight: 400'
            : ' font-size: 38px; font-weight: 400'
        "
        style="font-family: 'Nanum Myeongjo', serif; font-weight: 500"
        >Support for our wedding</span
      >
      <v-row class="pa-5 pb-0" style="background-color: #f6f6f6">
        <v-col cols="12" md="12" lg="12" xl="12" class="pb-0">
          <v-card
            flat=""
            class="mx-auto mb-15 card_map1"
            max-width="1000"
            style="background-color: #f6f6f6"
          >
            <v-img
              :width="$vuetify.display.smAndDown ? '80%' : '30%'"
              height="auto"
              src="../assets/pp_qr.png"
              cover
              class="mx-auto img_map1"
            ></v-img>
          </v-card>
        </v-col>
      </v-row>
    </div>

    <!-- <v-card class="mx-auto mb-15 card_map" max-width="1000">
      <a
        href="https://maps.app.goo.gl/JNRwjb3ctpqVXBKK8?g_st=il"
        target="_blank"
      >
        <v-img
          height="auto"
          src="../assets/mapKhampheang6.jpeg"
          cover
          class="mx-auto img_map"
        ></v-img>
      </a>

      <v-card-title class="mt-8">
        Canegrowers Association of Region 6 Kamphaengphet
      </v-card-title>

      <v-card-title class="mb-8"> สมาคมชาวไร่อ้อยเขต 6 กำแพงเพชร </v-card-title>
    </v-card> -->
  </v-responsive>
</template>

<script>
import { Virtual } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { useHead } from "@vueuse/head";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },

  setup() {
    const slides = Array.from({ length: 1000 }).map(
      (el, index) => `Slide ${index + 1}`
    );

    useHead({
      // Can be static or computed
      title: "Donut & Nat",
      meta: [
        {
          name: `Wedding`,
          content: "this about wedding page",
          image: "@/assets/slidePic/1.jpeg",
        },
      ],
    });

    return {
      slides,
      Virtual,
      modules: [Autoplay, Pagination, Navigation],
    };
  },
  data() {
    return {
      show: false,

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
        // {
        //   src: new URL("@/assets/slidePic/24.jpeg", import.meta.url).href,
        // },
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

<style scoped>
.imgOnTitle {
  text-align: center;
  color: #0f0f0f;
  font-size: 50px;
  font-weight: 900;
  position: absolute;
  top: 10%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 0.8 !important;

  @media only screen and (max-width: 1280px) {
    top: 7%;
  }
}

.img_icon img {
  padding: auto;
  height: 120px;
  margin-top: 20px;
  margin-right: 10px;

  @media only screen and (max-width: 1280px) {
    height: 80px;
  }
}

.icon_txt {
  font-size: 2.3vw;
  font-weight: 600;

  @media only screen and (max-width: 1280px) {
    font-size: 3vw;
  }
}

.wrapper_grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  column-gap: 30px !important;
  margin-left: 20px;
  margin-right: 20px;
  justify-content: center;
  @media only screen and (max-width: 1280px) {
    display: block;
  }
}

.wrapper_presence {
  font-family: Nanum Myeongjo;
  text-align: center;
  margin-top: 10%;
  margin-bottom: 50px;
}

.request_txt {
  font-size: 3vw;
  font-weight: 600;
  font-family: Nanum Myeongjo;

  @media only screen and (max-width: 1280px) {
    font-size: 3.5vw;
  }
}

.wedding_theme_txt {
  font-size: 1.7vw;
  font-weight: 400;
  font-family: Nanum Myeongjo;
  @media only screen and (max-width: 1280px) {
    font-size: 3vw;
  }
}

.dress_code_txt {
  font-size: 4.7vw;
  font-weight: 600;
  font-family: Nanum Myeongjo;
  @media only screen and (max-width: 1280px) {
    font-size: 6vw;
  }
}

.celeb_txt {
  font-size: 5vw;
  font-weight: 700;
  /* @media only screen and (max-width: 1280px) {
    font-size: 20px;
  } */
}

.chapter_txt {
  font-size: 1.5vw;
  font-weight: 600;
  margin-top: 5%;

  @media only screen and (max-width: 1280px) {
    font-size: 2.5vw;
    margin-top: auto;
  }
}

.name_profile_txt {
  font-size: 2.7vw;
  font-family: Nanum Myeongjo;
  color: #f6f6f6;

  text-shadow: 1px 0 #888888;
  letter-spacing: 1px;
  font-weight: 900;
}

.column_card {
  display: grid;
  width: 100%;
  height: auto;
  align-content: space-evenly;
  padding: 30px;
  grid-template-columns: 1fr 1fr;
  gap: 20px !important;

  padding-top: 0px !important;

  @media screen and (max-width: 1280px) {
    gap: 10px !important;
    grid-template-columns: 1fr 1fr;
  }
}

.wrapper_card {
  width: 100%;
  margin-bottom: 50px;
  border-radius: 8px;
  padding: auto;

  border: 1px solid #f0f0f0;
  height: auto !important;

  box-shadow: 0 1px 2px -2px rgba(0, 0, 0, 0.16),
    0 3px 6px 0 rgba(0, 0, 0, 0.12), 0 5px 12px 4px rgba(0, 0, 0, 0.09);
}

.img_profile {
  height: auto;
  border-top-left-radius: 8px !important;
  border-top-right-radius: 8px !important;
  margin-bottom: 30px;
}

/* card title img */
.card_rounded {
  border-radius: 12px !important;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}

.title_img {
  margin-top: 12px;
  border-radius: 12px !important;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}

img {
  border-radius: 12px !important;
}

.card_map {
  border-radius: 12px !important;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
}

.card_map1 {
  border-radius: 12px !important;
}

.img_map {
  width: 100%;
  height: auto;
}

.img_map1 {
  border-radius: 12px !important;
  margin-bottom: 10px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
}

.wrapper_slide {
  padding-top: 20px;
  padding-bottom: 20px;
}

.img_slide {
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}

.wrapper_txt_title_img {
  border-radius: 12px;
  backdrop-filter: blur(4px);
  padding-top: 10px;
  padding-bottom: 10px;
  /* color: #000;
  color: rgba(255, 255, 255, 0.667); */
  /* color: #f6f6f6 */
}

.img_hover_zoom {
  transition: transform 0.6s ease;
}

.img_hover_zoom:hover {
  transform: scale(1.07);
}

.img_hover_zoom1 {
  transition: transform 0.8s ease;
}

.img_hover_zoom1:hover {
  transform: scale(1.04);
}

.txt_map {
  font-weight: bold;
  font-size: 20px !important;
  font-family: "Nanum Myeongjo", serif;
}

@media only screen and (max-width: 1024px) {
  .card_map {
    margin-left: 10px !important;
    margin-right: 10px !important;
    border-radius: 12px !important;
  }
  .txt_map {
    font-size: 11.5px !important;
  }
}
</style>
