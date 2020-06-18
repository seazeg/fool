const Koa = require("koa");
const bodyParser = require("koa-bodyparser");
const cors = require("koa2-cors");
const router = require("koa-router")();
const staticFiles = require("koa-static");
const { generator } = require("./handle");
const { upload } = require("./upload");
const path = require("path");

const app = new Koa();

app.use(staticFiles(path.resolve(__dirname, "./preview")));

app.use(async (ctx, next) => {
    console.log(`Process ${ctx.request.method} ${ctx.request.url}...`);
    await next();
})
    .use(cors())
    .use(bodyParser());

    
router.post("/generateHTML", async (ctx, next) => {
    const params = ctx.request.body;
    ctx.response.body = params;
    generator(params.html);
});

upload(router);

app.use(router.routes());
app.listen(2599);
console.log("app started at port 2599...");
