import { expressjwt } from "express-jwt";
import util from "util";
import getConfig from "next/config";

const { serverRuntimeConfig } = getConfig();

export { jwtMiddleware };

function jwtMiddleware(req, res) {
  const middleware = expressjwt({
    secret: serverRuntimeConfig.secret,
    algorithms: ["HS256"],
  }).unless({
    path: [
      "/api/users/authenticate",
      "/api/users/register",
      { url: /^\/api\/projets\/.*/, methods: ["GET"] },
      "/api/projets/variousBack",
      "/api/projets/variousFront",
      "/api/projets/variousProf",
      "/api/contacts",
      "/api/projets",
    ],
  });

  return util.promisify(middleware)(req, res);
}
