<template>
  <v-responsive class="align-center text-center fill-height bgColor">
    <div>
      <v-img src="../assets/Banner.jpeg" class="mx-auto"></v-img>
    </div>

    <div class="wrapper_presence">
      <v-row>
        <v-col cols="12">
          <div class="request_txt">With joyful hearts we invite you</div>
        </v-col>
        <v-col cols="12">
          <div class="celeb_txt">TO CELEBRATE OUR WEDDING</div>
        </v-col>
        <v-col cols="12">
          <div class="june02_txt">02 JUNE 2024</div>
        </v-col>
        <v-col cols="12">
          <div class="chapter_txt">#DoNatNewChapter</div>
        </v-col>
      </v-row>
    </div>

    <div class="wrapper_profile">
      <img class="img_2" src="../assets/newCosmatic/big-2.png" />

      <div class="nickname1_txtImg">
        <div class="blur_txt">Doughnut</div>
      </div>

      <div class="nickname2_txtImg">
        <div class="blur_txt">Nat</div>
      </div>

      <div class="doughnut_txtImg">
        <div class="nat_txtImg1">Nutthapon</div>

        <div class="nat_txtImg2">Kulkrittayarat</div>
      </div>

      <div class="nat_txtImg">
        <div class="nat_txtImg1">Nutchita</div>

        <div class="nat_txtImg2">Saksupawattanakul</div>
      </div>
    </div>

    <div class="wrapper_presence">
      <v-row>
        <v-col cols="12">
          <div class="timing_txt">TIMING OF THE DAY</div>
        </v-col>
        <v-col cols="12">
          <div class="celeb_txt">OUR SPECIAL DAY’S</div>
          <div class="celeb_txt1">SCHEDULE</div>
        </v-col>
        <v-col cols="12">
          <div class="wrapper_grid">
            <div class="img_icon">
              <img src="/src/assets/iconWedding1.png" />
              <br />
              <div class="time_iconTxt">08.09 AM</div>
              <div class="icon_txt">
                Khan maak
                <br />
                Processions
              </div>
            </div>

            <div class="img_icon">
              <img src="/src/assets/iconWedding2.png" />
              <br />
              <div class="time_iconTxt">09.09 AM</div>
              <div class="icon_txt">The Engagement</div>
            </div>

            <div class="img_icon">
              <img src="/src/assets/iconWedding3.png" />
              <br />
              <div class="time_iconTxt">09.39 AM</div>
              <div class="icon_txt">Tea Ceremony</div>
            </div>

            <div class="img_icon">
              <img src="/src/assets/iconWedding4.png" />
              <br />
              <div class="time_iconTxt">18.00 AM</div>
              <div class="icon_txt">Wedding Ceremony</div>
            </div>
          </div>
        </v-col>
      </v-row>
    </div>

    <div>
      <div class="img_dress">
        <img class="img_bgDress" src="../assets/slidePic/22.jpeg" />
        <div class="wrapper_theme">
          <div class="wedding_theme_txt">WEDDING THEME</div>
          <div class="dress_code_txt">#DRESS CODE</div>
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

    <div class="pa-10 pb-7 mb-1">
      <span
        :style="
          $vuetify.display.smAndDown
            ? ' font-size: 12px; font-weight: 400'
            : ' font-size: 25px; font-weight: 400'
        "
        style="font-family: Sree Krushnadevaraya; margin-bottom: 60px"
      >
        MEMORIES
      </span>
      <br />
      <span
        :style="
          $vuetify.display.smAndDown
            ? ' font-size: 25px; font-weight: 400'
            : ' font-size: 75px; font-weight: 400'
        "
        style="font-family: Sree Krushnadevaraya"
        >OUR WEDDING GALLERY</span
      >
    </div>

    <div class="mb-10">
      <swiper
        :slides-per-view="$vuetify.display.smAndDown ? 3 : 5"
        :spaceBetween="$vuetify.display.smAndDown ? 15 : 30"
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
      <div
        :style="
          $vuetify.display.smAndDown
            ? ' font-size: 12px; font-weight: 400'
            : ' font-size: 25px; font-weight: 400'
        "
        style="font-family: Sree Krushnadevaraya; margin-top: 15%"
      >
        WE CAN’T WAIT TO SEE YOU!
      </div>
      <div
        :style="
          $vuetify.display.smAndDown
            ? ' font-size: 32px; font-weight: 400'
            : ' font-size: 75px; font-weight: 400'
        "
        style="font-family: Sree Krushnadevaraya"
      >
        THE VENUE
      </div>
      <div class="img_venue">
        <img src="../assets/Vanueu.png" />
      </div>
      <div
        :style="
          $vuetify.display.smAndDown
            ? ' font-size: 14px; font-weight: 400'
            : ' font-size: 20px; font-weight: 400'
        "
        class="mt-6"
        style="font-family: Sree Krushnadevaraya"
      >
        Canegrowers Association of Region 6, Kamphaengphet
        <br />
        <div style="font-family: kanit">สมาคมชาวไร่อ้อยเขต 6 กำแพงเพชร</div>
      </div>

      <div class="btn_google">
        <button
          onclick="window.open('https://maps.app.goo.gl/JNRwjb3ctpqVXBKK8?g_st=il', '_blank')"
        >
          Open Google Map
        </button>
      </div>
    </div>

    <div class="img_support">
      <img src="../assets/27crop.jpeg" />
      <div class="support_txtImg">
        <div
          :style="
            $vuetify.display.smAndDown
              ? ' font-size: 16px; font-weight: 400'
              : ' font-size: 40px; font-weight: 400'
          "
          style="font-family: Sree Krushnadevaraya"
        >
          To our family and friends
        </div>
        <div
          :style="
            $vuetify.display.smAndDown
              ? ' font-size: 12px; font-weight: 400'
              : ' font-size: 32px; font-weight: 400'
          "
          class="mt-10"
          style="font-family: Sree Krushnadevaraya"
        >
          Thank you for your love, support,
          <br />
          and for being a part of our special day.
          <br />
          We love you all dearly.
          <div class="mt-12">
            With love,
            <br />
            Doughnut & Nat
          </div>
          <br />
          <div class="margin_qr">
            <div
              :style="
                $vuetify.display.smAndDown
                  ? ' font-size: 10px; font-weight: 400'
                  : ' font-size: 25px; font-weight: 400'
              "
              style="font-family: Sree Krushnadevaraya"
            >
              Join in congratulating
            </div>
            <v-img
              :width="$vuetify.display.smAndDown ? '20%' : '20%'"
              height="auto"
              src="../assets/pp_qr.png"
              cover
              class="mx-auto img_map1"
            ></v-img>
          </div>
        </div>
      </div>
    </div>
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
  /* padding: auto;
  height: 120px;
  margin-top: 20px;
  margin-right: 10px; */
  height: 120px;
  margin-top: 20px;

  @media only screen and (max-width: 1280px) {
    height: 80px;
    margin-top: 20px;
  }
}

