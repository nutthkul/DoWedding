<template>
  <v-responsive class="align-center text-center fill-height">
    <v-row>
      <v-col cols="12" md="12" sm="12">
        <v-img src="../assets/schedule/Nat1.png"></v-img>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" md="4" sm="12">
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

    <v-row>
      <v-col cols="12" md="12" sm="12">
        <span style="font-size: 40px">พิธีการ/กำหนดการ</span>
      </v-col>

      <v-col cols="12" md="12" sm="12">
        <v-img src="../assets/schedule/Nat2.png"></v-img>
      </v-col>
    </v-row>

    <v-container>
      <v-carousel
        v-model="currentIndex"
        :cycle="cycleDuration"
        :interval="slideInterval"
        hide-delimiter-background
      >
        <v-carousel-item v-for="(image, index) in images" :key="index">
          <v-img :src="image"></v-img>
        </v-carousel-item>
      </v-carousel>
    </v-container>
    <!-- <v-row>
        <v-col cols="3" md="3" sm="0"> </v-col>
        <v-col cols="6" md="6" sm="12">
          <span style="font-size: 20px"
            >นายสุธิพงษ์ ศักดิ์สุภาวัฒนกุล <br />
            นางประภัสสร ศักดิ์สุภาวัฒนกุล</span
          >
        </v-col>
        <v-col cols="3" md="3" sm="0"> </v-col>
      </v-row> -->
  </v-responsive>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      countdown: "",
      dayCount: "",
      hrCount: "",
      minCount: "",
      secCount: "",

      currentIndex: 0,
      slideInterval: 5000,
      images: ["../assets/schedule/Nat1.png", "../assets/schedule/Nat2.png"],
    };
  },

  computed: {
    cycleDuration() {
      return this.images.length * this.slideInterval;
    },
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
