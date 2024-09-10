export default defineEventHandler(async (event) => {
    const config = useRuntimeConfig();
    // Get query parameters from the request
    const query = getQuery(event);

    try {
        // Prepare the Basic Auth header
        const authHeader = "Basic " + btoa(`${config.WP_USERNAME}:${config.WP_APPLICATION_PASSWORD}`);

        const response = await $fetch(`https://api.amarcourse.com/wp-json/custom/v1/single-course/${query.course_id}`, {
            headers: {
                Authorization: authHeader, // Pass the Basic Auth header
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
