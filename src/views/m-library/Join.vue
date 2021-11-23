<template>
  <div id="Join" :class="isMobile ? 'bg-mobile' : 'bg-web'">
    <v-container class="fill-height d-flex" fluid>
      <v-row justify="center">
        <v-col cols="12" md="11">
          <h1 style="color: #644117;">
            Sustainable Supply Chain
          </h1>
        </v-col>

        <v-col cols="12" md="11">
          <h3 style="color: #644117;">
            Enhancing sustainability in corporate social responsibility
          </h3>
        </v-col>

        <v-col cols="12" md="11"></v-col>

        <v-col cols="12" md="11">
          <p>
            We support our suppliers to build a stronger competitive
          </p>
          <p>
            edge in order to establish a sound corporate ecosystem and a
          </p>
          <p>
            sustainable supply chain
          </p>
        </v-col>
      </v-row>
      <v-dialog value="true" persistent :width="`${isMobile ? '100%' : '50%'}`">
        <v-card color="rgba(0,0,0,0.8)" class="pa-5">
          <v-card-title class="pa-0 d-flex align-start">
            <h3 class="white--text">
              Login
            </h3>
            <v-spacer></v-spacer>
            <v-btn icon dark @click="$router.push({ name: 'Home' })">
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
          <v-row
            justify="space-around"
            no-gutters
            :class="`ma-2 ${isMobile ? '' : 'mt-10'}`"
          >
            <v-col cols="12" md="5" class="ma-5">
              <v-text-field
                dark
                outlined
                label="Username"
                hide-details=""
                dense
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="5" class="ma-5">
              <v-text-field
                dark
                outlined
                label="Password"
                :type="`${showPassword ? 'text' : 'password'}`"
                dense
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="5" v-if="isMobile">
              <v-btn
                class="pa-0"
                text
                dark
                :block="isMobile"
                @click="showPassword = !showPassword"
              >
                <v-icon>
                  {{
                    showPassword
                      ? 'mdi-checkbox-marked-outline'
                      : 'mdi-checkbox-blank-outline'
                  }}
                </v-icon>
                Show password
              </v-btn>
            </v-col>
            <v-col cols="12" md="5" class="d-flex justify-start">
              <v-btn class="pa-0" text dark :block="isMobile">
                <v-icon>mdi-lock</v-icon>
                Forgot password
              </v-btn>
            </v-col>
            <v-col cols="12" md="5" v-if="!isMobile">
              <v-btn
                class="pa-0"
                text
                dark
                :block="isMobile"
                @click="showPassword = !showPassword"
              >
                <v-icon>
                  {{
                    showPassword
                      ? 'mdi-checkbox-marked-outline'
                      : 'mdi-checkbox-blank-outline'
                  }}
                </v-icon>
                Show password
              </v-btn>
            </v-col>
            <v-col cols="12" md="12" class="d-flex justify-end mt-5">
              <v-btn
                :block="isMobile"
                class="login-botton"
                min-width="100px"
                rounded
                @click="loginSystem"
              >
                Login >
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
    </v-container>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters({
      getLogin: 'Login/getLogin',
    }),
  },
  data() {
    return {
      showPassword: false,
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
    async loginSystem() {
      await this.onLogin(true)
      if (this.getLogin) {
        this.$router.push({ name: 'Main' })
      }
    },
    ...mapActions({
      onLogin: 'Login/onLogin',
    }),
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
