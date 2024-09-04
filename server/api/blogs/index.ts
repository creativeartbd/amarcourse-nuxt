// server/api/blogs.ts

export default defineEventHandler(async (event) => {
    const config = useRuntimeConfig();
    // Get query parameters from the request
    const query = getQuery(event);

    try {
        const response = await $fetch("https://api.amarcourse.com/wp-json/custom/v1/posts", {
            headers: {
                Authorization: "Basic " + btoa(`${config.WP_USERNAME}:${config.WP_APPLICATION_PASSWORD}`),
            },
            params: {
                page: query.page || 1,
                per_page: query.per_page || 3,
            },
        });

        return response;
    } catch (error) {
        // Handle any errors that occur during the fetch
        return {
            statusCode: error.statusCode || 500,
            message: error.message || "An error occurred while fetching blog posts.",
        };
    }
});
