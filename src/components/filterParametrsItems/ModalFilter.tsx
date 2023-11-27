import React, { FC, useState } from "react";
import st from "./ModalFilter.module.scss";

interface Props {
  name: string;
  children?: React.ReactNode;
  inStock?: boolean;
}

const ModalFilter: FC<Props> = ({ name, children, inStock = false }) => {
  const [open, setOpen] = useState<boolean>(true);
  if (inStock) {
    return (
      <div className={`${st.modalFilterContainer}  ${open && st.active}`}>
        <div className={st.modalFilterHeader}>
          <span className={st.filterName}>{name}</span>
          {children}
        </div>
        <div className="horizontal-divider" style={{ marginTop: "30px" }}></div>
      </div>
    );
  }
  return (
    <div className={`${st.modalFilterContainer}  ${open && st.active}`}>
      <div
        className={st.modalFilterHeader}
        onClick={() => {
          setOpen(!open);
        }}
      >
        <span className={st.filterName}>{name}</span>
        <div className={st.arrowFilter}></div>
      </div>
      <div className={st.filterBody}>
        <div className={st.filterChildren}>{children}</div>

        <div className="horizontal-divider" style={{ marginTop: "30px" }}></div>
      </div>
    </div>
  );
};

export default ModalFilter;
