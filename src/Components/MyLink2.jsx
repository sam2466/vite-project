import {Link} from 'react-router-dom'

function Mylink2(props) {
    return (
        <li>
            <Link to= {props.to} 
                className={"nav-link text-" + props.color + " text-center"} >
            <i className={"bi bi-" + props.icon + " fs-5 d-grid t-6 mx-auto" } />
            {props.text}
            </Link>
        </li>
  );
}

export default Mylink2