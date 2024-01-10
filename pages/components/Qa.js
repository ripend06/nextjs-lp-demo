import { getClient } from "@/libs/client";

//SSG
// export const getStaticProps = async() => {
//     const client = getClient();
//     const qaData = await client.get({ endpoint: "qanda"});
//     console.log(qaData);
//     console.log(qaData.contents[0].qa);
//     return {
//         props: {
//             qaData: qaData,
//         },
//     };
// };

function Qa({ qaData }) {
    return (
        <>
            <div>
                <h2>QAコンポーネント</h2>
                {qaData.contents && qaData.contents.map((item) => (
                <div key={item.id}>
                    {item.qa && item.qa.map((qaItem, index) => (
                    <div key={index}>
                        <div>{qaItem.questionText}</div>
                        <div>{qaItem.anserText}</div>
                    </div>
                    ))}
                </div>
                ))}
            </div>
        </>
    );
}

export default Qa;