import Link from 'next/link';
import Food from './food/page';

export default async function Home() {
  const ask = `كبسي عالدائرة لتعرفي شو بدنا نطبخ اليوم`;

  return (
    <main className=" my-16 text-center flex flex-col justify-between items-center mx-5">
      <h1 className="text-3xl font-bold text-white">{ask}</h1>
      <Food />
      <div className="text-3xl absolute bottom-4 flex items-center justify-center flex-col">
        <p>&nbsp;صنع بكل حب بواسطة</p>{' '}
        <Link
          target="_blank"
          className="text-white font-extrabold underline"
          href={'https://tahamulla.vercel.app'}
        >
          🧡 طه الملا
        </Link>
      </div>
    </main>
  );
}
