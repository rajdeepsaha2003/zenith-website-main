import Link from "next/link"

const AgencyBlogItem=(props)=>{
return(
<>
<div className="col-lg-4 col-md-6">
<div className="ag-blog-card">
    <div className="blog-thumb">
        <Link href="/"legacyBehavior>
        <a>
            <img src={props.img} alt=""/>
        </a>
        </Link>
    </div>
    <div className="blog-disc">
        <ul className="blog-meta d-flex flex-wrap gap-2">
            <li><Link href="/"legacyBehavior><a>Design</a></Link></li>
            <li><Link href="/"legacyBehavior><a>App</a></Link></li>
        </ul>
        <h3 className="blog-title">
            
        <Link href="/"legacyBehavior><a>{props.title}</a></Link>
            
        </h3>
        <div className="blog-btn">
            <Link href="/"legacyBehavior><a>Read More <i className="bi bi-arrow-right"></i></a></Link>
        </div>
    </div>
</div>
</div>
</>
)
}
export default AgencyBlogItem