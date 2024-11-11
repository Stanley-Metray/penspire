import UserRouter from "../routes/user-router.js";

function configRoutes(app)
{
    app.use(UserRouter);
}

export default configRoutes;