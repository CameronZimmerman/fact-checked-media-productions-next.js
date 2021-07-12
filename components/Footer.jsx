import style from '../styles/Footer.module.css';
import Router from 'next/router';
const Footer = () => {

  const handleButtonClick = () => {
    Router.push({
      pathname: '/Contact',
      query: {meeting: true}
    })
  };
  return (
    <div className={style.footer}>
      <p>
        Do you want help spreading your message? I would love to have a quick
        chat. Click <button onClick={() => handleButtonClick()}>Here</button> to set up a meeting.
      </p>
    </div>
  );
};

export default Footer;
