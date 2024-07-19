import Auteur from "components/Auteur";
import HeadSection from "components/HeadSection";
import { SectionBack, SectionFront, SectionProf } from "components/projets";

export default function Home() {
  return (
    <>
      <HeadSection />
      <Auteur />
      <SectionBack />
      <SectionFront />
      <SectionProf />
    </>
  );
}
