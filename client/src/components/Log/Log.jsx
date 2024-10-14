import styles from './Log.module.css'
import { Modal } from '../Modal/Modal'

export function Log(props){
    function onClick(e){
        const logId = e.target.id ? e.target.id : e.target.parentNode.id
        props.setModal(<Modal setModal={props.setModal} logId={logId} open={!props.modal}/>)
    }
    return(
        <tr id={props.log.id} className={styles.tr} onClick={(e) => onClick(e)}>
            <td>{props.log.id}</td>
            <td>{props.log.computer_name}</td>
            <td>{props.log.event_type}</td>
            <td>{props.log.created}</td>
        </tr>
    )
}