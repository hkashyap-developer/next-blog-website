import Image from "next/image";

import { client } from "@/utils/configSanity"


interface iPortfolio {
  _id: string; 
  title: string; 
  _createdAt: string; 
}

async function getData() {
  const query =  `*[_type== 'portfolio']`;
  const data = await client.fetch(query);
  return data as iPortfolio[]; 
}

export default async function Home() {

  const data = (await getData()) as iPortfolio[];
  console.log(data); 

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      test1
      {data?.map((item) => (
        <div key="{item?._id}">
          <h1>{item?.name}</h1>
          </div>
      ))}
      test2
    </main>
  );
}
