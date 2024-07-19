import { useState, useEffect } from "react";
import Link from "next/link";
import { Spinner } from "components";
import { Layout } from "components/users";
import { projetService } from "services";

export default Index;

function Index() {
  const [projets, setProjets] = useState(null);
  // recupere tout les utilisateurs
  useEffect(() => {
    projetService.getAll().then((x) => setProjets(x));
  }, []);

  function deleteProjet(id) {
    setProjets(
      projets.map((x) => {
        if (x.id === id) {
          x.isDeleting = true;
        }
        return x;
      })
    );
    projetService.delete(id).then(() => {
      setProjets((projets) => projets.filter((x) => x.id !== id));
    });
  }

  return (
    <Layout>
      <h1>Projets</h1>
      <Link href="/projets/add" className="btn btn-sm btn-success mb-2">
        Ajouter un projet
      </Link>
      <table className="table table-striped">
        <thead>
          <tr>
            <th style={{ width: "10%" }}>Nom</th>
            <th>Description</th>
            <th style={{ width: "15%" }}>Année</th>
            <th style={{ width: "10%" }}>version live</th>
            <th style={{ width: "10%" }}>domaine</th>
            <th style={{ width: "15%" }}></th>
          </tr>
        </thead>
        <tbody>
          {projets &&
            projets.map((projet) => (
              <tr key={projet.id}>
                <td>{projet.name}</td>
                <td>
                  <p> {projet.content}</p>
                </td>
                <td>{projet.year}</td>
                <td>{projet.url_live}</td>
                <td>{projet.domain}</td>
                <td style={{ whiteSpace: "nowrap" }}>
                  <Link
                    href={`/projets/edit/${projet.id}`}
                    className="btn btn-sm btn-success mx-3 "
                  >
                    Modifier
                  </Link>
                  <button
                    onClick={() => deleteProjet(projet.id)}
                    className="btn btn-sm btn-primary btn-delete-user"
                    style={{ width: "60px" }}
                  >
                    {projet.isDeleting ? (
                      <span className="spinner-border spinner-border-sm"></span>
                    ) : (
                      <span>Effacer</span>
                    )}
                  </button>
                </td>
              </tr>
            ))}
          {!projets && (
            <tr>
              <td colSpan="4">
                <Spinner />
              </td>
            </tr>
          )}
          {projets && !projets.length && (
            <tr>
              <td colSpan="4" className="text-center">
                <div className="p-2">Pas de projets à afficher</div>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </Layout>
  );
}
