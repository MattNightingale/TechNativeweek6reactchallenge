import { NavLink } from "react-router-dom";
import styles from "./SiteNav.module.css";

function SiteNav() {
  const navLinks = [
    { label: "Home", url: "/" },
    //{ label: "Contact", url: "/contact" },
    { label: "Projects", url: "/projects"},
    { label: "React Demo", url: "/reactdemo"},
  ];
  return (
    <div className={styles.wrapper}>
      <nav className={styles.links}>
        {navLinks.map((navLink) => (
          <NavLink
            key={navLink.url}
            to={navLink.url}
            className={({ isActive }) =>
              isActive ? styles.activeLink : styles.inactiveLink
            }
          >
            {navLink.label}
          </NavLink>
        ))}
      </nav>
    </div>
  );
}

export default SiteNav;