import React from 'react'
import progressiveImage from '../static/progressiveBackground.jpg';
import { useContextState } from 'dynamic-context-provider'

const ProgressiveTemplate = () => {
    const {
        name,
        year, make, model, vin, effectiveDate, policyNumber,
    } = useContextState()
    const expirationDate = effectiveDate.slice(0,6)+(Number(effectiveDate.slice(-2)) + 1)
    const valuedCustomerDate = '20'+(Number(effectiveDate.slice(-2)) - 1)
    console.log('expirationDate',expirationDate, Number(effectiveDate.slice(-2)))
    return (
        <div id="progressiveInsurance">
          <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
          <style type="text/css" dangerouslySetInnerHTML={{__html: "\n<!--\nspan.cls_002{font-family:Arial,serif;font-size:1.1px;color:rgb(0,0,0);font-weight:normal;font-style:normal;text-decoration: none}\ndiv.cls_002{font-family:Arial,serif;font-size:1.1px;color:rgb(0,0,0);font-weight:normal;font-style:normal;text-decoration: none}\nspan.cls_003{font-family:Arial,serif;font-size:9.9px;color:rgb(0,0,0);font-weight:normal;font-style:normal;text-decoration: none}\ndiv.cls_003{font-family:Arial,serif;font-size:9.9px;color:rgb(0,0,0);font-weight:normal;font-style:normal;text-decoration: none}\nspan.cls_004{font-family:Arial,serif;font-size:9.9px;color:rgb(0,0,0);font-weight:bold;font-style:normal;text-decoration: none}\ndiv.cls_004{font-family:Arial,serif;font-size:9.9px;color:rgb(0,0,0);font-weight:bold;font-style:normal;text-decoration: none}\nspan.cls_009{font-family:Arial,serif;font-size:8.0px;color:rgb(0,0,0);font-weight:bold;font-style:normal;text-decoration: none}\ndiv.cls_009{font-family:Arial,serif;font-size:8.0px;color:rgb(0,0,0);font-weight:bold;font-style:normal;text-decoration: none}\nspan.cls_005{font-family:Arial,serif;font-size:10.6px;color:rgb(0,0,0);font-weight:bold;font-style:normal;text-decoration: none}\ndiv.cls_005{font-family:Arial,serif;font-size:10.6px;color:rgb(0,0,0);font-weight:bold;font-style:normal;text-decoration: none}\nspan.cls_007{font-family:Arial,serif;font-size:7.0px;color:rgb(0,0,0);font-weight:bold;font-style:normal;text-decoration: none}\ndiv.cls_007{font-family:Arial,serif;font-size:7.0px;color:rgb(0,0,0);font-weight:bold;font-style:normal;text-decoration: none}\nspan.cls_008{font-family:Arial,serif;font-size:7.0px;color:rgb(0,0,0);font-weight:normal;font-style:normal;text-decoration: none}\ndiv.cls_008{font-family:Arial,serif;font-size:7.0px;color:rgb(0,0,0);font-weight:normal;font-style:normal;text-decoration: none}\nspan.cls_006{font-family:Arial,serif;font-size:9.6px;color:rgb(0,0,0);font-weight:normal;font-style:normal;text-decoration: none}\ndiv.cls_006{font-family:Arial,serif;font-size:9.6px;color:rgb(0,0,0);font-weight:normal;font-style:normal;text-decoration: none}\n-->\n" }} />
          <div style={{ position: 'absolute', left: '50%', marginLeft: '-306px', top: '75px', width: '612px', height: '792px', overflow: 'hidden' }}>
            <div style={{position: 'absolute', left: '0px', top: '0px'}}>
              <img alt="progressive" style={{transform: 'scale(1.15)'}} src={progressiveImage} width={612} height={792} /></div>
            <div style={{position: 'absolute', left: '63.00px', top: '108.30px'}} className="cls_003"><span className="cls_003">Keep these cards handy--in your glove compartment or wallet. And contact us anytime you have a question or need to report a claim.</span></div>
            <div style={{position: 'absolute', left: '63.00px', top: '132.30px'}} className="cls_003"><span className="cls_003">If you have a claim, we'll get you back on the road as soon as possible. And while you'll always have a choice where to repair your</span></div>
            <div style={{position: 'absolute', left: '63.00px', top: '160.3px'}} className="cls_003"><span className="cls_003">vehicle, when you use a shop in our preapproved network, we'll guarantee your repair for as long as you own or lease your vehicle.</span></div>
            <div style={{position: 'absolute', left: '63.00px', top: '194.4px'}} className="cls_004"><span className="cls_004">Thank you for choosing Progressive.</span></div>
            <div style={{position: 'absolute', left: '342.60px', top: '249.28px'}} className="cls_009"><span className="cls_009">Florida Automobile Insurance Identification Card</span></div>
            <div style={{position: 'absolute', left: '143.20px', top: '250.30px'}} className="cls_005"><span className="cls_005">{name}</span></div>
            <div style={{position: 'absolute', left: '312.00px', top: '262.20px'}} className="cls_007"><span className="cls_007">Insurer:</span></div>
            <div style={{position: 'absolute', left: '339.80px', top: '262.20px'}} className="cls_008"><span className="cls_008">Progressive American Insurance Co - 09412</span></div>
            <div style={{position: 'absolute', left: '312.00px', top: '271.20px'}} className="cls_007"><span className="cls_007">Policy Number:</span></div>
            <div style={{position: 'absolute', left: '366.60px', top: '271.20px'}} className="cls_008"><span className="cls_008">{policyNumber}</span></div>
            <div style={{position: 'absolute', left: '444.00px', top: '271.20px'}} className="cls_007"><span className="cls_007">Effective Date:</span><span className="cls_008">{effectiveDate}</span></div>
            <div style={{position: 'absolute', left: '146.20px', top: '273.01px'}} className="cls_006"><span className="cls_006">Platinum Membership</span></div>
            <div style={{position: 'absolute', left: '444.00px', top: '278.20px'}} className="cls_007"><span className="cls_007">Expiration Date:</span></div>
            <div style={{position: 'absolute', left: '500.00px', top: '278.20px'}} className="cls_008"><span className="cls_008">{expirationDate}</span></div>
            <div style={{position: 'absolute', left: '134.20px', top: '283.61px'}} className="cls_006"><span className="cls_006">Valued Customer Since {valuedCustomerDate}</span></div>
            <div style={{position: 'absolute', left: '312.00px', top: '285.20px'}} className="cls_007"><span className="cls_007">[X] Personal Injury Protection</span></div>
            <div style={{position: 'absolute', left: '443.8px', top: '285.20px'}} className="cls_007"><span className="cls_007">[X] Bodily Injury Liability</span></div>
            <div style={{position: 'absolute', left: '443.8px', top: '292.20px'}} className="cls_007"><span className="cls_007">See policy and outline of coverage;</span></div>
            <div style={{position: 'absolute', left: '312.00px', top: '292.40px'}} className="cls_007"><span className="cls_007">Benefits/Property Damage Liability</span></div>
            <div style={{position: 'absolute', left: '443.8px', top: '299.40px'}} className="cls_007"><span className="cls_007">damage to a rental vehicle is covered</span></div>
            <div style={{position: 'absolute', left: '312.00px', top: '306.40px'}} className="cls_007"><span className="cls_007">Named Insured(s):</span></div>
            <div style={{position: 'absolute', left: '443.8px', top: '306.40px'}} className="cls_007"><span className="cls_007">to the extent shown therein.</span></div>
            <div style={{position: 'absolute', left: '312.00px', top: '313.40px'}} className="cls_008"><span className="cls_008">{name}</span></div>
            <div style={{position: 'absolute', left: '312.00px', top: '327.80px'}} className="cls_007"><span className="cls_007">Year  Make</span></div>
            <div style={{position: 'absolute', left: '389.40px', top: '327.80px'}} className="cls_007"><span className="cls_007">Model</span></div>
            <div style={{position: 'absolute', left: '467.00px', top: '327.80px'}} className="cls_007"><span className="cls_007">VIN</span></div>
            <div style={{position: 'absolute', left: '312.00px', top: '335.20px'}} className="cls_008"><span className="cls_008">{year}</span></div>
            <div style={{position: 'absolute', left: '330.40px', top: '335.20px'}} className="cls_008"><span className="cls_008">{make}</span></div>
            <div style={{position: 'absolute', left: '389.40px', top: '335.20px'}} className="cls_008"><span className="cls_008">{model}</span></div>
            <div style={{position: 'absolute', left: '467.00px', top: '335.20px'}} className="cls_008"><span className="cls_008">{vin}</span></div>
            <div style={{position: 'absolute', left: '312.00px', top: '362.60px'}} className="cls_007"><span className="cls_007">NAIC Number: </span><span className="cls_008">24252</span></div>
            <div style={{position: 'absolute', left: '312.00px', top: '369.80px'}} className="cls_007"><span className="cls_007">NOT VALID FOR MORE THAN ONE YEAR FROM EFFECTIVE DATE.</span></div>
            <div style={{position: 'absolute', left: '71.80px', top: '382.80px'}} className="cls_008"><span className="cls_008">Form A022 FL (03/11)</span></div>
            <div style={{position: 'absolute', left: '69.00px', top: '400.40px'}} className="cls_007"><span className="cls_007">IF YOU'RE IN AN ACCIDENT</span></div>
            <div style={{position: 'absolute', left: '312.00px', top: '400.40px'}} className="cls_007"><span className="cls_007">Your Agent:</span></div>
            <div style={{position: 'absolute', left: '69.00px', top: '409.20px'}} className="cls_008"><span className="cls_008">1. Remain at the scene. Don't admit fault.</span></div>
            <div style={{position: 'absolute', left: '312.00px', top: '408.80px'}} className="cls_008"><span className="cls_008">MORE 4 LESS INSURANCE GROUP 1-954-933-1339</span></div>
            <div style={{position: 'absolute', left: '69.00px', top: '418.20px'}} className="cls_008"><span className="cls_008">2. Find a safe location, call the police, and exchange driver information.</span></div>
            <div style={{position: 'absolute', left: '312.00px', top: '421.20px'}} className="cls_007"><span className="cls_007">See claims reporting information on reverse side.</span></div>
            <div style={{position: 'absolute', left: '69.00px', top: '427.40px'}} className="cls_008"><span className="cls_008">3. Call Progressive right away.</span></div>
            <div style={{position: 'absolute', left: '312.00px', top: '428.20px'}} className="cls_007"><span className="cls_007">Misrepresentation of insurance is a first degree misdemeanor.</span></div>
            <div style={{position: 'absolute', left: '69.00px', top: '445.40px'}} className="cls_007"><span className="cls_007">TO REPORT A CLAIM</span></div>
            <div style={{position: 'absolute', left: '69.00px', top: '453.00px'}} className="cls_008"><span className="cls_008">Call 1-800-274-4499 or go to claims.progressive.com.</span></div>
            <div style={{position: 'absolute', left: '69.00px', top: '470.00px'}} className="cls_007"><span className="cls_007">NEED ROADSIDE ASSISTANCE?</span></div>
            <div style={{position: 'absolute', left: '69.00px', top: '478.80px'}} className="cls_008"><span className="cls_008">Call 1-800-776-2778.</span></div>
            <div style={{position: 'absolute', left: '57px', top: '556.6px'}} className="cls_007"><span className="cls_007">KEEP THIS CARD IN YOUR VEHICLE WHILE IN OPERATION.</span></div>
          </div>
        </div>
      );

}

export default ProgressiveTemplate