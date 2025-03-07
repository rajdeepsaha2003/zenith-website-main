import Link from "next/link"

const ClientLogoItem=()=>{
return(
<>
<div className="ag-client-logobox">
    <Link href="/"legacyBehavior>
    <a>
        <img src="assets/images/agency/client-logo/aven.png" alt=""/>
    </a>
    </Link>
</div>
</>
)
}
export default ClientLogoItem