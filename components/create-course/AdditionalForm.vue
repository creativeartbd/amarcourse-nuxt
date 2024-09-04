<template>
  <div
    id="accCollapseSix"
    class="accordion-collapse collapse"
    aria-labelledby="accSix"
    data-bs-parent="#tutionaccordionExamplea1"
  >
    <div
      class="accordion-body card-body rbt-course-field-wrapper rbt-default-form row row-15"
    >
      <div class="col-lg-6">
        <div class="course-field mb--15">
          <label htmlFor="startDate">Start Date</label>
          <input type="date" id="startDate" name="startDate" />
        </div>
      </div>

      <div class="col-lg-6">
        <div class="course-field mb--15">
          <label htmlFor="language">Language</label>
          <div class="rbt-modern-select bg-transparent height-50 mb--10">
            <select name="language " id="language">
              <option>English</option>
              <option>Bangla</option>
              <option>Japan</option>
              <option>Hindi</option>
              <option>Frence</option>
              <option>Garmani</option>
            </select>
          </div>
        </div>
      </div>

      <div class="col-lg-6">
        <div class="course-field mb--15">
          <label htmlFor="whatLearn">Requirements</label>
          <textarea
            id="whatLearn"
            rows="5"
            placeholder="Add your course benefits here."
          ></textarea>
          <small class="d-block mt_dec--5">
            <i class="feather-info"></i> Enter for per line.
          </small>
        </div>
      </div>

      <div class="col-lg-6">
        <div class="course-field mb--15">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            rows="5"
            placeholder="Add your course benefits here."
          ></textarea>
          <small class="d-block mt_dec--5">
            <i class="feather-info"></i> Enter for per line.
          </small>
        </div>
      </div>

      <div class="col-lg-12">
        <hr class="mt--10 mb--20" />
      </div>

      <div class="col-lg-12">
        <div class="course-field mb--15">
          <label>Total Course Duration</label>
          <div class="row row--15">
            <div class="col-lg-6">
              <input type="number" placeholder="00" />
              <small class="d-block mt_dec--5">
                <i class="feather-info"></i> Hour.
              </small>
            </div>
            <div class="col-lg-6">
              <input type="number" placeholder="00" />
              <small class="d-block mt_dec--5">
                <i class="feather-info"></i> Minute.
              </small>
            </div>
          </div>
        </div>
      </div>

      <div class="col-lg-12">
        <hr class="mt--10 mb--20" />
      </div>

      <div class="col-lg-12">
        <div class="course-field mb--15">
          <label htmlFor="courseTag">Course Tags</label>
          <textarea
            id="courseTag"
            rows="5"
            placeholder="Add your course tag here."
          ></textarea>
          <small class="d-block mt_dec--5">
            <i class="feather-info"></i> Maximum of 15 keywords covering
            features, usage, and styling. Keywords should all be in lowercase
            and separated by commas. e.g. photography, gallery, modern, jquery,
            wordpress theme.
          </small>
        </div>
      </div>

      <div class="col-lg-12">
        <hr class="mt--10 mb--20" />
      </div>

      <div class="col-lg-12">
        <div class="course-field mb--15">
          <label htmlFor="targeted">Targeted Audience</label>
          <textarea
            id="targeted"
            rows="5"
            placeholder="Add your course tag here."
          ></textarea>
          <small class="d-block mt_dec--5">
            <i class="feather-info"></i> Specify the target audience that will
            benefit the most from the course.
          </small>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
