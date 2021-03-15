import headerBg from "../../imgs/headerBg.png"
import headerBg2 from "../../imgs/headerBg2.png"
import headerBg3 from "../../imgs/headerBg3.png"

import './HeaderRow.css'
import {Link} from "react-router-dom"


export default function HeaderRow({title,body,img=1, width, btn = false,} ) {
    let headerImg = [0,headerBg,headerBg2,headerBg3][img]
    // if (img ==1){
    //     headerImg = headerBg
    // } else {
    //     headerImg = headerBg2
    // }


    return(
          <div id='headerRow'>
            <img src={headerImg} alt="Snow" width="100%"/>

        
            <div data-aos="fade-right" id='headerText' >
                <div className="margin">
                <h1 id='headerTitle'>{title}</h1>
                {width=="med"?
                <p className='headerBody wider'>{body}</p>:<p className='headerBody'>{body}</p> }
                {btn != false? 
                    <div><Link to="https://airtable.com/shrdHegbtWin83R69" className="headerBtn">Apply</Link> 
                    <Link to="http://bit.ly/uoftbp-rec-info" className="headerBtn">More Info</Link></div>:
                    null}
                </div>
                
            </div>
            
          
            </div>

        

    )

}