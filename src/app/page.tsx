'use client';

import { useEffect, useState } from 'react';
import { api } from '../http/api';

export default function Home() {
  const [data, setData] = useState<any>(null);

  async function fetchData() {
    console.log(process.env.NEXT_PUBLIC_API_URL);
    const data = await api.get('/users');
    setData(data);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className='flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black'>
      <main className='flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start'>
        <h1>Hello world</h1>
        <span>{data ? JSON.stringify(data) : 'Carregando...'}</span>
      </main>
    </div>
  );
}
