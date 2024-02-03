import { Header } from "./components/Header"
import {Post} from "./components/Post"
import { Sidebar } from "./components/Sidebar"

import styles from './App.module.css'
import './global.css'

export function App() {
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        
        <main>
          <Post 
            author="Alexandre Soares"
            content="Lorem, ipsum dolor sit amet consectetur 
            adipisicing elit. Consequatur tempora natus a explicabo 
            saepe ipsa! Aperiam vero voluptatibus similique, atque, 
            tempora doloribus saepe dolorum omnis officia natus 
            adipisci, iure explicabo!" 
          />
          <Post 
            author="Alexandre Soares"
            content="Lorem, ipsum dolor sit amet consectetur 
            adipisicing elit. Consequatur tempora natus a explicabo 
            saepe ipsa! Aperiam vero voluptatibus similique, atque, 
            tempora doloribus saepe dolorum omnis officia natus 
            adipisci, iure explicabo!" 
          />
        </main>
      </div>

      
    </>
  )
}

