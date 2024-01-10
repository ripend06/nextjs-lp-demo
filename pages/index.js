import { getClient } from '@/libs/client';
import styles from '@/styles/Home.module.css'
import Image from 'next/image';
import Qa from './components/Qa';
import Demo from './components/demo';


//SSG
export const getStaticProps = async() => {
  const client = getClient();
  //LPデータ
  const data = await client.get({ endpoint: "lp-test "});
  //console.log(data);  // データ全体を表示
  // console.log(data.contents);  // データ全体を表示
  // console.log(data.contents[0].top);  // データ全体を表示
  // console.log(data.contents[0].top.image);  // データ全体を表示
  // console.log(data.contents[0].top.image.url);  // データ全体を表示
  //console.log(data.contents[0].fvBottom);  // データ全体を表示

  //QAデータ
  const qaData = await client.get({ endpoint: "qanda"});
  // console.log(qaData);
  // console.log(qaData.contents[0].qa);

  return {
    props: {
      lpdata: data,
      //lpdataImage: data.contents.image,
      qaData: qaData,
    },
  };
};


export default function Home({ lpdata, qaData }) {
  return (
    <>
      <div className="body">
        {lpdata.contents.map((lpdata) => (
          <div key={lpdata.id}>
            <div>{lpdata.fv.head}</div>
            <div>{lpdata.fv.head_small}</div>
            <div>{lpdata.fv.description}</div>
            <img src={lpdata.fv.image.url} alt="Image" />
            <Image
              src={lpdata.fv.image.url}
              width={750}
              height={750}
              alt=''
            />
            <div class={lpdata.fvBottom.fieldId}>
              <div>{lpdata.fvBottom.fvBottom1}</div>
              <div dangerouslySetInnerHTML={{ __html: lpdata.fvBottom.fvBottom1 }} />
              <div>{lpdata.fvBottom.fvBottom2}</div>
            </div>
            <div>================================================================================================================</div>
            <div>================================================================================================================</div>
            {/* <Demo lpdata={lpdata}/> */}
            <Image
              src={lpdata.fv.image.url}
              width={750}
              height={750}
              alt=''
            />
            {/* QAコンポーネント */}
            <Qa qaData={qaData}/>
          </div>
        ))}
      </div>
    </>
  );
}
