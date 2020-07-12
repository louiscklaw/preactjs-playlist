import {Component} from 'preact';
import {Link} from 'react-router-dom';

export default class Topics extends Component{
  render(){
    return(
      <div>
        this is Topics

        <Link to='/' >
          to home
        </Link>
        <Link to='/about' >
          to about
        </Link>
      </div>
    )
  }
}