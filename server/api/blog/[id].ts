// server/api/blogs.ts

export default defineEventHandler(async (event) => {

    const config    = useRuntimeConfig()
    const { id }    = event.context.params;

    const response = await $fetch('https://api.amarcourse.com/wp-json/custom/v1/post/' + id, {
        headers: {
            Authorization: 'Basic ' + btoa(`${config.WP_USERNAME}:${config.WP_APPLICATION_PASSWORD}`),
        }
    });
    return response;
});
  