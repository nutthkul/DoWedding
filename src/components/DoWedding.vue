<template>
  <v-responsive class="align-center text-center fill-height bgColor">
    <div>
      <v-img src="../assets/Banner.jpeg" class="mx-auto"></v-img>
    </div>
    <div class="wrapper_presence">
      <div class="request_txt">With joyful hearts we invite you</div>
      <br />
      <div class="celeb_txt">TO CELEBRATE OUR WEDDING</div>
      <br />
      <div style="font-size: 2vw; font-weight: ">02 JUNE 2024</div>
      <br />
      <div class="chapter_txt">#DoNatNewChapter</div>
    </div>

    <div class="wrapper_profile">
      <img src="../assets/slidePic/33.jpeg" />

      <div class="nickname1_txtImg">
        <div
          style="
            font-size: 9vw;
            font-weight: 500;
            color: transparent;
            text-shadow: 0 0 2px #f6f6f6;
          "
        >
          Doughnut
        </div>
      </div>

      <div class="nickname2_txtImg">
        <div
          style="
            font-size: 9vw;
            font-weight: 500;
            color: transparent;
            text-shadow: 0 0 2px #f6f6f6;
          "
        >
          Nat
        </div>
      </div>

      <div class="doughnut_txtImg">
        <div style="font-size: 4vw">Nutthapon</div>

        <div style="font-size: 4vw">Kulkrittayarat</div>
      </div>
      <div class="nat_txtImg">
        <div style="font-size: 4vw">Nutchita</div>

        <div style="font-size: 4vw">Saksupawattanakul</div>
      </div>
    </div>

    <!-- <v-card
      :class="$vuetify.display.smAndDown ? 'pa-3' : 'pa-10'"
      style="background-color: #f6f6f6"
      flat
    >
      <v-card :class="$vuetify.display.smAndDown ? 'pa-3' : 'pa-10'" flat>
        <v-row class="mt-4 mb-4">
          <v-col cols="6" class="pa-4">
            <v-card
              :class="
                $vuetify.display.smAndDown
                  ? 'pa-2 card_rounded'
                  : 'pa-6 card_rounded'
              "
              rounded
              height="100%"
              elevation="3"
            >
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
            </v-card>
          </v-col>
          <v-col cols="6" class="pa-4">
            <v-card
              :class="
                $vuetify.display.smAndDown
                  ? 'pa-2 card_rounded'
                  : 'pa-6 card_rounded'
              "
              height="100%"
              elevation="3"
            >
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
            </v-card>
          </v-col>
        </v-row>
      </v-card>
    </v-card> -->

    <div class="wrapper_presence">
      <div class="request_txt">HERE'S A SNEAK PEEK OF</div>
      <br />
      <div class="celeb_txt">OUR SPECIAL DAY'S <br />SCHEDULE</div>

      <div class="wrapper_grid pa-10" style="margin-bottom: 200px">
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

    <div>
      <div class="img_dress">
        <img class="img_bgDress" src="../assets/slidePic/22.jpeg" />
        <div class="wrapper_theme">
          <div class="wedding_theme_txt">WEDDING THEME</div>
          <div class="dress_code_txt mb-16">#DRESS CODE</div>
          <div class="grid_theme1" v-if="!$vuetify.display.smAndDown">
            <div>
              <img class="img_theme" src="../assets/THEME3.png" />
              <br />
              <div class="font_color">#A35105</div>
            </div>

            <div>
              <img class="img_theme" src="../assets/THEME1.png" />
              <br />
              <div class="font_color">#EDC796</div>
            </div>

            <div>
              <img class="img_theme" src="../assets/THEME2.png" />
              <br />
              <div class="font_color">#B9CFBA</div>
            </div>
          </div>

          <div class="grid_theme2" v-if="!$vuetify.display.smAndDown">
            <div>
              <img class="img_theme" src="../assets/THEME4.png" />
              <br />
              <div class="font_color">#EBBCC4</div>
            </div>

            <div>
              <img class="img_theme" src="../assets/THEME5.png" />
              <br />
              <div class="font_color">#B52F35</div>
            </div>
          </div>

          <!-- mobile resposive Dress theme -->

          <div class="grid_mobile" v-if="$vuetify.display.smAndDown">
            <div>
              <img class="img_theme" src="../assets/THEME3.png" />
              <br />
              <div class="font_color">#A35105</div>
            </div>

            <div>
              <img class="img_theme" src="../assets/THEME1.png" />
              <br />
              <div class="font_color">#EDC796</div>
            </div>

            <div>
              <img class="img_theme" src="../assets/THEME2.png" />
              <br />
              <div class="font_color">#B9CFBA</div>
            </div>

            <div>
              <img class="img_theme" src="../assets/THEME4.png" />
              <br />
              <div class="font_color">#EBBCC4</div>
            </div>

            <div>
              <img class="img_theme" src="../assets/THEME5.png" />
              <br />
              <div class="font_color">#B52F35</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- <v-card
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
    </v-card> -->

    <div class="pa-16 pb-7 mb-1 mt-16">
      <span
        :style="
          $vuetify.display.smAndDown
            ? ' font-size: 14px; font-weight: 400'
            : ' font-size: 20px; font-weight: 400'
        "
        style="font-family: Sree Krushnadevaraya; font-weight: 400"
      >
        MEMORIES
      </span>
      <br />
      <span
        :style="
          $vuetify.display.smAndDown
            ? ' font-size: 20px; font-weight: 400'
            : ' font-size: 40px; font-weight: 400'
        "
        style="font-family: Sree Krushnadevaraya; font-weight: 800"
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

    <div class="mt-16">
      <div style="font-size: 2.3vw; font-family: Sree Krushnadevaraya">
        WE CAN’T WAIT TO SEE YOU!
      </div>
      <div
        class="mb-16"
        style="font-size: 6vw; font-family: Sree Krushnadevaraya"
      >
        THE VENUE
      </div>
      <div class="img_venue">
        <img src="../assets/Vanueu.png" />
      </div>
      <div
        class="mb-10 mt-6"
        style="
          font-size: 2.5vw;
          font-family: Sree Krushnadevaraya;
          font-weight: 400;
        "
      >
        Canegrowers Association of Region 6, Kamphaengphet
        <br />สมาคมชาวไร่อ้อยเขต 6 กำแพงเพชร
      </div>

      <div class="btn_google mb-16">
        <button
          onclick="window.open('https://maps.app.goo.gl/JNRwjb3ctpqVXBKK8?g_st=il', '_blank')"
        >
          Open Google Map
        </button>
      </div>
    </div>

    <!-- <v-row class="pa-5">
      <v-col cols="12" md="12" lg="12" xl="12">
        <v-card class="mx-auto mb-15 card_map" max-width="1000">
          <div class="mb-5 mt-5">
            <span
              :style="
                $vuetify.display.smAndDown
                  ? ' font-size: 22px; font-weight: 400'
                  : ' font-size: 38px; font-weight: 400'
              "
              style="font-family: 'Nanum Myeongjo', serif; font-weight: 550"
              >Click here to get the map</span
            >
          </div>
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
    </v-row> -->

    <div>
      <div class="img_support">
        <img src="../assets/27crop.jpeg" />
        <div class="support_txtImg">
          <div style="font-size: 4vw; font-family: Sree Krushnadevaraya">
            To our family and friends
          </div>
          <div
            class="mt-10"
            style="font-size: 2.5vw; font-family: Sree Krushnadevaraya"
          >
            Thank you for your love, support, and for being a part of our
            special day. We love you all dearly.
            <br />
            <div class="mt-12">
              With love,
              <br />
              Doughnut & Nat
            </div>
            <br />
            <div>
              <div style="font-size: 2vw; font-family: Sree Krushnadevaraya">
                Join in congratulating
              </div>
              <v-img
                :width="$vuetify.display.smAndDown ? '30%' : '20%'"
                height="auto"
                src="../assets/pp_qr.png"
                cover
                class="mx-auto img_map1"
              ></v-img>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- <div style="background-color: #f6f6f6" class="pt-10">
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

            <span
              :style="
                $vuetify.display.smAndDown
                  ? ' font-size: 18px; font-weight: 400'
                  : ' font-size: 22px; font-weight: 400'
              "
              style="font-family: 'Nanum Myeongjo', serif; font-weight: 500"
              >PROMTPAY : xxx-x-x8897-x
              <br />
              <span
                :style="
                  $vuetify.display.smAndDown
                    ? ' font-size: 18px; font-weight: 400'
                    : ' font-size: 22px; font-weight: 400'
                "
                style="font-family: 'Nanum Myeongjo', serif; font-weight: 500"
              >
                น.ส. ณัฐชิตา ศักดิ์สุภาวัฒนกุล
              </span>
            </span>
          </v-card>
        </v-col>
      </v-row>
    </div> -->

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
.bgColor {
  background-color: #fbf7ee;
}

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
  font-size: 1.7vw;
  font-weight: 600;
  font-family: Nanum Myeongjo;
  margin-top: 80px;

  @media only screen and (max-width: 1280px) {
    font-size: 3.5vw;
    margin-top: auto;
  }
}

