import { Hono } from 'hono'
import { prettyJSON } from 'hono/pretty-json'
import posts from "./blogs"
import auth from "./auth"
import { basicAuth } from 'hono/basic-auth'


const app = new Hono()

app.use("*", prettyJSON())
app.use(
  '/auth/:path',
  basicAuth({
    username: 'hono',
    password: 'password',
  })
)
app.route("/auth", auth)
app.route("/posts", posts)

app.get('/', (c) => {
  return c.text('Hello Hono!')
})

export default app