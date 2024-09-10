<template>
    <div class="comment-respond" id="comment-respond">
        <h4 class="title">Post a Comment</h4>
        <form @submit.prevent="handleComments">
            <p class="comment-notes">
                <span id="email-notes"> Your email address will not be published. </span>{{ " " }} Required fields are
                marked <span class="required">*</span>
            </p>
            <div class="row row--10">
                <div class="col-lg-4 col-md-4 col-12">
                    <div class="form-group">
                        <input id="name" type="text" v-model="form.name" placeholder="Your Name" />
                        <span v-if="formErrors.name" class="error">{{ formErrors.name }}</span>
                    </div>
                </div>
                <div class="col-lg-4 col-md-4 col-12">
                    <div class="form-group">
                        <input id="bl-email" type="email" v-model="form.email" placeholder="Your email address" />
                        <span v-if="formErrors.email" class="error">{{ formErrors.email }}</span>
                    </div>
                </div>
                <div class="col-lg-4 col-md-4 col-12">
                    <div class="form-group">
                        <input id="website" type="text" v-model="form.website" placeholder="Your website" />
                        <span v-if="formErrors.website" class="error">{{ formErrors.website }}</span>
                    </div>
                </div>
                <div class="col-12">
                    <div class="form-group">
                        <textarea
                            id="message"
                            name="message"
                            v-model="form.message"
                            placeholder="Your message"
                        ></textarea>
                        <span v-if="formErrors.message" class="error">{{ formErrors.message }}</span>
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
                            Save my name, email, and website in this browser for the next time I comment.
                        </label>
                    </p>
                </div>
                <div class="col-lg-12">
                    <button class="rbt-btn btn-gradient icon-hover radius-round btn-md" href="#">
                        <span class="btn-text">Post Comment</span>
                        <span class="btn-icon">
                            <i class="feather-arrow-right"></i>
                        </span>
                    </button>
                </div>
            </div>
        </form>
    </div>
</template>

<script setup>
const props = defineProps({
    blogId: {
        type: Number,
        required: true,
    },
});

import { reactive } from "vue";
const form = reactive({
    name: "",
    email: "",
    website: "",
    message: "",
});

const formErrors = reactive({
    name: "",
    email: "",
    website: "",
    message: "",
});

const validateForm = () => {
    let valid = true;

    // validate the name
    if (!form.name) {
        formErrors.name = "Your name is required.";
        valid = false;
    } else if (form.name.length > 50) {
        formErrors.name = "Your name is too long";
        valid = false;
    } else {
        formErrors.name = "";
    }
    // validate the email
    if (!form.email) {
        formErrors.email = "Email is required.";
        valid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
        formErrors.email = "Invalid email format.";
        valid = false;
    } else {
        formErrors.email = "";
    }

    // Validate the website
    if (!form.website) {
        formErrors.website = "Your website is required.";
        valid = false;
    } else if (!/^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([/\w \.-]*)*\/?$/.test(form.website)) {
        formErrors.website = "Please enter a valid website URL.";
        valid = false;
    } else {
        formErrors.website = "";
    }

    // validate the message
    if (!form.message) {
        formErrors.message = "Your message is required.";
        valid = false;
    } else if (form.message.length > 500) {
        formErrors.message = "Your message is too long";
        valid = false;
    } else {
        formErrors.message = "";
    }

    return valid;
};

const handleComments = async () => {
    if (validateForm()) {
        const {
            data: comment,
            error,
            pending,
        } = await useFetch("/api/comment", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: {
                name: form.name,
                email: form.email,
                website: form.website,
                message: form.message,
                blogId: props.blogId,
            },
        });
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