/* Dress Theme */

.img_dress {
  width: 100%;
  position: relative;
}

.wrapper_theme {
  position: absolute;
  top: 10% !important;
  left: 12%;
  justify-content: center;

  @media only screen and (max-width: 1240px) {
    top: 10% !important;
    left: 28% !important;
  }

  @media only screen and (max-width: 900px) {
    top: 10% !important;
    left: 25% !important;
  }

  @media only screen and (max-width: 500px) {
    top: 10% !important;
    left: 10% !important;
  }

  @media only screen and (max-width: 400px) {
    top: 10% !important;
    left: 6% !important;
  }
}

.img_bgDress {
  height: 1250px;
  width: 100%;
  object-fit: cover;
  object-position: center bottom;

  @media only screen and (max-width: 1280px) {
    height: 600px;

    object-fit: cover;
    object-position: center bottom;
  }
  @media only screen and (max-width: 900px) {
    height: 400px;

    object-fit: cover;
    object-position: center bottom;
  }

  @media only screen and (max-width: 500px) {
    height: 300px;

    object-fit: cover;
    object-position: center bottom;
  }

  @media only screen and (max-width: 400px) {
    height: 300px;

    object-fit: cover;
    object-position: center bottom;
  }
}

.img_theme {
  padding: auto;
  height: 210px;
  margin-top: 20px;
  margin-right: 10px;

  @media only screen and (max-width: 1280px) {
    height: 80px;
  }

  @media only screen and (max-width: 900px) {
    height: 50px;
  }

  @media only screen and (max-width: 500px) {
    height: 50px;
  }
}

