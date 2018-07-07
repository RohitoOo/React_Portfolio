import React, {Component} from 'react';
import styled from 'styled-components';
import rohito from '../assets/rohito.jpg'

const RepoList = styled.ul `
list-style-type: none;
`

const Image = styled.img `
width: 50%;
    justify-self: end;
    border-radius: 2000px;

`

const StyledLi = styled.li `
color:black;
background : #8888;
border-radius : 50px;
margin: 30px;
padding : 10px;

`

const Projects = styled.div `

display: grid;
grid-template-columns: 100%;

`

class ProjectsComponent extends Component {

  constructor() {
    super();
    this.state = {
      data: [],
      filter: ''
    };

  }

  handleFilterChange = (e) => {
    this.setState({filter: e.target.value});
  }

  getFilterProfiles = () => {

    const data = this.state.data || [];

    return data.filter((repo) => {
      return repo.name.toLowerCase().includes(this.state.filter.toLowerCase()) || (repo.language || '').toLowerCase().includes(this.state.filter.toLowerCase())
    }) || data

    // let data = this.state.data.map((repo) => {
    //     return repo.name.includes(this.state.filter)
    // });
    //
    // if (filteredData.length === 0) filteredData = [...data];
    // return filteredData;

  };

  componentDidMount() {
    console.log("Mounted");

    fetch('https://api.github.com/users/RohitoOo/repos').then(response => response.json()).then(json => {
      console.log(json);
      this.setState({data: json});
    });
  }

  render() {
    return (<div>

      <Image src={rohito}/>
      <Projects>

        <input onChange={(e) => this.handleFilterChange(e)} placeholder="Find a repository..."/>
        <RepoList className="repo_list">{
            this.getFilterProfiles().map((repo) => {
              return <StyledLi>
                Project : {repo.name}
                <br/> {repo.full_name}
                <br/>
                Language : {repo.language}
                <br/>
                LinkUp :
                <a target="_blank" href={repo.html_url}>{repo.html_url}</a>
                <br/>Description : {repo.description}
                <br/>
              </StyledLi>
            })
          }</RepoList>
      </Projects>
    </div>);

  }
}

export default ProjectsComponent;
