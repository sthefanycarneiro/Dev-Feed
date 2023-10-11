import { Post } from './components/Post';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';

import styles from './App.module.css'

import './global.css';

function App() {
  return (
      <div>
        <Header />
      
      <div className={styles.wrapper}>
        <Sidebar />
        <main> 
          <Post
            author= "Sthéfany Carneiro"
            content= "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam, deserunt ducimus! Repellendus blanditiis exercitationem harum, molestiae fugiat nesciunt dolorem, voluptatum accusantium earum consequatur necessitatibus quaerat suscipit autem! Necessitatibus, quae esse."
          />
          <Post
            author= "Daniel Gallo"
            content= "Um post muito legal"
          />
        </main>
      </div>
    </div>
  )
}

export default App
