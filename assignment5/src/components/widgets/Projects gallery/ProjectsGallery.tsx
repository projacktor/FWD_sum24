import { useState, useEffect } from 'react';
import style from './style.module.css';
import typing_style from '../Typings/typing_style.module.css';
import { useGalleryScroller, changeScrollerColor } from '@/functions/gallery';
import mbtIcon from '@/assets/projects/MBT_icon.png';
import raIcon from '@/assets/projects/RA_icon.svg';
import rdbIcon from '@/assets/projects/rdb_icon.svg';
import converterIcon from '@/assets/projects/converter_icon.jpg';
import moveArrow from '@/assets/svg/moveArrow.svg';
import Image from 'next/image';

function ProjectsGallery() {
  const totalItems = 4;
  const { currentIndex, moveLeft, moveRight } = useGalleryScroller(totalItems);
  const [headers, setHeaders] = useState([
    'MetaBacTrack',
    'Respiratory activity',
    'ReadingDataBase',
    'Converter bot',
  ]);
  const [descriptions, setDescriptions] = useState([
    'Metabolic Bacterial Tracking is an interface for optimization of calculating Excel tables which are gotten from the special device.',
    'Respiratory activity is the interface for calculating respiratory activity of the soil with Excel tables. The program is registered as a Result of Intellectual Activity by Kazan Federal University.',
    'RBD is the bot that was made for helping high school students in essay writing. The bot has an interface for relating with a Google Sheet where students can find lots of information about school program books.',
    'The project provides a bot as interface for downloading audio tracks from YouTube videos.',
  ]);
  const [stack, setStack] = useState([
    'Python + PySide6 + Excel',
    'Python + PyQt5 + Excel',
    'Python + GoogleAPI + TeleBot',
    'Python + TeleBot + YouTubeAPI',
  ]);
  const [links, setLink] = useState([
    'https://github.com/projacktor/biolog',
    'https://github.com/projacktor/Soil_respiratory_activity_GUI',
    'https://github.com/projacktor/telegram_RDB_bot',
    'https://github.com/projacktor/Telegram_Audio-Video_bot',
  ]);
  const [images, setImages] = useState([
    mbtIcon,
    raIcon,
    rdbIcon,
    converterIcon,
  ]);
  const [circleColors, setCircleColors] = useState([
    '#DDDDDD',
    '#DDDDDD',
    '#DDDDDD',
    '#DDDDDD',
  ]);

  useEffect(() => {
    // showItem(currentIndex, headers, images, descriptions);
    changeScrollerColor(currentIndex, setCircleColors);
  }, [currentIndex]);

  return (
    <div className={style.projects}>
      <h1>
        My <span className="pink">projects</span>
      </h1>
      <h2>
        from <span className="pink">GitHub</span>
      </h2>
      <div className={`${style.projects_gallery} ${typing_style.container}`}>
        <div className={style.gallery}>
          <div className={'gallery_heads'}>
            {headers.map((header, index) => (
              <h2
                key={index}
                className={'gallery_header'}
                style={{ display: index === currentIndex ? 'block' : 'none' }}
              >
                {header}
              </h2>
            ))}
          </div>
          <div className={'gallery_pictures'}>
            {images.map((image, index) => (
              <div
                key={index}
                className={style.gallery_img}
                style={{ display: index === currentIndex ? 'block' : 'none' }}
              >
                <Image
                  alt={`project_icon_${index}`}
                  src={image as string}
                  priority={false}
                />
              </div>
            ))}
          </div>
          <div className={'gallery_desc'}>
            {descriptions.map((desc, index) => (
              <p
                key={index}
                className={'gallery_para'}
                style={{ display: index === currentIndex ? 'block' : 'none' }}
              >
                {desc}
              </p>
            ))}
            {stack.map((stack, index) => (
              <p
                key={index}
                className={'gallery_para'}
                style={{ display: index === currentIndex ? 'block' : 'none' }}
              >
                <span className={style.gallery_desc_stack}>Stack:</span> {stack}
              </p>
            ))}
            {links.map((a, index) => (
              <a
                key={index}
                href={a}
                style={{ display: index === currentIndex ? 'block' : 'none' }}
                target="_blank"
              >
                GitHub repo
              </a>
            ))}
          </div>
        </div>
        <div className={style.gallery_scroller}>
          <div className={style.gallery_arrows}>
            <button type="button" className={style.moveLeft} onClick={moveLeft}>
              <Image
                className={`${style.mover}`}
                src={moveArrow as string}
                alt="moving Arrow"
              />
            </button>
            <button
              type="button"
              className={style.moveRight}
              onClick={moveRight}
            >
              <Image
                className={`${style.mover} ${style.rightMover}`}
                src={moveArrow as string}
                alt="moving Arrow"
              />
            </button>
          </div>
          <div className={style.gallery_pointer}>
            <svg
              width="110"
              height="10"
              viewBox="0 0 110 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {circleColors.map((color, index) => (
                <circle
                  key={index}
                  cx={index * 25 + 30}
                  cy="5"
                  r="5"
                  fill={color}
                />
              ))}
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectsGallery;
