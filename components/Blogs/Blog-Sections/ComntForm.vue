<template>
  <div class="comment-respond">
    <h4 class="title">Post a Comment</h4>
    <form @submit.prevent="() => {}">
      <p class="comment-notes">
        <span id="email-notes"> Your email address will not be published. </span
        >{{ " " }} Required fields are marked <span class="required">*</span>
      </p>
      <div class="row row--10">
        <div class="col-lg-4 col-md-4 col-12">
          <div class="form-group">
            <label htmlFor="name">Your Name</label>
            <input id="name" type="text" />
          </div>
        </div>
        <div class="col-lg-4 col-md-4 col-12">
          <div class="form-group">
            <label htmlFor="bl-email">Your Email</label>
            <input id="bl-email" type="email" />
          </div>
        </div>
        <div class="col-lg-4 col-md-4 col-12">
          <div class="form-group">
            <label htmlFor="website">Your Website</label>
            <input id="website" type="text" />
          </div>
        </div>
        <div class="col-12">
          <div class="form-group">
            <label htmlFor="message">Leave a Reply</label>
            <textarea id="message" name="message"></textarea>
          </div>
        </div>
        <div class="col-lg-12">
          <p class="comment-form-cookies-consent">
            <input
              id="wp-comment-cookies-consent"
              name="wp-comment-cookies-consent"
              type="checkbox"
              value="yes"
            />
            <label htmlFor="wp-comment-cookies-consent">
              Save my name, email, and website in this browser for the next time
              I comment.
            </label>
          </p>
        </div>
        <div class="col-lg-12">
          <a
            class="rbt-btn btn-gradient icon-hover radius-round btn-md"
            href="#"
          >
            <span class="btn-text">Post Comment</span>
            <span class="btn-icon">
              <i class="feather-arrow-right"></i>
            </span>
          </a>
        </div>
      </div>
    </form>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
