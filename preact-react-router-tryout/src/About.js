import {Component} from 'preact';
import {Link} from 'react-router-dom';

export default class About extends Component{
  render(){
    return(
      <div>
        this is about

        <Link to='/' >
          to home
        </Link>
        <Link to='/topics' >
          to topics
        </Link>
      </div>
    )
  }
}