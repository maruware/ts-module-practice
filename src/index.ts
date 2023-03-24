import Fastify, { FastifyInstance, RouteShorthandOptions } from "fastify";

const server: FastifyInstance = Fastify({ logger: true });

server.get("/ping", async (request, reply) => {
  return { pong: "it worked!" };
});

const start = async () => {
  try {
    await server.listen({ port: 3000 });
    console.log("listening :3000");

    const address = server.server.address();
    const port = typeof address === "string" ? address : address?.port;
  } catch (err) {
    server.log.error(err);
    process.exit(1);
  }
};
start();
