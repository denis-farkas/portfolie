import { apiHandler, projetsRepo } from "helpers/api";

export default apiHandler({
  get: getVariousBack,
});

async function getVariousBack(req, res) {
  const projets = await projetsRepo.getVariousBack();
  return res.status(200).json(projets);
}
