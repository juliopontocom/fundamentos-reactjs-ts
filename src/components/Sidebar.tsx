import {PencilLine} from 'phosphor-react'

import styles from './Sidebar.module.css'
import { Avatar } from './Avatar';

export function Sidebar(){
    return(
        <aside className={styles.sidebar}>
            <img 
            className={styles.cover} 
            src='https://images.unsplash.com/photo-1510915228340-29c85a43dcfe?q=50&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            />
            <div className={styles.profile}>
                <Avatar hasBorder src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg"/>
                <strong>Julio Cesar</strong>
                <span>Web Developer</span>
            </div>

            <footer>
                <a href="#">
                    <PencilLine size={20}/>
                    Editar seu perfil
                    </a>
            </footer>
        </aside>
    );
}