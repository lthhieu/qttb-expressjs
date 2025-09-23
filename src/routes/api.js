import { notFound, handleError } from '../middlewares/error';
import postRoutes from './postRoutes';



const initApiRoutes = (app) => {

    // app.use("/api", homeRoutes);
    // app.use("/users", userRoutes);
    app.use("/api/posts", postRoutes);
    app.use(notFound);
    app.use(handleError);
}
export default initApiRoutes;