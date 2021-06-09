const categorias = [
  "Noticias de deporte",
  "Noticias de ocio",
  "Noticias de política",
  "Noticias de espectáculos",
];

const otrasCosas = ["Nosequé", "Nosecuánto", "Talycual"];

const printCategorias = (data) => {
  const dataBody = data.map((item, i) => {
    return (
      <li key={i} value={item}>
        {item}
      </li>
    );
  });
  return dataBody;
};
let categoriasBody = printCategorias(categorias);
let otrasCosasBody = printCategorias(otrasCosas);

export const asideMenu = (
  <>
    <aside class="barra-lateral">
      <nav>
        <h2>Categorías</h2>
        <ul>{categoriasBody}</ul>
        <h2>Otras cosas</h2>
        <ul>{otrasCosasBody}</ul>
      </nav>
    </aside>
  </>
);
