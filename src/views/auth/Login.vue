<template>
  <v-app>
    <v-row>
      <v-col cols="12" lg="7" xl="6" class="info d-none d-md-flex align-center justify-center">
        <v-container>
          <div class="pa-10 ">
            <v-row justify="center">
              <v-col cols="8" xl="5">
                <div>
                  <h2 class="display-1 white--text font-weight-medium">Welcome to Your Dashboard!</h2>
                  <h6
                      class="subtitle-1 mt-4 white--text op-5 font-weight-regular"
                  ></h6>
                </div>
              </v-col>
            </v-row>
          </div>
        </v-container>
      </v-col>
      <v-col cols="12" lg="5" xl="6" class="d-flex align-center">
        <v-container>
          <div class="pa-7 pa-sm-12">
            <v-row>
              <v-col cols="12" lg="9" xl="6">
                <v-img src="../../assets/logo.png"/>
                <h2 class="font-weight-bold mt-4 blue-grey--text text--darken-2">Sign in</h2>


                <v-form ref="form" v-model="valid" lazy-validation>
                  <v-text-field
                      id="email"
                      @keypress.enter.prevent="handleGoToNext('password')"
                      v-model="email"
                      :rules="emailRules"
                      label="E-mail"
                      class="mt-4"
                      required
                      autocomplete="email"
                      outlined
                      @input="error= ''"
                  ></v-text-field>
                  <v-text-field
                      id="password"
                      ref="password"
                      autocomplete="password"
                      @keypress.enter.prevent="handleSubmit"
                      v-model="password"
                      :rules="passwordRules"
                      label="Password"
                      required
                      outlined
                      @input="error= ''"
                      @click:append="show_password = !show_password"
                      :append-icon="show_password ? 'mdi-eye' : 'mdi-eye-off'"
                      :type="show_password ? 'text' : 'password'"
                  ></v-text-field>
                  <v-alert
                      v-if="error"
                      dense
                      outlined
                      type="error"
                  >{{ error }}
                  </v-alert>
                  <v-btn :loading="loading"
                         :disabled="!valid"
                         color="info"
                         block
                         class="mr-4"
                         submit
                         @click="submitForm"
                  >Sign In
                  </v-btn>
                </v-form>
              </v-col>
            </v-row>
          </div>
        </v-container>
      </v-col>
    </v-row>
  </v-app>
</template>

<script>
import {AmplifyEventBus} from 'aws-amplify-vue';
import {Auth} from 'aws-amplify';
// import formEnterKeyHandlingMixin from "../../formEnterKeyHandlingMixin"
// import {mapGetters} from "vuex";
import {mapActions} from "vuex";
// import Preloader from "../../components/preloader";
import {pages} from '../../constants/pages'

export default {
  name: "Login",
  // mixins: [formEnterKeyHandlingMixin],
  components: {
    // Preloader,
  },
  data: () => ({
    loading: false,
    valid: true,
    password: "",
    show_password: false,
    passwordRules: [
      v => !!v || "Password is required",
      v => (v && v.length >= 8) || "Password must be at least 8 characters"
    ],
    email: "",
    error: "",
    emailRules: [
      v => !!v || "E-mail is required",
      v => /.+@.+\..+/.test(v) || "E-mail must be valid"
    ],
  }),
  computed: {},
  beforeRouteUpdate(to, from, next) {
    this.$store.dispatch('logout')
    next()
  },
  methods: {
    ...mapActions(['sign_in']),
    submitForm() {
      if (this.$refs.form.validate(true)) {
        // this.auth()
      }
      this.sign_in({name: this.email, psw: this.password})

    },
  }
};
</script>
<style lang="scss">

</style>
