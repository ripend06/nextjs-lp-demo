import { getClient } from '@/libs/client';
import styles from '@/styles/Home.module.css'
import Image from 'next/image';
// import Demo from './components/demo';


//SSG
export const getStaticProps = async() => {
  const client = getClient();
  const data = await client.get({ endpoint: "lp-test "});
  //console.log(data);  // データ全体を表示
  // console.log(data.contents);  // データ全体を表示
  // console.log(data.contents[0].top);  // データ全体を表示
  // console.log(data.contents[0].top.image);  // データ全体を表示
  // console.log(data.contents[0].top.image.url);  // データ全体を表示
  //console.log(data.contents[0].fvBottom);  // データ全体を表示
  return {
    props: {
      lpdata: data,
      //lpdataImage: data.contents.image,
    },
  };
};



export default function Home({ lpdata }) {
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
          </div>
        ))}
      </div>
    </>
  );
}
