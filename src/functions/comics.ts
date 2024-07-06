import { Comic } from '@/interfaces/comic';

const email: string = 'a.galiev@innopolis.university';
const api: string = 'https://fwd.innopolis.university/api/hw2';
const comicUrl: string = 'https://fwd.innopolis.university/api/comic';

export async function getComicsId(): Promise<number | undefined> {
  try {
    const params = new URLSearchParams({ email: email });
    const response = await fetch(`${api}?email=${params.toString()}`);
    if (!response.ok) {
      throw new Error("Network isn't ok!");
    }
    const data: number = await response.json();
    console.log('Api response:', data);
    return data;
  } catch (error) {
    console.error('Error fetching id', error);
    alert('Look to console');
    return undefined;
  }
}

export async function getComics(comicId: number): Promise<Comic | undefined> {
  try {
    const response = await fetch(`${comicUrl}?id=${comicId}`);
    if (!response.ok) {
      throw new Error("Network isn't ok!");
    }
    const comicsData: Comic = await response.json();
    console.log('Comic Data:', comicsData);
    return comicsData;
  } catch (error) {
    console.error('Error fetching data', error);
    alert('Look to console');
    return undefined;
  }
}
