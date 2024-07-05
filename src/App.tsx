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
        { type:'paragraph',  content:'Eae pessoal'},
        { type:'paragraph',  content:'estou adorando trabalhar na SAP'},
        { type:'paragraph',  content:'em breve serei efetivado!'},
        { type:'link',  content:'#projetoreact'}
    ],
    publishedAt: new Date('2024-07-01 9:30:22')
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
        { type:'paragraph',  content:'que plataforma legal'},
        { type:'paragraph',  content:'vou usar bastante'},
        { type:'link',  content:'#projetoreact'}
    ],
    publishedAt: new Date('2024-06-27 9:06:32')
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
