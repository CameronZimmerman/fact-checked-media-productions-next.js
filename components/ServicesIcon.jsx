import style from '../styles/ServicesIcon.module.css';

function ServicesIcon({icon, text}) {
  return (
    <div className={style.service}>
      <img src={icon} alt={text} />
      <h4 className={style.text}>{text}</h4>
    </div>
  );
}

export default ServicesIcon;
