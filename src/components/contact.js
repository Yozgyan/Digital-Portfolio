import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';
import CV from './cv.jpg';

class Contact extends Component{
    render(){
        return(
            <div className='contact-body'>
                <Grid className='contact-grid'>
                    <Cell className='cell1' col='{6}'>
                        <h2>Yozgyan Shakir</h2>
                        <img src={CV} alt='avatar' style={{height:'250px'}}/>
                        <p style={{width: '75%', margin: 'auto', paddingTop: '1em', }}>text text text texte textetentket nten ktjnk tnek n</p>
                    </Cell>
                    <Cell className='cell2' col='{6}'>
                        <div className='details'>
                            <h2>Details</h2>
                            <h3>Telephone:000000000</h3>
                            <h3>Email:yozgyanshakir93@gmail.com</h3>
                            <h3>LinkedIn:Yozgyan Shakir</h3>
                            <h3>Address:Eccles New Road, Redmires Court Flat:8, <br></br>M5 4UR</h3>
                        </div>
                    </Cell>

                </Grid>
            </div>
        )
    }
}

export default Contact;