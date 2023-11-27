import React from "react";
import styles from "./LinkRow.module.scss";
import { useMatch, Link } from "react-router-dom";
interface LinkProps {
  name: string;
  to: string;
}

const MyLink: React.FC<LinkProps> = ({ name, to }) => {
  const match = useMatch(to);
  return (
    <Link to={to}>
      <span className={`${match && styles.active} ${styles.link}`}>{name}</span>
    </Link>
  );
};

export default MyLink;
