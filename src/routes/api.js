import { notFound, handleError } from '../middlewares/error';
import postRoutes from './postRoutes';
import formRoutes from './formRoutes';
import formCategoryRoutes from './formCategoryRoutes';
import ruleRoutes from './ruleRoutes';
import ruleCategoryRoutes from './ruleCategoryRoutes';



const initApiRoutes = (app) => {

    // app.use("/api", homeRoutes);
    // app.use("/users", userRoutes);
    app.use("/api/posts", postRoutes);
    app.use("/api/forms", formRoutes);
    app.use("/api/formCategories", formCategoryRoutes);
    app.use("/api/rules", ruleRoutes);
    app.use("/api/ruleCategories", ruleCategoryRoutes);
    app.use(notFound);
    app.use(handleError);
}
export default initApiRoutes;