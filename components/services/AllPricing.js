import { useState } from "react"
import PricingItem from "./pricingitem"

const ServicePricing=()=>{
const [monthly,setMonthly] = useState(false)

return(
<>
<div className="pricing-plan-area mt-100 mb-76">
<div className="container">
<div className="row align-items-center">
    <div className="col-xxl-3 col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12">
        <div className="hrdd-section-title text-capitalize">
            <h1>Pricing <span>Plans</span></h1>
        </div>
    </div>
    <div className="col-xxl-5 col-xl-5 col-lg-4 col-md-12 col-sm-12 col-12 mobt-24">
        <div className="section-text wow animate flipInX" data-wow-delay="300ms" data-wow-duration="1500ms">
            <p>Enrol for our Mock Test Packages for Boards, IIT JEE & NEET to excel in the respective exams.</p>
        </div>
    </div>
</div>
<div className="row mt-50">

  <PricingItem 
    name="Class X Boards"
    perMonth="Rs. 499"
    perYear="Rs. 499"
    prize="Rs. 1000 Cash Prize"
    monthly={monthly}
    list={["3 Mock Test Series",
"Physics, Chemistry, Biology & Maths for ICSE",
"Science & Maths for CBSE",
"Test 1 - 19th to 26th Nov 2024",
"Test 2 - 24th to 31st Dec 2024",
"Test 3 - 17th to 24th Jan 2025",
"Sample Solution will be provided"]
    }
  />  

  <PricingItem 
    name="Class XII Boards"
    perMonth="Rs. 999"
    perYear="Rs. 999"
    prize="Rs. 2000 Cash Prize"
    monthly={monthly}
    list={["3 Mock Test Series",
"Physics, Chemistry, Biology & Maths Paper",
"Test 1 - 19th to 26th Nov 2024",
"Test 2 - 24th to 31st Dec 2024",
"Test 3 - 17th to 24th Jan 2025",
"Sample Solution will be provided"]
    }
  /> 

  <PricingItem 
    name="NEET Mock Test"
    perMonth="Rs. 999"
    perYear="Rs. 999"
    monthly={monthly}
    prize="Rs. 3000 Cash Prize"
    list={[
"NEET Mock Test Mode Offline",
"Total 20 Offline Mock Test",
"5 Mock Test on Class XI Portion",
"5 Mock Test on Class XII Portion",
"10 Full Syllabus Mock Test",
"Answer and Solution will be provided"]
    }
  /> 

  <PricingItem 
    name="JEE Main Mock Test"
    prize="Rs. 3000 Cash Prize"
    perMonth="Rs. 999"
    perYear="Rs. 999"
    monthly={monthly}
    list={[
"JEE Main Mock Test Mode Online",
"Total 20 Online Mock Test",
"5 Mock Test on Class XI Portion",
"5 Mock Test on Class XII Portion",
"10 Full Syllabus Mock Test",
"Answer and Solution will be provided"]
    }
  /> 
    
</div>
</div>
</div>
</>
)
}
export default ServicePricing