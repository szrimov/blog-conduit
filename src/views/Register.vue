<template>
  <section class="register">
    <div class="container">
      <div class="row align-items-center auth-form">
        <div class="col-md-6 col-lg-4 col-6 mx-auto">
          <div class="text-center">
            <h1 class="fs-1">Sign up</h1>
            <router-link :to="{ name: 'login' }"
              ><p class="fs-6">Have an account?</p></router-link
            >
          </div>
          <BValidationErrors
            v-if="$store.state.auth.validationsError"
            :validationsError="$store.state.auth.validationsError"
          />
          <form @submit.prevent="onSubmit">
            <div class="mb-3">
              <label for="username" class="form-label">Username</label>
              <input
                type="text"
                class="form-control"
                :class="{
                  'is-valid':
                    $v.username.required &&
                    $v.username.minLength &&
                    $v.username.maxLength,
                  'is-invalid': $v.username.$dirty && $v.username.$invalid,
                }"
                id="username"
                v-model="username"
                @blur="$v.username.$touch()"
                @focus="resetValidationsError"
              />
              <div class="invalid-feedback" v-if="!$v.username.required">
                Обязательное поле для заполнения
              </div>
            </div>
            <div class="mb-3">
              <label for="email" class="form-label">Email</label>
              <input
                type="email"
                class="form-control"
                id="email"
                v-model="email"
                :class="{
                  'is-valid': $v.email.required && $v.email.email,
                  'is-invalid': $v.email.$dirty && $v.email.$invalid,
                }"
                @blur="$v.email.$touch()"
                @focus="resetValidationsError"
              />
              <div class="invalid-feedback" v-if="!$v.email.required">
                Обязательное поле для заполнения
              </div>
              <div class="invalid-feedback" v-if="!$v.email.email">
                Не корректный email
              </div>
            </div>
            <div class="mb-3">
              <label for="password" class="form-label">Password</label>
              <input
                type="password"
                class="form-control"
                id="password"
                v-model="password"
                :class="{
                  'is-valid':
                    $v.password.required &&
                    $v.password.minLength &&
                    $v.password.maxLength,
                  'is-invalid': $v.password.$dirty && $v.password.$invalid,
                }"
                @blur="$v.password.$touch()"
                @focus="resetValidationsError"
              />
              <div class="invalid-feedback" v-if="!$v.password.required">
                Обязательное поле для заполнения
              </div>
              <div class="invalid-feedback" v-if="!$v.password.minLength">
                Минимальная длина символов 6
              </div>
              <div class="invalid-feedback" v-if="!$v.password.maxLength">
                Максимальная длина символов 20
              </div>
            </div>
            <div class="text-end">
              <button
                type="submit"
                class="btn btn-primary px-4"
                :disabled="
                  $store.state.auth.isSubmitting ||
                  validForm ||
                  $store.state.auth.validationsError
                "
              >
                Sign up
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import {
  required,
  minLength,
  maxLength,
  email,
} from "vuelidate/lib/validators";
import { mapActions } from "vuex";
import BValidationErrors from "@/components/bValidationErrors/bValidationErrors.vue";
export default {
  components: { BValidationErrors },
  data() {
    return {
      username: "",
      email: "",
      password: "",
    };
  },
  validations: {
    username: {
      required,
      minLength: minLength(1),
      maxLength: maxLength(20),
    },
    email: {
      required,
      email,
    },
    password: {
      required,
      minLength: minLength(6),
      maxLength: maxLength(20),
    },
  },
  methods: {
    ...mapActions(["register"]),
    resetValidationsError() {
      this.$store.commit("resetValidationsError");
    },
    onSubmit() {
      console.log("submiting data ==>", {
        username: this.username,
        email: this.email,
        password: this.password,
      });
      this.register({
        username: this.username,
        email: this.email,
        password: this.password,
      }).then((response) => {
        console.log("response from promise ==> ", response);
        this.$router.push({ name: "main-feed" });
      });
    },
  },
  mounted() {},
  computed: {
    validForm() {
      return (
        this.$v.username.$invalid ||
        this.$v.email.$invalid ||
        this.$v.password.$invalid
      );
    },
  },
};
</script>

<style lang="scss">
.auth-form {
  height: 100vh;
}
</style>
