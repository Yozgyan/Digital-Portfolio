import React from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content, IconButton, Menu, MenuItem} from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom';

class App extends React.Component {
  render(){
  return (
    <div className="demo-big-content">
    <Layout>
        <Header className='header-color' title="..." scroll>
            <Navigation>
                <Link className="title" to="/Landing">Yozgyan Shakir</Link>
                <Link to="/resume">Experience</Link>
                <Link to="/aboutme">About Me</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact</Link>
            </Navigation>
        </Header>
        <Drawer  title="">
            <Navigation >
            <div style={{position: 'relative'}}>
    <IconButton name="more_vert" id="demo-menu-lower-left" />
    <Menu target="demo-menu-lower-left">
        <MenuItem>Some Action</MenuItem>
        <MenuItem>Another Action</MenuItem>
        <MenuItem disabled>Disabled Action</MenuItem>
        <MenuItem>Yet Another Action</MenuItem>
    </Menu>
</div>
            </Navigation>
        </Drawer>
        <Content>

            <div className="page-content" />
            <Main/>
        </Content>
    </Layout>
  </div>
  );
  
  }
}

export default App;