.grid_theme1 {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr !important;
  column-gap: 300px !important;
  margin-top: 30px;

  justify-content: center;

  @media only screen and (max-width: 1280px) {
    column-gap: 30px !important;
  }
}

.grid_theme2 {
  display: grid;
  grid-template-columns: 2fr 2fr;
  gap: 20px;
}

.grid_mobile {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr !important;
  column-gap: 10px !important;
  margin-top: 30px;

  justify-content: center;
}

.font_color {
  font-family: Nanum Myeongjo;
  font-size: 3.3vw;
  font-weight: 600;

  @media only screen and (max-width: 1280px) {
    font-size: 2vw;
  }
}

.wedding_theme_txt {
  font-size: 1.7vw;
  font-weight: 900;
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
  font-size: 4vw;
  font-weight: 700;
  /* @media only screen and (max-width: 1280px) {
    font-size: 20px;
  } */
}

.chapter_txt {
  font-size: 1vw;
  font-weight: 600;
  margin-top: 6%;
  margin-bottom: 12.5%;

  @media only screen and (max-width: 1280px) {
    font-size: 2.5vw;
    margin-top: auto;
    margin-bottom: auto;
  }
}

/* profile */

.doughnut_txtImg {
  font-family: Playfair Display;

  color: white;
  text-align: right;

  top: 36%;
  left: 85%;

  position: absolute;
  transform: translate(-50%, -50%);
}

.nickname1_txtImg {
  font-family: Playfair Display;

  color: white;
  text-align: left;

  top: 25%;
  left: 77%;

  position: absolute;
  transform: translate(-50%, -50%);
}

.nickname2_txtImg {
  font-family: Playfair Display;

  color: white;
  text-align: left;

  bottom: 10%;
  left: 10%;

  position: absolute;
  transform: translate(-50%, -50%);
}

.nat_txtImg {
  font-family: Playfair Display;

  color: white;
  text-align: left;

  bottom: 1%;
  left: 25%;

  position: absolute;
  transform: translate(-50%, -50%);
}

.wrapper_profile {
  width: 100%;
  position: relative;

  @media screen and (max-width: 1280px) {
    padding: 10px 10px;
  }
}

.wrapper_profile img {
  height: 1650px;
  width: 100%;
  object-fit: cover;
  object-position: center top;

  @media screen and (max-width: 1280px) {
    height: 1100px;
    object-fit: cover;
    object-position: center top;
  }

  @media screen and (max-width: 900px) {
    height: 700px;
    object-fit: cover;
    object-position: center top;
  }

  @media screen and (max-width: 500px) {
    height: 350px;
    object-fit: cover;
    object-position: center top;
  }
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
  border-radius: 4px !important;
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

.img_venue img {
  width: auto;
  object-fit: scale-down;

  @media only screen and (max-width: 1024px) {
    height: auto;
    padding: 35px 30px;

    width: 100%;
  }
}
.btn_google button {
  font-family: Sree Krushnadevaraya;

  width: 200px;
  height: 70px;
  color: #b9ab8e;
  border: 3px solid #b9ab8e;
  border-radius: 20px;
  margin-top: 50px;
  margin-bottom: 100px;

  @media only screen and (max-width: 1024px) {
    height: 45px;
  }
}

/* support */

.support_txtImg {
  color: white;
  text-align: center;
  top: 52%;
  left: 50%;
  margin-left: 10px;
  position: absolute;
  transform: translate(-50%, -50%);
  opacity: 0.9 !important;
  text-shadow: 0px 0px 8px #0f0f0f;

  @media screen and (max-width: 1280px) {
    top: 50%;
  }
}

.img_support {
  margin-top: 100px;
  width: 100%;
  position: relative;
}

.img_support img {
  height: auto;
  width: 100%;
  filter: invert(20%) saturate(140%) hue-rotate(0deg) brightness(100%);

  @media screen and (max-width: 1280px) {
    height: auto;
  }
}
</style>
