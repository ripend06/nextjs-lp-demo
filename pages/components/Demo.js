function Demo( { lpdata } ) {
    console.log('lpdata:', lpdata);  // データが渡されているか確認
    return (
        <>
            Demoコンポーネントです
            <div>{lpdata.fv.head}</div>
            <div>{lpdata.fv.head_small}</div>
            <div>{lpdata.fv.description}</div>
            <img src={lpdata.fv.image.url} alt="Image" />
            <div class={lpdata.fvBottom.fieldId}>
              <div>{lpdata.fvBottom.fvBottom1}</div>
              <div dangerouslySetInnerHTML={{ __html: lpdata.fvBottom.fvBottom1 }} />
              <div>{lpdata.fvBottom.fvBottom2}</div>
            </div>
        </>
    );
}

export default Demo;