import { useState, useEffect } from "react";
import { useRouter } from "next/router";

import { Layout, AddEditProjet } from "components/projets";
import { Spinner } from "components";
import { projetService, alertService } from "services";

export default Edit;

function Edit() {
  const router = useRouter();
  const [projet, setProjet] = useState(null);

  useEffect(() => {
    const { id } = router.query;
    if (!id) return;

    // fetch projet and set default form values if in edit mode
    projetService
      .getById(id)
      .then((x) => setProjet(x))
      .catch(alertService.error);
  }, [router]);

  return (
    <Layout>
      <h1>modifier projet</h1>
      {projet ? <AddEditProjet projet={projet} /> : <Spinner />}
    </Layout>
  );
}
