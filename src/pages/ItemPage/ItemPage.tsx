import React, { FC, useEffect, useMemo } from "react";
import { useParams } from "react-router-dom";
import Breadcrumbs from "@/components/breadcrumbs/Breadcrumbs";
import st from "./ItemPage.module.scss";
import SubBlockItems from "@/components/SubBlockItems/SubBlockItems";
import ContainerImagesProduct from "./components/containerImagesProduct/ContainerImagesProduct";
import ContainerBriefInfoProduct from "./components/containerBriefInfoProduct/ContainerBriefInfoProduct";
import { CategoryStore, ItemPageStore } from "@/store";
import { observer } from "mobx-react-lite";
const ItemPage: FC = observer(() => {
  const params = useParams<{ id: string; category: string }>();

  useEffect(() => {
    ItemPageStore.getAll(params.id || "");
    window.scrollTo({ top: 100 });
  }, [params.id]);
  const category = useMemo(() => {
    const c = CategoryStore.data.filter((c) => c._id === params.category)[0];
    return c;
  }, [params.category, CategoryStore.data]);
  return (
    <div className={st.containerPage}>
      {ItemPageStore.item !== null && ItemPageStore.isLoadingComplete && (
        <>
          <Breadcrumbs
            className={st.breadcrumbs}
            params={[category.name ?? "", ItemPageStore.item.name ?? ""]}
          />

          <div className={st.itemNameTxt}>{ItemPageStore.item.name}</div>
          <div className={st.imagesAndBriefInfo}>
            <ContainerImagesProduct
              image={ItemPageStore.item.image}
              marcers={ItemPageStore.item.marcers}
              id={ItemPageStore.item._id}
            />
            <ContainerBriefInfoProduct item={ItemPageStore.item} />
          </div>
          <div className={st.descriptionContainer}>
            <div className={st.titleBlock}>Описание</div>
            <div className={st.descriptionBlock}>
              {ItemPageStore.item.description.split("/n").map((desc) => (
                <p key={desc}>{desc}</p>
              ))}
            </div>
          </div>

          <SubBlockItems
            title="Товары этого бренда"
            watchAll={() => {}}
            items={ItemPageStore.brandItems}
          />

          <SubBlockItems
            title="Похожие товары"
            watchAll={() => {}}
            items={ItemPageStore.categoryItems}
          />
        </>
      )}
      {!ItemPageStore.isLoadingComplete && <div className={st.load}></div>}
      {ItemPageStore.isLoadingComplete && ItemPageStore.error && (
        <div className={st.error}>
          При запросе товаров на сервере произошла ошибка
        </div>
      )}
    </div>
  );
});

export default ItemPage;
