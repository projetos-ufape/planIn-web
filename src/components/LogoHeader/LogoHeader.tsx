import styles from './LogoHeader.module.css'
import Logo from '../../assets/Planit.svg'
const LogoHeader = () => {
  return (
    <div>
      <section className={styles.header}>
        <img src={Logo} alt="Logo" />
      </section>
    </div>
  );
};

export default LogoHeader;
