import React, {Component} from 'react';
import {Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton} from 'react-mdl'

class Projects extends Component{
    constructor(props){
        super(props) ;
        this.state = {activeTab: 0};
    }

    toggleCategories(){
        if(this.state.activeTab === 1){
            return(
               <div  className='projects-grid'> 
                    <Card shadow={10} style={{minWidth: '450', margin: 'auto', background: 'url(https://sld.gs/wp-content/uploads/2018/04/react-background.jpg) center / cover'}}>
                        <CardTitle style={{color: 'white', height:'176px;'}}>React Project 1</CardTitle>
                        <CardText>Text hereText hereText hereText hereText hereText hereText hereText hereText her</CardText>
                        <CardActions border>
                            <Button colored>GitHub</Button>
                            {/* <Button colored>CodePen</Button>
                            <Button colored>LiveDemo</Button> */}
                        </CardActions>              
                        <CardMenu style={{color:'white'}}>
                            <IconButton name='share'/>    
                        </CardMenu>     
                    </Card>
                </div>
                

            )
        }else if(this.state.activeTab === 0){
            return(
                <div className='projects-grid'>
                    <Card shadow={10} style={{minWidth: '450', margin: 'auto', background: 'url(https://image.freepik.com/free-vector/poker-cards-background_1017-3850.jpg) center / cover'}}>
                        <CardTitle style={{color: 'Black', height:'176px;',}}>High or Low</CardTitle>
                        <CardText><br></br><br></br><br></br></CardText>
                        <CardActions border>
                            <Button style={{color: 'black', marginTop:'auto;'}} href="https://github.com/Yozgyan/High-Low" target='_blank' colored>GitHub</Button>
                            {/* <Button colored>CodePen</Button>
                            <Button colored>LiveDemo</Button> */}
                        </CardActions>              
                        <CardMenu style={{color:'white'}}>
                            <IconButton name='share'/>    
                        </CardMenu>     
                    </Card>

                    <Card shadow={10} style={{minWidth: '450', margin: 'auto', background: 'url(https://images-na.ssl-images-amazon.com/images/I/41AkNltlsrL._SX466_.jpg) center / cover'}}>
                        <CardTitle style={{color: 'Black', height:'176px;',}}>Dice Game</CardTitle>
                        <CardText><br></br><br></br><br></br></CardText>
                        <CardActions border>
                            <Button style={{color: 'black', marginTop:'auto;'}} href="https://github.com/Yozgyan/Dice-game" target='_blank' colored>GitHub</Button>
                            {/* <Button colored>CodePen</Button>
                            <Button colored>LiveDemo</Button> */}
                        </CardActions>              
                        <CardMenu style={{color:'white'}}>
                            <IconButton name='share'/>    
                        </CardMenu>     
                    </Card>

                    <Card shadow={10} style={{minWidth: '450', margin: 'auto', background: 'url(https://3.bp.blogspot.com/-FTnReG6zcNI/XGVtmsMqDZI/AAAAAAAAFxU/GNEkWr3lCboQ2VXydpYXTK6HtxhpRt60ACHMYCw/s1600/dice-wallpaper-and-background-image-1280x800-id295966.jpg) center / cover'}}>
                        <CardTitle style={{color: 'Black', height:'176px;',}}>2 Players Dice Game</CardTitle>
                        <CardText><br></br><br></br><br></br></CardText>
                        <CardActions border>
                            <Button style={{color: 'black', marginTop:'auto;'}} href="https://github.com/Yozgyan/2-players-dice-game" target='_blank' colored>GitHub</Button>
                            {/* <Button colored>CodePen</Button>
                            <Button colored>LiveDemo</Button> */}
                        </CardActions>              
                        <CardMenu style={{color:'white'}}>
                            <IconButton name='share'/>    
                        </CardMenu>     
                    </Card>
                    <Card shadow={10} style={{minWidth: '450', margin: 'auto', background: 'url(https://wallpapercave.com/wp/fIiL0f3.png) center / cover'}}>
                        <CardTitle style={{color: 'Black', height:'176px;',}}>Space Invaders</CardTitle>
                        <CardText><br></br><br></br><br></br></CardText>
                        <CardActions border>
                            <Button style={{color: 'White', marginTop:'auto;'}} href="https://github.com/JadeKneen/cnRoadRagers" target='_blank' colored>GitHub</Button>
                            {/* <Button colored>CodePen</Button>
                            <Button colored>LiveDemo</Button> */}
                        </CardActions>              
                        <CardMenu style={{color:'white'}}>
                            <IconButton name='share'/>    
                        </CardMenu>     
                    </Card>
                    
                </div>
                
            )
        }
        // else if(this.state.activeTab === 2 ){
        //     return(
        //         <div>
        //             <h1>This is HTML</h1>
        //         </div>

        //     )
        // }//else if(this.state.activeTab === 3 ){
        //     return(
        //         <div>
        //             <h1>This is CSS</h1>
        //         </div>

        //     )
        // }
    }
    render(){
        return(
            <div className='category-tabs'>
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({activeTab: tabId})} ripple>
                    <Tab>JavaScript/HTML/CSS</Tab>
                    <Tab>React</Tab>
                    {/* <Tab>HTML</Tab> */}
                    {/* <Tab>CSS</Tab> */}
                </Tabs>

                
                    <Grid >
                        <Cell col={12}>
                            <div className='content'>{this.toggleCategories()}</div>
                        </Cell>
                    </Grid>
                    
                
            </div>
        )
    }
}

export default Projects;