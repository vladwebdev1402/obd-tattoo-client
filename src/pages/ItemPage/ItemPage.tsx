import React, { FC, useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import Breadcrumbs from "@/components/breadcrumbs/Breadcrumbs";
import { minishopData } from "@/data/minishopData";
import { IShopItem } from "@/types/shopItem";
import st from "./ItemPage.module.scss";
import SubBlockItems from "@/components/SubBlockItems/SubBlockItems";
import ContainerImagesProduct from "./components/containerImagesProduct/ContainerImagesProduct";
import ContainerBriefInfoProduct from "./components/containerBriefInfoProduct/ContainerBriefInfoProduct";
const ItemPage: FC = () => {
  const params = useParams<{ id: string }>();
  const [item, setItem] = useState<IShopItem>();
  useEffect(() => {
    setTimeout(() => {
      setItem(minishopData.filter((item) => item.id === Number(params.id))[0]);
    }, 800);
  }, [params]);

  useEffect(() => {
    window.scrollTo({ top: 100, behavior: "smooth" });
  }, [item]);

  if (item) {
    return (
      <div className={st.containerPage}>
        <Breadcrumbs
          params={true}
          nameParams={item.name}
          className={st.breadcrumbs}
        />

        <div className={st.itemNameTxt}>{item.name}</div>
        <div className={st.imagesAndBriefInfo}>
          <ContainerImagesProduct
            images={item.img}
            marcers={item.marcers || {}}
            id={item.id}
          />
          <ContainerBriefInfoProduct item={item} />
        </div>
        <div className={st.fullInfoContainer}>
          <div className={st.descriptionContainer}>
            <div className={st.titleBlock}>Описание</div>
            <div className={st.descriptionBlock}>
              {item.description.split("/").map((desc) => (
                <p key={desc}>{desc}</p>
              ))}
            </div>
          </div>
        </div>

        <SubBlockItems
          title="Товары этого бренда"
          watchAll={() => {}}
          items={minishopData}
        />

        <SubBlockItems
          title="Похожие товары"
          watchAll={() => {}}
          items={minishopData}
        />
      </div>
    );
  }

  return <div className={st.load}></div>;
};

export default ItemPage;
