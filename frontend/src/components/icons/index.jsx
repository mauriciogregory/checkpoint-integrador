import './style.scss'

export default function IconList(props){
    return(
        <li>
            <a className="icons" href="#" target="_blank">{props.icon}</a>
        </li>
    );
}