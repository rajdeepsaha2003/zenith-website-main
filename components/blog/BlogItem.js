import Link from "next/link"

const BlogItem=(props)=>{
return(
<>
<div className="col-xxl-6 col-xl-6 col-lg-12 col-md-12 col-sm-12 col-12">
<div className="blog-post-wrap">
    <h1><Link href="/"legacyBehavior><a>{props.title}</a></Link></h1>
    <ul>
        <li><i className="bi bi-person-fill"></i> 
        <Link href="/"legacyBehavior><a>{props.author}</a></Link>
        </li>
        <li><i className="bi bi-calendar3"></i> 
         <Link href="/"legacyBehavior><a>{props.published_at}</a></Link>
        </li>
        <li><i className="bi bi-chat-left-text-fill"></i> 
         <Link href="/"legacyBehavior><a>{props.comments}</a></Link>
        </li>
    </ul>
    <p>{props.desc}</p>
    <Link href="/"legacyBehavior><a className="blog-post-btn">Read More <i className='bx bx-chevron-right'></i></a></Link>
</div>
</div>
<div className="col-xxl-6 col-xl-6 col-lg-12 col-md-12 col-sm-12 col-12">
<div className="blog-post-img">
    <Link href="/"legacyBehavior><a><img src="assets/images/blog/blog-1.png" alt=""/></a></Link>
</div>
</div>
</>
)
}
export default BlogItem