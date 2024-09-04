<template>
  <form
    class="comment-form-style-1 position-relative"
    @submit.prevent="() => {}"
  >
    <p class="comment-note mb--20">
      Your email address will not be published. Required fields are marked *
    </p>

    <div class="notification-text d-flex align-items-center mb--30">
      <h6 class="mb--0 fontWeight600 title">Your Rating</h6>
      <div class="rbt-review justify-content-start">
        <div class="rating">
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
        </div>
      </div>
    </div>

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
        <p class="comment-form-cookies-consent mb--30">
          <input
            id="wp-comment-cookies-consent"
            name="wp-comment-cookies-consent"
            type="checkbox"
            value="yes"
          />
          <label htmlFor="wp-comment-cookies-consent">
            Save my name, email, and website in this browser for the next time I
            comment.
          </label>
        </p>
      </div>
      <div class="col-lg-12">
        <button class="rbt-btn btn-gradient hover-icon-reverse">
          <span class="icon-reverse-wrapper">
            <span class="btn-text">Post Comment</span>
            <span class="btn-icon">
              <i class="feather-arrow-right"></i>
            </span>
            <span class="btn-icon">
              <i class="feather-arrow-right"></i>
            </span>
          </span>
        </button>
      </div>
    </div>
  </form>
</template>

<script setup></script>

<style lang="scss" scoped></style>
