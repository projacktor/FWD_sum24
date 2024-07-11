import style from './style.module.css';
import Link from 'next/link';

interface SwitchButtonProps {
  page_link: string;
  page_text: string;
}

function SwitchButton({ page_link, page_text }: SwitchButtonProps) {
  return (
    // <button
    //   className={style.switch_comics}
    //   onClick={() => handleClick(page_link)}
    // >
    //   <Link href={page_link}>{page_text}</Link>
    // </button>
    <Link href={page_link}>
      <button className={style.switch_comics}>
        {page_text}
      </button>
    </Link>
  );
}

export default SwitchButton;