.timing_txt {
  font-size: 25px;
  font-weight: 400;
  @media only screen and (max-width: 1280px) {
    font-size: 12px;
    font-weight: 500;
  }
}

.time_iconTxt {
  font-size: 32px;
  font-weight: 400;
  @media only screen and (max-width: 1280px) {
    font-size: 16px;
  }
}

.icon_txt {
  font-size: 24px;
  font-weight: 400;

  @media only screen and (max-width: 1280px) {
    font-size: 15px;
  }
}

.wrapper_grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  margin-left: 80px;
  margin-right: 80px;
  justify-content: center;

  @media only screen and (max-width: 1280px) {
    display: block;
  }
}

.wrapper_presence {
  font-family: Sree Krushnadevaraya;
  text-align: center;
  /* margin-top: 10%;
  margin-bottom: 10%; */
  /* padding: 144px 0px 0px 0px; */
  display: flex;
  align-items: center;
  max-height: 860px !important;
  height: 860px !important;

  @media only screen and (max-width: 1280px) {
    /* padding: 40px 0px 0px 0px;
    margin-top: auto; */
    margin-top: 10%;
    margin-bottom: 10%;
    height: auto !important;
  }
}

.request_txt {
  font-size: 36px;
  font-weight: 500;
  font-family: Nanum Myeongjo;

  @media only screen and (max-width: 1280px) {
    font-size: 12px;
  }
}

/* Dress Theme */

.img_dress {
  width: 100%;
  position: relative;
}

.wrapper_theme {
  position: absolute;
  top: 8% !important;
  left: 22%;
  justify-content: center;

  padding: 60px 0px 0px 0px;

  @media only screen and (max-width: 1280px) {
    top: 18% !important;
    left: 40% !important;
  }

  @media only screen and (max-width: 1024px) {
    top: 12% !important;
    left: 34% !important;
  }

  @media only screen and (max-width: 900px) {
    top: 5% !important;
    left: 28% !important;
  }

  @media only screen and (max-width: 600px) {
    top: 0% !important;
    left: 11% !important;
  }

  @media only screen and (max-width: 400px) {
    top: 0% !important;
    left: 8% !important;
  }
}

.img_bgDress {
  height: 1350px;
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
  height: 240px;
  margin-top: 10px;
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
  column-gap: 150px !important;

  justify-content: center;

  @media only screen and (max-width: 1280px) {
    column-gap: 30px !important;
  }
}

.grid_theme2 {
  display: grid;
  grid-template-columns: 2fr 2fr;
  gap: 5px;
}

.grid_mobile {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr !important;
  column-gap: 10px !important;

  justify-content: center;
}

