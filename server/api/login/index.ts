export default defineEventHandler(async (event) => {
    const body = await readBody(event);

    try {
        const response = await $fetch('https://api.amarcourse.com/wp-json/custom/v1/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: body.username,
                password: body.password,
            }),
        });

        // Save the token locally, e.g., in localStorage
        localStorage.setItem('authToken', response.token);

        return response;
    } catch (error) {
        return { error: 'Login failed', details: error };
    }
});