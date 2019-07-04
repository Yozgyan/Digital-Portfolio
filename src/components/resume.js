import React, {Component} from 'react';
import {Tabs, Tab, Grid, Cell, } from 'react-mdl'

class Experience extends Component{
    constructor(props){
        super(props);
        this.state = {activeTab: 0};
    }

    toggleJobs(){
        if(this.state.activeTab === 0){
            return(
                <div className='Exper1'>
                    <h1>Under construction</h1>
                    <hr/>
                </div>
            )
        }else if(this.state.activeTab === 1){
            return(
                <div className='Exper2' >
                        <h1 className='title1'>Claims Administrator</h1>
                        <hr/>
                        <h2 className='company1'>The Claims Guys</h2>
                        <h4 className='date1'><i class="fas fa-calendar-alt"></i>02/2018-04/2019 <i class="fas fa-map-marker-alt"></i> Manchester, Altrincham, UK</h4>
                        <li className='p-tag1'>Meet the performance goals established for the position in the areas of: efficiency, accuracy, quality and attendance</li>
                        <li className='p-tag1'>High concentration</li>
                        <li className='p-tag1'>Data entry</li>
                        <li className='p-tag1'>Fast typing</li>
                        <li className='p-tag1'>Attention to details</li>
                </div>
            )
        }else if(this.state.activeTab === 2){
            return(
                <div className='Exper3'>
                        <h1 className='title1'>Wholesale Team Leader</h1>
                        <hr/>
                        <h2 className='company1'>XPO Logistics/ Missguided</h2>
                        <h4 className='date1'><i class="fas fa-calendar-alt"></i>10/2017-12/2017 <i class="fas fa-map-marker-alt"></i> Manchester, UK</h4>
                        <li className='p-tag1'>Managing a big team of up to 50 people on a daily basis and providing help in order to achieve team goals</li>
                        <li className='p-tag1'>Organasing and prioritising the tasks given by the managers</li>
                        <li className='p-tag1'>Recognising the skils of key team members and utilize their strength to the benefit of the team</li>
                        <li className='p-tag1'>Defining and stating the expectations and objects with the team members</li>
                        <li className='p-tag1'>Ensuring all members understand the missions ahead</li>
                        <li className='p-tag1'>Leadership Skills</li>
                </div>            
            )
        }else if(this.state.activeTab === 3){
            return(
                <div  className='Exper4'>
                        <h1 className='title1'>Wholesale and DLX System Admin</h1>
                        <hr/>
                        <h2 className='company1'>XPO Logistics/ Missguided</h2>
                        <h4 className='date1'><i class="fas fa-calendar-alt"></i>11/2016-09/2017 <i class="fas fa-map-marker-alt"></i> Manchester, UK</h4>
                        <li className='p-tag1'>Communicating by emails with the head office and managers</li>
                        <li className='p-tag1'>Knowledge of DLX System and managing orders</li>
                        <li className='p-tag1'>Working with Microsoft Office package, especially with Word and Excel</li>
                        <li className='p-tag1'>I became confident in managing a small team and supervising them</li>
                        <li className='p-tag1'>Passing daily orders from the Head office to the team by giving a clear explanation of our task</li>                            <li className='p-tag1'>Leadership Skills</li>
                </div>
            )
        }
    }
    render(){
        return(
            <div>
                <Tabs className='tabs-tabs' activeTab={this.state.activeTab} onChange={(tabId) => this.setState({activeTab: tabId})} ripple>
                    <Tab className='tabs2'>Apprentice Software Engineer</Tab>
                    <Tab className='tabs2'>Claims Administrator</Tab>
                    <Tab className='tabs2'>Wholesale Team Leader</Tab>
                    <Tab className='tabs2'>Wholesale & DLX System Admin</Tab>
                </Tabs>
                <Grid>
                    <Cell col={12}>
                        <div className='concept'>{this.toggleJobs()}</div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Experience;