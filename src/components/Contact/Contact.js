import './Contact.css'
import {Button} from "react-bootstrap"

export default function Contact() {
    return(
        <div className='contact bg-med'>
            <div className ='margin contactContent'>
                <div>
                    <h1>Contact us!</h1>
                    <p>We are looking for nonprofits who are in need of technological solutions, as well as partners interested in supporting us and our cause.</p>
                </div>
                <Button id="contactBtn">
                    <a href="mailto:contact@uoftblueprint.org">
                      contact@uoftblueprint.org
                    </a>
                  </Button>



            </div>



        </div>


    )
}