<template>
  <form @submit.prevent="() => {}" id="quiz-form" class="quiz-form-wrapper">
    <div id="question-1" :class="`question ${next ? 'd-none' : ''}`">
      <div :class="`quize-top-meta`">
        <div class="quize-top-left">
          <span> Questions No: <strong>1/5</strong> </span>
          <span> Attempts Allowed: <strong>1</strong> </span>
        </div>
        <div class="quize-top-right">
          <span> Time remaining: <strong>No Limit</strong> </span>
        </div>
      </div>
      <hr />
      <div class="rbt-single-quiz">
        <h4>1. What is the capital of France?</h4>
        <div class="row g-3 mt--10">
          <div class="col-lg-6">
            <p class="rbt-checkbox-wrapper mb--5">
              <input
                id="rbt-checkbox-1"
                name="rbt-checkbox-1"
                type="checkbox"
                value="yes"
              />
              <label htmlFor="rbt-checkbox-1">Option One</label>
            </p>
          </div>
          <div class="col-lg-6">
            <p class="rbt-checkbox-wrapper">
              <input
                id="rbt-checkbox-2"
                name="rbt-checkbox-2"
                type="checkbox"
                value="yes"
              />
              <label htmlFor="rbt-checkbox-2">Option Two</label>
            </p>
          </div>
          <div class="col-lg-6">
            <p class="rbt-checkbox-wrapper">
              <input
                id="rbt-checkbox-3"
                name="rbt-checkbox-3"
                type="checkbox"
                value="yes"
              />
              <label htmlFor="rbt-checkbox-3">Option Three</label>
            </p>
          </div>
          <div class="col-lg-6">
            <p class="rbt-checkbox-wrapper">
              <input
                id="rbt-checkbox-4"
                name="rbt-checkbox-4"
                type="checkbox"
                value="yes"
              />
              <label htmlFor="rbt-checkbox-4">Option Four</label>
            </p>
          </div>
        </div>
      </div>
    </div>

    <div id="question-2" :class="`question ${!next ? 'd-none' : ''}`">
      <div class="quize-top-meta">
        <div class="quize-top-left">
          <span> Questions No: <strong>2/5</strong> </span>
          <span> Attempts Allowed: <strong>2</strong> </span>
        </div>
        <div class="quize-top-right">
          <span> Time remaining: <strong>No Limit</strong> </span>
        </div>
      </div>
      <hr />
      <div class="rbt-single-quiz">
        <h4>2. What is the Javascript?</h4>
        <div class="row g-3 mt--10">
          <div class="col-lg-6">
            <div class="rbt-form-check">
              <input
                class="form-check-input"
                type="radio"
                name="rbt-radio"
                id="rbt-radio-1"
              />
              <label class="form-check-label" htmlFor="rbt-radio-1">
                {{ " " }}
                Option One
              </label>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="rbt-form-check">
              <input
                class="form-check-input"
                type="radio"
                name="rbt-radio"
                id="rbt-radio-2"
              />
              <label class="form-check-label" htmlFor="rbt-radio-2">
                {{ " " }}
                Option Two
              </label>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="rbt-form-check">
              <input
                class="form-check-input"
                type="radio"
                name="rbt-radio"
                id="rbt-radio-3"
              />
              <label class="form-check-label" htmlFor="rbt-radio-3">
                {{ " " }}
                Option Three
              </label>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="rbt-form-check">
              <input
                class="form-check-input"
                type="radio"
                name="rbt-radio"
                id="rbt-radio-4"
              />
              <label class="form-check-label" htmlFor="rbt-radio-4">
                {{ " " }}
                Option Four
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="rbt-quiz-btn-wrapper mt--30">
      <button
        class="rbt-btn bg-primary-opacity btn-sm"
        id="prev-btn"
        type="button"
        :disabled="!next"
        @click="next = !next"
      >
        Previous
      </button>
      <button
        :class="`rbt-btn bg-primary-opacity btn-sm ms-2 ${
          next ? 'd-none' : ''
        }`"
        id="next-btn"
        type="button"
        @click="next = !next"
      >
        Next
      </button>
      <nuxt-link
        :class="`rbt-btn btn-gradient btn-sm ms-2 ${!next ? 'd-none' : ''}`"
        to="/lesson-quiz-result"
        id="submit-btn"
      >
        Submit
      </nuxt-link>
    </div>
  </form>
</template>

<script setup>
const next = ref();
</script>

<style lang="scss" scoped></style>
