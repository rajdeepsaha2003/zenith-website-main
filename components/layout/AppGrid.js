import AppsList from "./AppsList"

const LayoutAppGrid=()=>{
return(
<>
<div className="apps-area positioning pb-76  pt-100">
<div className="container">
<div className="row">
    <div className="col-lg-12">
        <div className="hrdd-section-title text-center wow animate fadeInDown" data-wow-delay="100ms" data-wow-duration="1500ms">
            <h1><span>Happy</span> Moments</h1>
            <p className="latest-text">Best  Memories we have had at Zenith</p>
        </div>
    </div>
</div>
<div className="row row-cols-1 row-cols-xl-5 row-cols-lg-5 row-cols-md-2  row-cols-sm-2 mt-50">
    <AppsList
     icon="https://firebasestorage.googleapis.com/v0/b/cloud-profiler-demo-399610.appspot.com/o/zenith-website%2F1.jpg?alt=media&token=582dfbed-71d3-4b90-8df4-9a5a17d2bb9b"
    />
    <AppsList
     icon="https://firebasestorage.googleapis.com/v0/b/cloud-profiler-demo-399610.appspot.com/o/zenith-website%2F2.jpg?alt=media&token=0f6905a5-8c51-4d74-aafa-d825680023e3"
    />
    <AppsList
     icon="https://firebasestorage.googleapis.com/v0/b/cloud-profiler-demo-399610.appspot.com/o/zenith-website%2F3.jpg?alt=media&token=8fd1f6cd-eb8a-4db9-9703-aad8cf856ca9"
    />
    <AppsList
     icon="https://firebasestorage.googleapis.com/v0/b/cloud-profiler-demo-399610.appspot.com/o/zenith-website%2F4.jpg?alt=media&token=bcc862b9-279a-42e2-8142-b7a1bb5a712c"
    />
    <AppsList
     icon="https://firebasestorage.googleapis.com/v0/b/cloud-profiler-demo-399610.appspot.com/o/zenith-website%2F5.jpg?alt=media&token=53be8aea-22e7-4bc4-a910-c62e8ad7d2af"
    />
</div>
</div>
<img className="shape hrrd-app-shape" src="/assets/images/shape/hrrd-app.png" alt=""/>
</div>
</>
)
}
export default LayoutAppGrid