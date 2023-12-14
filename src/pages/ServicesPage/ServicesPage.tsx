import React, { useEffect } from "react";
import Breadcrumbs from "../../components/breadcrumbs/Breadcrumbs";
import Ordering from "../../components/ordering/Ordering";
import ServiceItem from "../../components/serviceItem/ServiceItem";
import { servicesData } from "../../data/servicesData";
import st from "./ServicesPage.module.scss";
import { ProfileStore } from "@/store";
const ServicesPage = () => {
  useEffect(() => {
    window.scrollTo({ top: 100, behavior: "smooth" });
  }, []);
  return (
    <div className={st.container}>
      <Breadcrumbs className={st.margin} />
      <h1 className={st.margin}>Доп. услуги</h1>
      <div className={st.contentPage}>
        <div className={st.servicesContainer}>
          {servicesData.map((item) => (
            <ServiceItem key={item.id} item={item} />
          ))}
        </div>
        <Ordering contacts={ProfileStore.parseResToInputs()} />
      </div>
    </div>
  );
};

export default ServicesPage;
