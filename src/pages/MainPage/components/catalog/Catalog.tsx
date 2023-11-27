import React, { FC } from "react";
import styles from "./Catalog.module.scss";
import CatalogItem from "./catalogItem/CatalogItem";
import CatalogFooter from "./catalogFooter/CatalogFooter";
import { useNavigate } from "react-router-dom";
const Catalog: FC = () => {
  const navigate = useNavigate();
  return (
    <section className={styles.catalogContainer}>
      <h1 className={styles.catalogHeader}>Каталог</h1>

      <div className={styles.catalogBody}>
        <CatalogItem
          name="Тату наборы"
          onClick={() => navigate("/tattoo-react/catalog/tatto-kits")}
        />
        <CatalogItem
          name="Держатели"
          onClick={() => navigate("/tattoo-react/catalog/holders")}
        />
        <CatalogItem
          onClick={() => navigate("/tattoo-react/catalog/tattoo-machine")}
          name="Тату машинки"
        />
        <CatalogItem
          onClick={() => navigate("/tattoo-react/catalog/wires")}
          name="Педали и провода"
        />
        <CatalogItem
          onClick={() => navigate("/tattoo-react/catalog/paints")}
          name="Краски"
        />
        <CatalogItem
          onClick={() => navigate("/tattoo-react/catalog/power")}
          name="Блоки питания"
        />
        <CatalogItem
          onClick={() => navigate("/tattoo-react/catalog/tattoo-tips")}
          name="Наконечники"
        />
        <CatalogItem
          onClick={() => navigate("/tattoo-react/catalog/tatto-needles")}
          name="Тату иглы"
        />
        <CatalogItem
          onClick={() => navigate("/tattoo-react/catalog/consumables")}
          name="Защита, ёмкости, расходники"
        />
        <CatalogItem
          onClick={() => navigate("/tattoo-react/catalog/accessories")}
          name="Аксессуары"
        />
        <CatalogItem
          onClick={() => navigate("/tattoo-react/catalog/printers")}
          name="Принтеры и планшеты"
        />
      </div>
      <CatalogFooter />
    </section>
  );
};

export default Catalog;
