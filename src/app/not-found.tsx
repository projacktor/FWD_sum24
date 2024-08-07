import Image from 'next/image';

import style from '@/styles/not-found.module.css';

import pic from '@/assets/svg/404.svg';

function NotFound() {
  return (
    <main className={style.notFound}>
      <h1>404</h1>
      <h2>
        <span className="pink">Sorry</span>, there{' '}
        <span className="pink">no</span> such page
      </h2>
      <Image alt="page-not-found_picture" src={pic as string} priority={true} />
    </main>
  );
}

export default NotFound;
