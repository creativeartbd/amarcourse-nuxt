export default defineEventHandler(async (event) => {
    const config = useRuntimeConfig();
    // Get query parameters from the request
    const query = getQuery(event);

    try {
        // Prepare the Basic Auth header
        const authHeader = "Basic " + btoa(`${config.LMS_API_KEY}:${config.LMS_SECRET_KEY}`);

        const response = await $fetch("https://api.amarcourse.com/wp-json/tutor/v1/enrollments?course_id=91342", {
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
