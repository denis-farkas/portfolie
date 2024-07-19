import { apiHandler, projetsRepo } from "helpers/api";

export default apiHandler({
  get: getVariousProf,
});

async function getVariousProf(req, res) {
  const projets = await projetsRepo.getVariousProf();
  return res.status(200).json(projets);
}
