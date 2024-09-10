export default defineEventHandler(async (event) => {
    const config = useRuntimeConfig();
    const { id } = event.context.params;

    try {
        // Make the API request to the WordPress custom endpoint
        const response = await $fetch(`https://api.amarcourse.com/wp-json/custom/v1/post/${id}`, {
            headers: {
                Authorization: "Basic " + btoa(`${config.WP_USERNAME}:${config.WP_APPLICATION_PASSWORD}`),
            },
        });

        // Check if the response is not empty or undefined
        if (!response) {
            throw new Error("No data returned from the API");
        }

        return response;
    } catch (error) {
        return {
            statusCode: error.statusCode || 500,
            message: error.message || "An error occurred while fetching blog posts.",
        };
    }
});
