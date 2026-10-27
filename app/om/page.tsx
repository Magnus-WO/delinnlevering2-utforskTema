import "./AboutPage.css";

export default function AboutPage() {
  return (
    <section className="AboutPage">
      <h1>Om oss</h1>
      <h2>
        Hei og velkommen til <span>Alemistens Almanakk! </span>
      </h2>
      <div>
        <p>
          Denne almanakken har ett mål, å gi <span>deg</span> tilgang til
          kunnskapen Alkemisten har gjemt bort i en årrekke.
        </p>
        <p>
          Uansett alder, erfaring, om du er heks eller trollmann, ønsker vi å
          dele Alkemistens erfaringer med deg, i en lettfattelig
          oppskriftsnettside.
        </p>
        <p>
          Her kan du søke etter spesifikke oppskrifter, se gjennom matretter
          basert på kategori, eller få tips dersom de små grå ikke var helt med
          i dag.
        </p>
      </div>
      <div>
        <p>
          I samarbeid med{" "}
          <a href="https://www.themealdb.com/" target="_blank">
            The Meal DB
          </a>{" "}
          gir vi deg nå tilgangen til en verden av oppskrifter.
        </p>
      </div>
      <div>
        <p>
          Alkemistens Almanakk er designet og laget av Magnus Werner Ottesen.
        </p>
        <p>
          Da nettstedets skapelse fant sted i oktober, er det (over)naturlig at
          vi følger månedens tema og har kledd oss ut i Halloweenfarger.
        </p>
      </div>
    </section>
  );
}
