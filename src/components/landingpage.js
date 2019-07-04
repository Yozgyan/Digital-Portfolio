import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';
import CV from './cv.jpg'

class Landing extends Component{
    render(){
        return(
            <div style={{width:'100%', margin: 'auto'}}>    
                <Grid className='landing-grid'>
                    <Cell col={12}>
                        <img className='avatar-img' src={CV}/>
                        <div className='banner-text'>
                            <h1>Apprentice Software Engineer</h1>
                            
                            <hr/>

                            <p>HTML/CSS | React | JavaScript | NodeJS | Swift | SQL/DataBase | </p>    
                        
                            <div className='social-links'>
                                <a href='https://github.com/Yozgyan' rel='noopener noreferrer' target='_blank'>
                                    <i class="fab fa-github" aria-hidden='true' />
                                </a>
                                <a href='https://www.facebook.com/profile.php?id=100005972648674' rel='noopener noreferrer' target='_blank'>
                                    <i class="fab fa-facebook" aria-hidden= 'true'></i>
                                </a>
                                <a href='https://www.linkedin.com/in/yozgyanshakir93/' rel='noopener noreferrer' target='_blank'>
                                <i class="fab fa-linkedin" aria-hidden='true'></i>
                                </a>
                                <a href='https://github.com/Yozgyan' rel='noopener noreferrer' target='_blank'>
                                <i class="fab fa-instagram" aria-hidden='true'></i>
                                </a>

                            </div>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Landing;