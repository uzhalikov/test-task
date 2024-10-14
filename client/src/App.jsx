import styles from './App.module.css'
import { useState } from "react"
import { useLoaderData } from "react-router-dom"
import { Log } from "./components/Log/Log"

export default function App(){
  const [modal, setModal] = useState(false)
  const logs = useLoaderData()

  return (
      <div className={styles.container}>
          {modal && modal}
          <table className={styles.container__logs}>
              <caption>Table of user logs</caption>
              <thead>
                  <tr>
                      <th>ID</th>
                      <th>COMPUTER NAME</th>
                      <th>EVENT TYPE</th>
                      <th>TIMESTAMP</th>
                  </tr>
              </thead>
              <tbody>{logs.map(log => <Log modal={modal} setModal={setModal} key={log.id} log={log}/>)}</tbody>
          </table>
      </div>
  )
}