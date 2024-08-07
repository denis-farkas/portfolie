import { apiHandler, projetsRepo } from "helpers/api";

export default apiHandler({
  post: register,
});

async function register(req, res) {
  await projetsRepo.create(req.body);
  return res.status(200).json({});
}
