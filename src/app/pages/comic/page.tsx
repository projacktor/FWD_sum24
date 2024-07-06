'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { getComicsId, getComics } from '@/functions/comics';
import { formatDistanceToNow } from 'date-fns';
import SwitchButton from '@/components/shared/Switch button/SwitchButton';
import { Comic } from '@/interfaces/comic';

import style from './page.module.css';

const ComicComponent: React.FC = () => {
  const [comic, setComic] = useState<Comic | null>(null);

  useEffect(() => {
    const loadComic = async () => {
      const comicId = await getComicsId();
      if (comicId) {
        const comicData = await getComics(comicId);
        if (comicData) {
          setComic(comicData);
        }
      }
    };

    loadComic();
  }, []);

  const renderComic = (comic: Comic) => {
    const date = new Date(
      parseInt(comic.year),
      parseInt(comic.month) - 1,
      parseInt(comic.day)
    );

    return (
      <div className={style.comic}>
        <h2>{comic.safe_title}</h2>
        <Image src={comic.img} alt={comic.alt} width="500" height="500" />
        <time dateTime={date.toISOString()}>
          {formatDistanceToNow(date, { addSuffix: true })}
        </time>
        <p>{parseComicText(comic.transcript)}</p>
      </div>
    );
  };

  const parseComicText = (text: string) => {
    const regex = /(\{{2}[^}]+\}{2})|(\[{2}[^]]+\]{2})|(\n)|([^{[]+)/g;
    const elements = [];
    let match;
    let index = 0;

    while ((match = regex.exec(text)) !== null) {
      if (match[1]) {
        elements.push(<em key={index++}>{match[1].slice(2, -2)}</em>);
      } else if (match[2]) {
        elements.push(<strong key={index++}>{match[2].slice(2, -2)}</strong>);
      } else if (match[3]) {
        elements.push(<br key={index++} />);
      } else if (match[4]) {
        elements.push(<span key={index++}>{match[4]}</span>);
      }
    }

    return elements;
  };

  return (
    <main className={style.comics}>
      <article className="comics_content">
        {comic ? renderComic(comic) : <p>Loading...</p>}
      </article>

      <SwitchButton page_text="Main" page_link="/" />
    </main>
  );
};

export default ComicComponent;
