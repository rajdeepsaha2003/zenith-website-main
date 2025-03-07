const FuturedItem=(props)=>{
    const handlePhoneClick = () => {
        if (props.phone) {
          window.location.href = `tel:${props.phone}`;
        }
      };
return(
<>
<div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 wow animate fadeInUp" data-wow-delay="400ms" data-wow-duration="1500ms">
<div className="featured-box"
onClick={handlePhoneClick}
style={{ cursor: props.phone ? 'pointer' : 'default' }}
>
    <div className="featured-icon">
        <img src={props.icon} alt=""/>
    </div>
    <div className="featured-content">
        <h2>{props.title}</h2>
        <p>{props.desc}</p>
        <a href={`tel:${props.phone}`}>{props.phone}</a>
    </div>
</div>
</div>
</>
)
}
export default FuturedItem