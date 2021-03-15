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
                    <div><a href="https://airtable.com/shrdHegbtWin83R69" target = '_blank' className="headerBtn">Apply</a> 
                    <a href="http://bit.ly/uoftbp-rec-info" target = '_blank' className="headerBtn">More Info</a></div>:
                    null}
                </div>
                
            </div>
            
          
            </div>

        

    )

}