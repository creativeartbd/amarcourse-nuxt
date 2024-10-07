export default defineEventHandler(async (event) => {
    const config = useRuntimeConfig();
    const query = getQuery(event);

    try {
        // Prepare the Basic Auth header using Node.js Buffer for Base64 encoding
        const authHeader = "Basic " + Buffer.from(`${config.LMS_API_KEY}:${config.LMS_SECRET_KEY}`).toString("base64");

        // Make the API request
        const response = await $fetch(
            `https://api.amarcourse.com/wp-json/tutor/v1/topics?course_id=${query.course_id}`,
            {
                headers: {
                    "Content-Type": "application/json; charset=UTF-8",
                    Authorization: authHeader, // Pass the Basic Auth header
                    "Accept-Language": "bn", // Specify the Bangla language if the API supports localization
                },
            }
        );

        return response;
    } catch (error) {
        // Log the error for server-side debugging
        console.error("Error fetching topics:", error);

        // Return an error response
        return {
            statusCode: error.statusCode || 500,
            message: error.message || "An error occurred while fetching the topics.",
        };
    }
});
