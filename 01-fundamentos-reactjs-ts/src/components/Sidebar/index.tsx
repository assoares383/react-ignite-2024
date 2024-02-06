import { PencilLine } from 'phosphor-react';

import { Avatar } from '../Avatar/index';

import styles from './styles.module.css'

export const Sidebar = () => {
    return (
        <aside className={styles.sidebar}>
            <img 
                className={styles.cover} 
                src="https://images.unsplash.com/photo-1484417894907-623942c8ee29?q=80&w=3132&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />

            <div className={styles.profile}>
                <Avatar 
                    srcImg="https://avatars.githubusercontent.com/u/15836394?v=4" 
                />

                <strong>Alexandre Soares</strong>
                <span>Web Developer</span>
            </div>

            <footer>
                <a href="#">
                    <PencilLine size={20} />
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    )
}