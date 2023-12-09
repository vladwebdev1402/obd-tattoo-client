import React, { FC, useState } from "react";
import st from "./container.module.scss";
import ImgRadio from "@UI/radio/imgRadio/ImgRadio";
import { IMarcers } from "@/types/shopItem";
import Marcers from "@/components/ShopItem/Marcers/Marcers";
import FavoriteItem from "@UI/icons/itemIcons/favoriteIcon/FavoriteItem";
interface Props {
  image: string;
  marcers: IMarcers;
  id: number;
}
const ContainerImagesProduct: FC<Props> = ({ image, marcers, id }) => {
  const [activeIdx, setActiveIdx] = useState<number>(0);

  return (
    <div className={st.container}>
      <div className={st.container__body}>
        <Marcers marcers={marcers} />
        <FavoriteItem id={id} className={st.favorite} />
        <img className={st.image} src={image} />
      </div>
    </div>
  );
};

export default ContainerImagesProduct;
