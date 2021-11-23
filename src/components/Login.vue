<template>
  <div id="Login">
    <v-dialog
      v-model="showLogin"
      persistent
      :width="`${isMobile ? '100%' : '50%'}`"
    >
      <v-card color="rgba(0,0,0,0.6)" class="pa-5">
        <v-card-title class="pa-0 d-flex align-start">
          <div :style="`color:#FB8C00;`" class="text-left">
            <h3 v-if="!isMobile">
              Welcome to Samsung
              <br />
              Partner Collaboration Center
            </h3>
            <h5 v-else>
              Welcome to Samsung
              <br />
              Partner Collaboration Center
            </h5>
          </div>
          <v-spacer></v-spacer>
          <v-btn icon @click="dialog = false" dark>
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-card-title>
        <!-- 
        <v-tabs v-model="tab" background-color="transparent">
          <v-tab style="font-weight: 700;">
            {{ `${isMobile ? 'Login' : 'Login for Existing User'}` }}
          </v-tab>
          <v-tab style="font-weight: 700;">
            {{ `${isMobile ? 'Sign Up' : 'Sign Up as a New User'}` }}
          </v-tab>
        </v-tabs> -->

        <!-- <v-tabs-items v-model="tab">
          <v-tab-item> -->
        <v-row justify="space-around" no-gutters class="ma-2">
          <v-col cols="12" md="5">
            <v-text-field
              dark
              label="Username"
              outlined
              hide-details=""
              dense
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="5">
            <v-text-field
              dark
              label="Password"
              type="password"
              outlined
              dense
            ></v-text-field>
          </v-col>
          <v-col md="5"></v-col>
          <v-col cols="12" md="5" class="d-flex justify-end">
            <v-btn text dark :block="isMobile">
              <v-icon>mdi-lock</v-icon>
              Forgot Password
            </v-btn>
          </v-col>
          <v-col cols="12" md="12" class="d-flex justify-end mt-5">
            <v-btn
              :block="isMobile"
              class="login-botton"
              min-width="100px"
              rounded
            >
              Sign in >
            </v-btn>
          </v-col>
        </v-row>
        <!-- </v-tab-item> -->
        <!-- <v-tab-item>
            <v-card>
              <v-card-text>
                <v-row justify="space-around" no-gutters class="ma-2">
                  <v-col cols="12" md="5">
                    <v-text-field
                      label="E-mail Address"
                      placeholder="example@email.com"
                      outlined
                      dense
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" md="5">
                    <v-text-field
                      label="Password"
                      type="password"
                      outlined
                      dense
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" md="5">
                    <v-text-field
                      label="First name"
                      outlined
                      dense
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" md="5">
                    <v-text-field
                      label="Last name"
                      outlined
                      dense
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" md="11">
                    <v-text-field
                      label="Partner name"
                      outlined
                      dense
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" class="mt-5">
                    <v-btn class="login-botton" min-width="100px" rounded dark>
                      Sign up
                    </v-btn>
                  </v-col>
                </v-row>
              </v-card-text>
            </v-card>
          </v-tab-item> -->
        <!-- </v-tabs-items> -->
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  model: {
    prop: 'value',
    event: 'update:setShowLogin',
  },
  props: {
    value: {
      type: Boolean,
      default: false,
    },
  },
  showLogin: {
    get() {
      return this.value
    },
    set(val) {
      this.$emit('update:setShowLogin', val)
    },
  },
  data() {
    return {
      isMobile: false,
      tab: null,
      items: ['Appetizers', 'Entrees', 'Deserts', 'Cocktails'],
      text:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    }
  },
  mounted() {
    this.onResize()
    window.addEventListener('resize', this.onResize, { passive: true })
  },
  methods: {
    onResize() {
      this.isMobile = window.innerWidth < 960
    },
  },
  beforeDestroy() {
    if (typeof window === 'undefined') return

    window.removeEventListener('resize', this.onResize, { passive: true })
  },
}
</script>

<style></style>
