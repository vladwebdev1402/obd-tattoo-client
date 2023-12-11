import React, { FC, useState } from "react";
import st from "./container.module.scss";
import { IShopItem } from "@/types/entity/shopItem";
import BtnChangeCount from "@/components/btnChangeCount/BtnChangeCount";
import ClipButton from "@UI/button/clipButton/ClipButton";
import ModalAuth from "@/components/modalAuth/ModalAuth";
import AuthStore from "@/store/AuthStore/AuthStore";
interface Props {
  item: IShopItem;
}

const ContainerBriefInfoProduct: FC<Props> = ({ item }) => {
  const [modal, setModal] = useState(false);
  return (
    <div className={st.containerBriefInfo}>
      {modal && <ModalAuth setModal={setModal} />}
      <div className={st.itemNameTxt}>{item.name}</div>
      <div className={st.priceBlock}>
        <span className={st.currentPrice}>
          {item.price.toLocaleString("ru-RU")} ₽
        </span>
        {item.oldPrice > 0 && (
          <span className={st.oldPrice}>
            {item.oldPrice.toLocaleString("ru-RU")}
          </span>
        )}
        <span className={st.availability}>
          <span className={st.availabilityTxt}>Наличие: </span>
          {item.count}
        </span>
        <BtnChangeCount item={item} className={st.mobileChangeCount} />
      </div>
      <div className={st.descriptionBlock}>
        <div className={st.descriptionTxt}>Описание:</div>
        <span className={st.descriptionTxt}>
          {item.description.split("/n")[0]}
        </span>
      </div>
      <div className={st.basketUtilsContainer}>
        <div className={st.utilsBasket}>
          <BtnChangeCount item={item} className={st.desktopChangeCount} />
          <div className={st.addInBasketBtn}>
            <ClipButton
              theme="dark"
              onClick={() => {
                if (!AuthStore.auth) setModal(!modal);
              }}
            >
              Добавить в корзину
            </ClipButton>
          </div>
          <button className={st.shareBtn}>Поделиться</button>
        </div>
      </div>
    </div>
  );
};

export default ContainerBriefInfoProduct;
