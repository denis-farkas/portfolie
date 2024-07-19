import { apiHandler, projetsRepo } from "helpers/api";

export default apiHandler({
  get: getVariousFront,
});

async function getVariousFront(req, res) {
  const projets = await projetsRepo.getVariousFront();
  return res.status(200).json(projets);
}
