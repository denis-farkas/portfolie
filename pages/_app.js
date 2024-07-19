import Head from "next/head";
import "normalize.css/normalize.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "styles/globals.css";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

import { userService } from "services";
import { Alert } from "components";
import Footer from "components/Footer";
import Header from "components/Header";

import { Outfit } from "next/font/google";

const outfit = Outfit({
  weight: ["400", "700", "900"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
});

export default App;

function App({ Component, pageProps }) {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [authorized, setAuthorized] = useState(false);

  useEffect(() => {
    // on initial load - run auth check
    authCheck(router.asPath);

    // on route change start - hide page content by setting authorized to false
    const hideContent = () => setAuthorized(false);
    router.events.on("routeChangeStart", hideContent);

    // on route change complete - run auth check
    router.events.on("routeChangeComplete", authCheck);

    // unsubscribe from events in useEffect return function
    return () => {
      router.events.off("routeChangeStart", hideContent);
      router.events.off("routeChangeComplete", authCheck);
    };
  }, []);

  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  function authCheck(url) {
    // redirect to login page if accessing a private page and not logged in
    setUser(userService.userValue);

    const publicPaths = [
      "/account/login",
      "/",
      "/projets",
      "/projets/view",
      "/contacts/add",
      "/frontend",
      "/superprof",
      "/backend",
      "/cv",
    ];
    let path = url.split("?")[0];
    let pathWith = path.split("/");
    if (pathWith.length > 3) {
      path = "/" + pathWith[1] + "/" + pathWith[2];
    }

    if (!userService.userValue && !publicPaths.includes(path)) {
      setAuthorized(false);
      router.push({
        pathname: "/account/login",
        query: { returnUrl: router.asPath },
      });
    } else {
      setAuthorized(true);
    }
  }

  return (
    <>
      <Head>
        <title>Denis Farkas - Atelier horizon du web</title>
        <meta
          name="description"
          content="Portfolio Denis Farkas, Atelier horizon du web"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className="app-container roboto.className">
        <Alert />
        {authorized && <Component {...pageProps} />}
      </div>
      <Footer />
    </>
  );
}
