import React from 'react';

import './about.css';

export const About = ({ bio  }) => {
    return (
        <div className="about-container">
            <p>{bio}</p>
            <br/>
            <p><a href="https://www.linkedin.com/in/kalpesh-dharpure-249a60174/"><i class="fa fa-linkedin-square" aria-hidden="true">  Linkedin</i></a>                                        <span><a href="https://github.com/kalpya123"><i class="fa fa-github" aria-hidden="true">  Github</i></a>                              <a href = "mailto: kalpeshdharpure123@gmail.com"><i class="fa fa-envelope" aria-hidden="true"> Gmail</i></a>  </span> </p>                      
            
        </div>
    )
}