export default defineEventHandler(async (event) => {
    const query = await readBody(event);
    const config = useRuntimeConfig();

    try {
        const response = await $fetch("https://api.amarcourse.com/wp-json/custom/v1/post-comment", {
            method: "POST",
            headers: {
                Authorization: "Basic " + btoa(`${config.WP_USERNAME}:${config.WP_APPLICATION_PASSWORD}`),
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: query.name,
                email: query.email,
                website: query.website,
                message: query.message,
                post_id: query.blogId,
            }),
        });

        // Return response to client
        return response;
    } catch (error) {
        return {
            statusCode: error.response?.status || 500,
            message: error || "An error occurred while submitting the comment.",
        };
    }
});
