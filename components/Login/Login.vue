<template>
  <div class="col-lg-6">
    <div class="rbt-contact-form contact-form-style-1 max-width-auto">
      <h3 class="title">Login</h3>
      <form @submit.prevent="handleLogin"  class="max-width-auto">
        <div class="form-group">
          <input
            v-model="loginForm.email"
            name="con_name"
            type="text"
            placeholder="Username or email *"
          />
          <span v-if="loginErrors.email" class="error">{{ loginErrors.email }}</span>
          <span class="focus-border"></span>
        </div>
        <div class="form-group">
          <input name="con_email" type="password" placeholder="Password *" v-model="loginForm.password"/>
          <span v-if="loginErrors.password" class="error">{{ loginErrors.password }}</span>
          <span class="focus-border"></span>
        </div>

        <div class="row mb--30">
          <div class="col-lg-6">
            <div class="rbt-checkbox">
              <input type="checkbox" id="rememberme" name="rememberme" />
              <label htmlFor="rememberme">Remember me</label>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="rbt-lost-password text-end">
              <a class="rbt-btn-link" href="#"> Lost your password? </a>
            </div>
          </div>
        </div>

        <div class="form-submit-group">
          <button
            type="submit"
            class="rbt-btn btn-md btn-gradient hover-icon-reverse w-100"
          >
            <span class="icon-reverse-wrapper">
              <span class="btn-text">Log In</span>
              <span class="btn-icon">
                <i class="feather-arrow-right"></i>
              </span>
              <span class="btn-icon">
                <i class="feather-arrow-right"></i>
              </span>
            </span>
          </button>
        </div>
      </form>
    </div>
  </div>

  <div class="col-lg-6">
    <div class="rbt-contact-form contact-form-style-1 max-width-auto">
      <h3 class="title">Register</h3>
      <form @submit.prevent="handleSubmit" class="max-width-auto">
        <div class="form-group">
          <input
            v-model="form.email"
            name="register-email"
            type="email"
            placeholder="Email address *"
          />
          <span v-if="errors.email" class="error">{{ errors.email }}</span>
          <span class="focus-border"></span>
        </div>

        <div class="form-group">
          <input
            v-model="form.username"
            name="register_user"
            type="text"
            placeholder="Username *"
          />
          <span v-if="errors.username" class="error">{{ errors.username }}</span>
          <span class="focus-border"></span>
        </div>

        <div class="form-group">
          <input
            v-model="form.password"
            name="register_password"
            type="password"
            placeholder="Password *"
          />
          <span v-if="errors.password" class="error">{{ errors.password }}</span>
          <span class="focus-border"></span>
        </div>

        <div class="form-group">
          <input
            v-model="form.confirmPassword"
            name="register_conpassword"
            type="password"
            placeholder="Confirm Password *"
          />
          <span v-if="errors.confirmPassword" class="error">{{ errors.confirmPassword }}</span>
          <span class="focus-border"></span>
        </div>

        <span v-if="errors.form" class="error">{{ form.error }}</span>
          <span class="focus-border"></span>

        <div class="form-submit-group">
          <button :disabled="pending"
            type="submit"
            class="rbt-btn btn-md btn-gradient hover-icon-reverse w-100"
          >
            <span class="icon-reverse-wrapper">
              <span class="btn-text">Register</span>
              <span class="btn-icon">
                <i class="feather-arrow-right"></i>
              </span>
              <span class="btn-icon">
                <i class="feather-arrow-right"></i>
              </span>
            </span>
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue';

const nonce = ref(null);

const form = reactive({
  email: '',
  username: '',
  password: '',
  confirmPassword: '',
  error : '',
});

const errors = reactive({
  email: '',
  username: '',
  password: '',
  confirmPassword: ''
});

const loginForm = reactive({
  email: '',
  password: '',
  error : ''
});

const loginErrors = reactive({
  email: '',
  password: '',
});

const validateLoginForm = () => {
  let valid = true;
  
  // Email validation
  if (!loginForm.email) {
    loginErrors.email = 'Email is required.';
    valid = false;
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(loginForm.email)) {
    loginErrors.email = 'Invalid email format.';
    valid = false;
  } else {
    loginErrors.email = '';
  }

  // Password validation
  if (!loginForm.password) {
    loginErrors.password = 'Password is required.';
    valid = false;
  } else if (loginForm.password.length < 6) {
    loginErrors.password = 'Password must be at least 6 characters long.';
    valid = false;
  } else {
    loginErrors.password = '';
  }

  return valid;
}

const validateForm = () => {
  let valid = true;

  // Email validation
  if (!form.email) {
    errors.email = 'Email is required.';
    valid = false;
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    errors.email = 'Invalid email format.';
    valid = false;
  } else {
    errors.email = '';
  }

  // Username validation
  if (!form.username) {
    errors.username = 'Username is required.';
    valid = false;
  } else {
    errors.username = '';
  }

  // Password validation
  if (!form.password) {
    errors.password = 'Password is required.';
    valid = false;
  } else if (form.password.length < 6) {
    errors.password = 'Password must be at least 6 characters long.';
    valid = false;
  } else {
    errors.password = '';
  }

  // Confirm Password validation
  if (!form.confirmPassword) {
    errors.confirmPassword = 'Confirm Password is required.';
    valid = false;
  } else if (form.confirmPassword !== form.password) {
    errors.confirmPassword = 'Passwords do not match.';
    valid = false;
  } else {
    errors.confirmPassword = '';
  }

  return valid;
};

const handleSubmit = async () => {
  if (validateForm()) {
    const { data: user, error, pending } = await useFetch('/api/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: {
        username: form.username,
        email: form.email,
        password: form.password,
      },
    });
    console.log('error is')
    console.log( error.value )
  }
};

const handleLogin = async () => {
  if (validateLoginForm()) {
    const { data: user, error, pending } = await useFetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: {
        username: loginForm.email,
        password: loginForm.password,
      },
    });
    console.log('login error is')
    console.log( error.value )
  }
};

</script>

<style scoped>
.error {
  color: red;
  font-size: 0.9em;
  margin-top: 0.5em;
}
</style>