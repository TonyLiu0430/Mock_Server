export default defineEventHandler(async (event) => {
    const path = event.path;
    if (path.startsWith('/api')) {
        return await $fetch(process.env.BACKEND_URL + path, {
            method: event.method,
            headers: event.headers,
            body: event.method == 'GET' ? undefined : await readBody(event),
        })
    }
    else {
        if (process.env.FRONTEND_URL + path == event.path) {
            return {}
        }
        return await $fetch(process.env.FRONTEND_URL + path, {
            method: event.method,
            headers: event.headers,
            body: event.method == 'GET' ? undefined : await readBody(event),
        })
    }
})