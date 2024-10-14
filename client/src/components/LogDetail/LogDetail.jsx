import styles from './LogDetail.module.css'

export function LogDetail({log}){
    return(
        <div className={styles.content}>
            <div className={styles.content__header}>Detail information</div>
            <div className={styles.content__item}>
                <div>ID:</div>
                <div>{log.id}</div>
            </div>
            <div className={styles.content__item}>
                <div>COMPUTER NAME:</div>
                <div>{log.computer_name}</div>
            </div>
            <div className={styles.content__item}>
                <div>EVENT TYPE:</div>
                <div>{log.event_type}</div>
            </div>
            <div className={styles.content__item}>
                <div>APPLICATION:</div>
                <div>{log.application}</div>
            </div>
            <div className={styles.content__item}>
                <div>WINDOW TITLE:</div>
                <div>{log.window_title}</div>
            </div>
            <div className={styles.content__item}>
                <div>CONTENT:</div>
                <div>{log.content}</div>
            </div>
            <div className={styles.content__item}>
                <div>SCREENSHOT:</div>
                <img src={`http://localhost:8000/media/${log.screenshot}`} alt="" />
            </div>
        </div>
    )
}