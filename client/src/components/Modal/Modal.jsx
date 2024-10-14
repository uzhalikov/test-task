import styles from './Modal.module.css'
import { getLog } from '../../loaders'
import { useRef, useState } from 'react'
import { LogDetail } from '../LogDetail/LogDetail'
import { useEffect } from 'react'

export function Modal(props){
    const [data, setData] = useState()
    const ref = useRef()

    useEffect(() => {
        getLog(props.logId).then(result => {
            setData(<LogDetail log={result[0]}/>)
            ref.current.showModal()
        })
    }, [props.logId])
    return(
        <dialog ref={ref} className={styles.dialog}>
            <span onClick={() => props.setModal(false)} className={styles.modal__close}>X</span>
            {data}
        </dialog>
    )
}