import style from './style.module.css';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

interface SwitchButtonProps {
  page_link: string;
  page_text: string;
}

function SwitchButton({ page_link, page_text }: SwitchButtonProps) {
  const router = useRouter();
  const handleClick = (address: string) => {
    router.push(address);
  };
  return (
    <button
      className={style.switch_comics}
      onClick={() => handleClick(page_link)}
    >
      <Link href={page_link}>{page_text}</Link>
    </button>
  );
}

export default SwitchButton;
