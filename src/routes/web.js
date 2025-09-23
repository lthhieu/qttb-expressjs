const initWebRoutes = (app) => {

    app.get("/", (req, res) => { res.send("Hello world") });
}
export default initWebRoutes;