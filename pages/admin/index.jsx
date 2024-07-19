import { useState, useEffect } from "react";
import Link from "next/link";
import { userService } from "services";

export default Index;
// composant pour la page admin
function Index() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const subscription = userService.user.subscribe((x) => setUser(x));
    return () => subscription.unsubscribe();
  }, []);

  return (
    <div className="p-4">
      <div className="container">
        <p>Tableau de Bord</p>

        {user && user.roles === "ADMIN" ? (
          <>
            <Link href={"/users"} className="nav-link ">
              Gérer les utilisateurs
            </Link>
            <Link href={"/projets/admin"} className="nav-link ">
              Gérer les projets
            </Link>
            <Link href={"/contacts"} className="nav-link ">
              Gérer les messages
            </Link>
          </>
        ) : (
          <>
            <p> Vous n&apos;êtes pas authorisé à accéder à cet espace </p>
          </>
        )}
      </div>
    </div>
  );
}
