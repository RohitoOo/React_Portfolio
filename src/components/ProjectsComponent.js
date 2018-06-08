import React, { Component } from 'react';
import styled from 'styled-components';
import rohito from '../assets/rohito.jpg'

const RepoList = styled.ul`
list-style-type: none;
`

const Image = styled.img`
width: 50%;
    justify-self: end;
    border-radius: 2000px;

`

const StyledLi = styled.li`
color:black;
background : #8888;
border-radius : 50px;
margin: 30px;
padding : 10px;

`



class ProjectsComponent extends Component {


  constructor() {
     super();
     this.state = {
       data : [],

     };

   }



  componentDidMount(){
        console.log("Mounted");

      fetch('https://api.github.com/users/RohitoOo/repos' )
      .then(response => response.json())
        .then(json => {
          console.log(json);
          this.setState({
            data: json,
          });
        });
    }





  render() {
    return (
      <div>
            <Image src={rohito}/>
            <RepoList className="repo_list">{this.state.data.map((repo)=>{
              return  <StyledLi> Project :  {repo.name}  <br/> {repo.full_name} <br/> Language : {repo.language} <br/> LinkUp : <a  target="_blank" href={repo.html_url}>{repo.html_url}</a> <br/>Description : { repo.description} <br/> </StyledLi>
              })}</RepoList>
      </div>
    );

  }
}


export default ProjectsComponent;
