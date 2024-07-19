import { apiHandler, projetsRepo } from "helpers/api";

export default apiHandler({
  get: getById,
  put: update,
  delete: _delete,
});

async function getById(req, res) {
  const projet = await projetsRepo.getById(req.query.id);

  if (!projet) throw "Ce projet n'existe pas";

  return res.status(200).json(projet);
}

async function update(req, res) {
  await projetsRepo.update(req.query.id, req.body);
  return res.status(200).json({});
}

async function _delete(req, res) {
  await projetsRepo.delete(req.query.id);
  return res.status(200).json({});
}
