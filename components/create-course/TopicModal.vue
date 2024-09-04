<template>
  <div
    class="rbt-default-modal modal fade"
    id="exampleModal"
    tabIndex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <button
            type="button"
            class="rbt-round-btn"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            <i class="feather-x"></i>
          </button>
        </div>
        <div class="modal-body">
          <div class="inner rbt-default-form">
            <div class="row">
              <div class="col-lg-12">
                <h5 class="modal-title mb--20" id="exampleModalLabel">
                  Add Topic
                </h5>
                <div class="course-field mb--20">
                  <label htmlFor="modal-field-1">Topic Name</label>
                  <input id="modal-field-1" type="text" />
                  <small>
                    <i class="feather-info"></i> Topic titles are displayed
                    publicly wherever required. Each topic may contain one or
                    more lessons, quiz and assignments.
                  </small>
                </div>
                <div class="course-field mb--20">
                  <label htmlFor="modal-field-2">Topic Summary</label>
                  <textarea id="modal-field-2"></textarea>
                  <small>
                    <i class="feather-info"></i> Add a summary of short text to
                    prepare students for the activities for the topic. The text
                    is shown on the course page beside the tooltip beside the
                    topic name.
                  </small>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="top-circle-shape"></div>
        <div class="modal-footer pt--30">
          <button
            type="button"
            class="rbt-btn btn-border btn-md radius-round-10"
            data-bs-dismiss="modal"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
