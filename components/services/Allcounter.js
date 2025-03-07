import CounupItem from "./countupitem"
import { useRef } from "react"
import { useIsVisible } from 'react-is-visible'


const AllCounter=()=>{
const nodeRef = useRef()
const isVisible = useIsVisible(nodeRef)


return(
<>
<div className="counter-area pb-100">
<div className="container" ref={nodeRef}>
<div className="row">
<div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
<div className="counter-wrap">

{isVisible?
<div className="row">
    <CounupItem title="Centre" countUp={8}/>
    <CounupItem title="Successful Students" countUp={5000}/>
    <CounupItem title="IITians" countUp={500}/>
    <CounupItem title="MBBS" countUp={500}/>
</div>:null
}

</div>
</div>
</div>
</div>
</div>
</>
)
}
export default AllCounter