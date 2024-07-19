import { apiHandler, projetsRepo } from "helpers/api";

export default apiHandler({
  get: getAll,
});

async function getAll(req, res) {
  const projets = await projetsRepo.getAll();
  return res.status(200).json(projets);
}
