import style from '../styles/CaptionedImage.module.css';
import Link from 'next/link';
const CaptionedImage = ({image, heading, text, link}) => {
  return (
    <div className={style.container}>
      <img src={image} alt={heading} />
      <div className={style.overlay}>
        <h4 className="headers">{heading}</h4>
        <p>{text}</p>
        <Link href={link}>
          <a className="button" target="_blank" rel="noreferrer">
            View more
          </a>
        </Link>
      </div>
    </div>
  );
};

export default CaptionedImage;
