export default defineEventHandler(async (event) => {
    const config = useRuntimeConfig();
    
    try {
        const response = await $fetch('https://api.amarcourse.com/wp-json/custom/v1/nonce', {
            method: 'GET',
            headers: {
                'Authorization': 'Basic ' + btoa(`${config.WP_USERNAME}:${config.WP_APPLICATION_PASSWORD}`),
                'Content-Type': 'application/json',
            }
        }); 
  
        // Check if the response contains the nonce
        if (response && response.nonce) {
            return { nonce: response.nonce };
        } else {
            throw new Error('Nonce not found in response');
        }

    } catch (error) {
        return {
            error: true,
            message: error.message || 'Failed to fetch nonce',
        };
    }
});
  