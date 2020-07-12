import {Component} from 'preact';
import {Link} from 'react-router-dom';

export default class Home extends Component{
  render(){
    return(
      <div>
        this is home

        <Link to='/about' >
          to about
        </Link>
        <Link to='/topics' >
          to topics
        </Link>
      </div>
    )
  }
}