.font_color {
  font-family: Nanum Myeongjo;
  font-size: 24px;
  font-weight: 400;

  @media only screen and (max-width: 1280px) {
    font-size: 10px;
  }
}

.wedding_theme_txt {
  font-size: 25px;
  font-weight: 400;
  font-family: Sree Krushnadevaraya;
  margin-bottom: 60px;
  @media only screen and (max-width: 1280px) {
    font-size: 12px;
    margin-bottom: auto;
  }
}

.dress_code_txt {
  font-size: 75px;
  font-weight: 600;
  font-family: Nanum Myeongjo;
  margin-bottom: 86px;
  @media only screen and (max-width: 1280px) {
    font-size: 32px;
    margin-bottom: auto;
  }
}

.june02_txt {
  font-size: 50px;
  font-weight: 400;
  @media only screen and (max-width: 1280px) {
    font-size: 15px;
  }
}

.celeb_txt {
  font-size: 75px;
  font-weight: 400;
  @media only screen and (max-width: 1280px) {
    font-size: 22px;
  }
}

.celeb_txt1 {
  font-size: 75px;
  font-weight: 400;
  margin-top: -25px !important;
  @media only screen and (max-width: 1280px) {
    margin-top: auto !important;
    font-size: 22px;
  }
}

.chapter_txt {
  font-size: 25px;
  font-weight: 400;
  margin-top: 5%;

  @media only screen and (max-width: 1280px) {
    font-size: 12px;
    margin-top: auto;
  }
}

/* profile */

.doughnut_txtImg {
  font-family: Playfair Display;

  color: white;
  text-align: right;

  top: 38%;
  left: 86%;

  position: absolute;
  transform: translate(-50%, -50%);
  font-size: 4vw;
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

  bottom: 2%;
  left: 22%;

  position: absolute;
  transform: translate(-50%, -50%);

  font-size: 4vw;
  @media only screen and (max-width: 1280px) {
    transform: translate(-50%, -50%);
  }
}

.nat_txtImg1 {
  margin-top: 40px;

  @media only screen and (max-width: 1280px) {
    margin-top: 0px;
  }

  @media only screen and (max-width: 600px) {
    margin-top: 10px;
  }

  @media only screen and (max-width: 500px) {
    margin-top: 2px;
  }

  @media only screen and (max-width: 400px) {
    margin-top: 5px;
  }
}

.nat_txtImg2 {
  margin-top: -40px;

  @media only screen and (max-width: 1280px) {
    margin-top: -15px;
  }

  @media only screen and (max-width: 600px) {
    margin-top: -13px;
  }

  @media only screen and (max-width: 500px) {
    margin-top: -10px;
  }

  @media only screen and (max-width: 400px) {
    margin-top: -7px;
  }
}

.wrapper_profile {
  width: 100%;
  position: relative;
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
    height: 400px;
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
  border-radius: 12px !important;

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

  filter: invert(15%) saturate(140%) hue-rotate(0deg) brightness(100%);

  @media only screen and (max-width: 1024px) {
    height: auto;
    padding: 35px 30px;

    width: 100%;
  }
}
.btn_google button {
  font-family: Sree Krushnadevaraya;

  width: 274px;
  height: 51px;
  font-size: 20px;
  color: #b9ab8e;
  border: 1px solid #b9ab8e;
  border-radius: 20px;
  margin-top: 50px;
  margin-bottom: 100px;

  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;

  @media only screen and (max-width: 1024px) {
    width: 125px;
    height: 32px;
    font-size: 10px;

    margin-bottom: auto;
  }
}

/* support */

.support_txtImg {
  color: white;
  text-align: center;
  top: 50%;
  left: 50%;

  position: absolute;
  transform: translate(-50%, -50%);
  opacity: 0.9 !important;
  text-shadow: 0px 0px 8px #0f0f0f;

  @media screen and (max-width: 1280px) {
    top: 52%;
  }
}

.img_support {
  margin-top: 30px;
  width: 100%;
  position: relative;
  margin-bottom: -10px;
}

.img_support img {
  height: auto;

  width: 100%;
  filter: invert(20%) saturate(140%) hue-rotate(0deg) brightness(100%);

  @media screen and (max-width: 1280px) {
    height: 650px;
  }

  @media screen and (max-width: 900px) {
    height: 340px;
  }

  @media screen and (max-width: 400px) {
    height: 310px;
  }
}

.margin_qr {
  margin-top: 20%;
  @media screen and (max-width: 1280px) {
    margin-top: auto;
  }
}

.img_2 {
  width: 100% !important;
  height: auto !important;
}

.blur_txt {
  font-size: 9vw;
  font-weight: 500;
  color: transparent;
  text-shadow: 0 0 2px #f6f6f6;

  @media screen and (max-width: 900px) {
    color: white;
    filter: blur(0.5px);
    text-shadow: 0 0 1px #f6f6f6;
  }
}

.memories {
}
</style>
