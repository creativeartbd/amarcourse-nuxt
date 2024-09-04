<template>
  <div
    id="formElements"
    class="rbt-elements-area bg-color-white rbt-shadow-box mb--60"
  >
    <div class="wrapper">
      <div class="section-title">
        <h4 class="rbt-title-style-3">Form Elements</h4>
      </div>
      <div class="row g-5">
        <div class="col-lg-6">
          <h5>Input</h5>
          <div class="form-group">
            <input name="con_name" type="text" placeholder="Name" />
            <span class="focus-border"></span>
          </div>
        </div>

        <div class="col-lg-6">
          <h5>Password</h5>
          <div class="form-group">
            <input name="con_password" type="password" placeholder="Password" />
            <span class="focus-border"></span>
          </div>
        </div>

        <div class="col-lg-12">
          <h5>Textarea</h5>
          <div class="form-group">
            <textarea placeholder="Textarea"></textarea>
            <span class="focus-border"></span>
          </div>
        </div>

        <div class="col-lg-6">
          <h5>Checkbox</h5>
          <p class="rbt-checkbox-wrapper mb--5">
            <input
              id="rbt-checkbox-1"
              name="rbt-checkbox-1"
              type="checkbox"
              value="yes"
            />
            <label htmlFor="rbt-checkbox-1">Option One</label>
          </p>
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
          <h5>Radio</h5>
          <div class="rbt-form-check">
            <input
              class="form-check-input"
              type="radio"
              name="rbt-radio"
              id="rbt-radio-1"
            />
            <label class="form-check-label" htmlFor="rbt-radio-1">
              {{ " " }} Option One
            </label>
          </div>
          <div class="rbt-form-check">
            <input
              class="form-check-input"
              type="radio"
              name="rbt-radio"
              id="rbt-radio-2"
            />
            <label class="form-check-label" htmlFor="rbt-radio-2">
              {{ " " }} Option Two
            </label>
          </div>
        </div>

        <div class="col-lg-6">
          <h5>Disabled Checkbox</h5>
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDisabled"
              disabled
            />
            <label class="form-check-label" htmlFor="flexCheckDisabled">
              Disabled checkbox
            </label>
          </div>
        </div>

        <div class="col-lg-6">
          <h5>Disabled Radio</h5>
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="flexRadioDisabled"
              id="flexRadioDisabled"
              disabled
            />
            <label class="form-check-label" htmlFor="flexRadioDisabled">
              Disabled radio
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="flexRadioDisabled"
              id="flexRadioCheckedDisabled"
              checked
              disabled
            />
            <label class="form-check-label" htmlFor="flexRadioCheckedDisabled">
              Disabled checked radio
            </label>
          </div>
        </div>

        <div class="col-lg-6">
          <h5>Default switch checkbox input</h5>
          <div class="form-check form-switch">
            <input
              class="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
            />
            <label class="form-check-label" htmlFor="flexSwitchCheckDefault">
              Default switch checkbox input
            </label>
          </div>
        </div>

        <div class="col-lg-6">
          <h5>Select</h5>
          <div class="rbt-modern-select bg-transparent height-45">
            <select class="w-100">
              <option>Barisal</option>
              <option>Dhaka</option>
              <option>Khulna</option>
              <option>Comilla</option>
              <option>Chittagong</option>
            </select>
          </div>
        </div>

        <div class="col-lg-6">
          <h5>Select</h5>
          <div class="rbt-modern-select bg-transparent height-45 w-100">
            <select class="w-100" title="Select Author">
              <option data-subtext="Experts">Janin Afsana</option>
              <option data-subtext="Experts">Joe Biden</option>
              <option data-subtext="Experts">Fatima Asrafy</option>
              <option data-subtext="Experts">Aysha Baby</option>
              <option data-subtext="Experts">Mohamad Ali</option>
              <option data-subtext="Experts">Jone Li</option>
              <option data-subtext="Experts">Alberd Roce</option>
              <option data-subtext="Experts">Zeliski Noor</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
