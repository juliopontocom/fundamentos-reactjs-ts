import './global.css'
import styles from './App.module.css'
import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'
import { Post, PostType} from './components/Post'



const posts: PostType[] = [
  {
    id: 1,
    author: {
        avatarUrl: 'https://github.com/l-fraga.png',
        name: 'Lucas Fraga',
        role: 'Suport at SAP'
    },
    content: [
        { type:'paragraph',  content:'Eae gurizada!'},
        { type:'paragraph',  content:'nao queria falar nada'},
        { type:'paragraph',  content:'mas to TOCANDO a SAP'},
        { type:'link',  content:'#projetoreact'}
    ],
    publishedAt: new Date('2024-03-27 9:30:22')
  },
  {
    id: 1,
    author: {
        avatarUrl: 'https://github.com/salocod.png',
        name: 'Nicolas Fonseca',
        role: 'Student at PUCRS'
    },
    content: [
        { type:'paragraph',  content:'Eaee'},
        { type:'paragraph',  content:'arranca o teto da dell que eu vou chegar voando!'},
        { type:'link',  content:'#projetoreact'}
    ],
    publishedAt: new Date('2024-03-27 9:06:32')
},
];

export function App() {
  return (
    <div> 
      <Header/>
      <div className={styles.wrapper}>
        <Sidebar/>
        <main>
          {posts.map(post => {
            return (
              <Post
                key={post.id}
                post={post}
              />
            )
          })}
          
        </main>
      </div>
    </div>
  )
}
