import { Header } from "./components/Header"
import { Post, PostType } from "./components/Post"
import { Sidebar } from "./components/Sidebar"

import styles from './App.module.css'
import './global.css'

const posts: PostType[] = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://avatars.githubusercontent.com/u/15836394?v=4',
      name: 'Alexandre Soares 1',
      role: 'Developer'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      { type: 'link', content: '👉 jane.design/doctorcare' },
    ],
    publishedAt: new Date('2024-02-04 18:42:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://avatars.githubusercontent.com/u/15836394?v=4',
      name: 'Alexandre Soares 2',
      role: 'Developer'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      { type: 'link', content: '👉 jane.design/doctorcare' },
    ],
    publishedAt: new Date('2024-02-04 18:44:00')
  }
]

export function App() {
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        
        <main>
          {
            posts.map(post => {
              return (
                <Post 
                  key={post.id}
                  post={post}
                />
              )
            })
          }
        </main>
      </div>

      
    </>
  )
}

