import { db } from "helpers/api";
import { Sequelize } from "sequelize";

// requete sequelize que l on  fait directement dans la base de données
// methode sequelize qui sont comprise par mysql dans la base de données

export const projetsRepo = {
  getAll,
  getVariousBack,
  getVariousFront,
  getVariousProf,
  getById,
  create,
  update,
  delete: _delete,
};

// requete avec des methode sequelize sur le model Projet
async function getAll() {
  return await db.Projet.findAll();
}

async function getVariousBack() {
  return await db.Projet.findAll({
    where: { domain: "backend" },
    order: [Sequelize.literal("RAND()")],
    limit: 3,
  });
}

async function getVariousFront() {
  return await db.Projet.findAll({
    where: { domain: "frontend" },
    order: [Sequelize.literal("RAND()")],
    limit: 3,
  });
}

async function getVariousProf() {
  return await db.Projet.findAll({
    where: { domain: "prof" },
    order: [Sequelize.literal("RAND()")],
    limit: 3,
  });
}

async function getById(id) {
  return await db.Projet.findByPk(id);
}

async function create(params) {
  const projet = new db.Projet(params);
  await projet.save();
}

async function update(id, params) {
  const projet = await db.Projet.findByPk(id);
  // validate
  if (!projet) throw "Projet n&apos;existe pas";
  Object.assign(projet, params);
  await projet.save();
}

// verification dans la base de donnée si  projet existe pour ensuite le supprimer
async function _delete(id) {
  const projet = await db.Projet.findByPk(id);
  if (!projet) throw "Le projet n&apos;existe pas";

  // supprime l projet
  await projet.destroy();
}
