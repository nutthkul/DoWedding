<template>
  <v-responsive class="align-center text-center fill-height">
    <div>
      <v-img src="../assets/Banner.jpeg" class="mx-auto"></v-img>

      <!-- <div class="imgOnTitle">
        <div>
          <span style="font-size: 26px; font-weight: 900px; color: black"
            >Remaining</span
          >
        </div>

        <div class="wrapper_grid">
          <div class="timer">
            <span>{{ dayCount }}</span>
            <br />
            <small> Days </small>
          </div>
          <div class="timer">
            <span>{{ hrCount }}</span>
            <br />
            <small> Hours </small>
          </div>

          <div class="timer">
            <span>{{ minCount }}</span>
            <br />
            <small> Minutes </small>
          </div>
          <div class="timer">
            <span>{{ secCount }}</span>
            <br />
            <small> Seconds </small>
          </div>
        </div>
        <div style="margin-top: 20px">
          <span
            :style="
              $vuetify.display.smAndDown
                ? ' font-size: 60px; font-weight: bold'
                : ' font-size: 100px; font-weight: bold'
            "
            >02</span
          >
          <v-card
            :width="$vuetify.display.smAndDown ? '20%' : '40%'"
            flat
            class="mx-auto"
          >
            <v-divider :thickness="11" color="error"></v-divider>
          </v-card>
          <span
            :style="
              $vuetify.display.smAndDown
                ? ' font-size: 60px; font-weight: bold'
                : ' font-size: 100px; font-weight: bold'
            "
            >06</span
          >

          <v-card
            :width="$vuetify.display.smAndDown ? '20%' : '10%'"
            flat
            class="mx-auto"
          >
          </v-card>
        </div>
      </div> -->
    </div>
    <div class="wrapper_presence">
      <div class="request_txt mt-15">Request the honer of your presence</div>
      <br />
      <div class="celeb_txt">TO CELEBRATE OUR MARRIAGE</div>
      <br />
      <div class="request_txt mt-n5">02 JUNE 2024</div>
      <br />
      <div class="chapter_txt">#DONUTNEWCHAPTER</div>
    </div>

    <!-- <v-img src="../assets/requestPresence.png" class="mx-auto"></v-img> -->

    <!-- <v-row>
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
    </v-row> -->
    <!-- <div class="column_card">
      <div class="wrapper_card">
        <div class="img_profile">
          <div class="name_profile_txt mt-10 mb-10">
            Nutthapon Kulkrittayarat
          </div>
          <img src="/src/assets/slidePic/35.jpeg" />
        </div>
      </div>

      <div class="wrapper_card">
        <div class="img_profile">
          <div class="name_profile_txt mt-10 mb-10">
            Nutchita Saksupawattanakul
          </div>
          <img src="/src/assets/slidePic/36.jpeg" />
        </div>
      </div>
    </div> -->

    <v-card
      :class="$vuetify.display.smAndDown ? 'pa-3' : 'pa-10'"
      style="background-color: #f6f6f6"
      flat
    >
      <v-row class="mt-4 mb-4">
        <v-col cols="6" class="ml-2">
          <v-card
            :class="$vuetify.display.smAndDown ? 'pa-2' : 'pa-6'"
            rounded="0"
            height="100%"
            elevation="3"
          >
            <span class="name_profile_txt">Nutthapon Kulkrittayarat</span>
            <v-img src="/src/assets/slidePic/35.jpeg" />
          </v-card>
        </v-col>
        <v-col cols="6" class="ml-n2">
          <v-card
            :class="$vuetify.display.smAndDown ? 'pa-2' : 'pa-6'"
            rounded="0"
            height="100%"
            elevation="3"
          >
            <span class="name_profile_txt">Nutchita Saksupawattanakul</span>
            <v-img src="/src/assets/slidePic/36.jpeg" />
          </v-card>
        </v-col>
      </v-row>
    </v-card>

    <div class="wrapper_presence">
      <div class="request_txt">HERE'S A SNEAK PEEK OF</div>
      <br />
      <div class="celeb_txt">OUR SPECIAL DAY'S <br />SHELDULE</div>

      <div class="wrapper_grid mt-16 mb-16">
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
            The Egagement
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

    <!-- <v-img src="../assets/profile.jpeg" class="mx-auto"></v-img> -->

    <!-- <v-img
      v-if="!$vuetify.display.smAndDown"
      src="../assets/specialDays.png"
      class="mx-auto"
    ></v-img>

    <v-img
      v-if="$vuetify.display.smAndDown"
      src="../assets/specialDays1.png"
      class="mx-auto"
    ></v-img> -->

    <v-img src="../assets/dressCode.png" class="mx-auto"></v-img>

    <!-- <v-row class="mt-10">
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
    </v-row> -->

    <div class="pa-16">
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
        :slides-per-view="$vuetify.display.smAndDown ? 4 : 5"
        :spaceBetween="10"
        :centeredSlides="false"
        :autoplay="{
          delay: 0,
          disableOnInteraction: false,
        }"
        :navigation="false"
        :modules="modules"
        class="mySwiper"
        speed="2000"
      >
        <swiper-slide v-for="(image, index) in images" :key="index">
          <img
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

    <div>
      <a
        href="https://maps.app.goo.gl/JNRwjb3ctpqVXBKK8?g_st=il"
        target="_blank"
      >
        <v-img src="../assets/mapKhampheang6.jpeg" class="mx-auto"></v-img>
      </a>
    </div>

    <v-card width="auto" class="pa-6" flat color="#F5F5F5">
      <a
        href="https://maps.app.goo.gl/JNRwjb3ctpqVXBKK8?g_st=il"
        target="_blank"
        style="text-decoration: none; color: #000"
      >
        <div class="mt-3 mb-5">
          <span
            :style="
              $vuetify.display.smAndDown
                ? 'font-size: 14px'
                : 'font-size: 24px; height: auto'
            "
            style="font-family: 'Nanum Myeongjo', serif"
          >
            Canegrowers Association of Region 6 Kamphaengphet <br />
          </span>
          <span
            :style="
              $vuetify.display.smAndDown
                ? 'font-size: 14px'
                : 'font-size: 24px; height: auto'
            "
            style="font-family: 'Kanit', sans-serif; font-weight: 200"
          >
            สมาคมชาวไร่อ้อยเขต 6 กำแพงเพชร
          </span>
        </div>
        <v-img
          :width="$vuetify.display.smAndDown ? '30%' : '15%'"
          height="auto"
          src="../assets/qrKham6.png"
          class="mx-auto"
        ></v-img>
      </a>
    </v-card>
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
  font-size: 30px;
  font-weight: 600;

  @media only screen and (max-width: 1280px) {
    font-size: 15px;
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

  /* @media only screen and (max-width: 1280px) {
    font-size: 24px;
  }
  @media only screen and (max-width: 600px) {
    font-size: 14px;
  } */
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

  /* @media only screen and (max-width: 1280px) {
    font-size: 12px;
    margin-top: auto;
  } */
}

.name_profile_txt {
  font-size: 2.7vw;
  font-weight: 300;

  /* @media only screen and (max-width: 1280px) {
    font-size: 12px;
    margin-top: auto;
  } */
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
</style>
