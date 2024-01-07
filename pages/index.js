import { client } from '@/libs/client';
import styles from '@/styles/Home.module.css'

//SSG
export const getStaticProps = async() => {
  const data = await client.get({ endpoint: "lp-test "});
  console.log(data);  // データ全体を表示
  // console.log(data.contents);  // データ全体を表示
  // console.log(data.contents[0].top);  // データ全体を表示
  // console.log(data.contents[0].top.image);  // データ全体を表示
  // console.log(data.contents[0].top.image.url);  // データ全体を表示
  console.log(data.contents[0].fvBottom);  // データ全体を表示
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
      <div>
        {lpdata.contents.map((lpdata) => (
          <div key={lpdata.id}>
            <div>{lpdata.fv.head}</div>
            <div>{lpdata.fv.head_small}</div>
            <div>{lpdata.fv.description}</div>
            <img src={lpdata.fv.image.url} alt="Image" />
            <div class={lpdata.fvBottom.fieldId}>
              <div>{lpdata.fvBottom.fvBottom1}</div>
              <div dangerouslySetInnerHTML={{ __html: lpdata.fvBottom.fvBottom1 }} />
              <div>{lpdata.fvBottom.fvBottom2}</div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
