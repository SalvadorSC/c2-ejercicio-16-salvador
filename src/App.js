/* eslint-disable jsx-a11y/anchor-is-valid */
import { cabecera } from "./components/Cabecera";
import { asideMenu } from "./components/AsideMenu";
import { cuerpoNoticia } from "./components/noticiaPrincipal";
import { footer } from "./components/Footer";

function App() {
  const titular = "Titular de la noticia";

  return (
    <>
      <div class="contenido-general">
        {cabecera}
        <main class="contenido-principal">
          <section class="noticia-principal">
            <h2>{titular}</h2>
            {cuerpoNoticia}
          </section>
          {asideMenu}
        </main>
        {footer}
      </div>
    </>
  );
}

export default App;
