/* eslint-disable react/prop-types */
import styles from './styles.module.css'

export const Avatar = ({ hasBorder = true, srcImg }) => {
    return (
        <img 
            className={hasBorder ? styles.avatarWithBorder : styles.avatar}
            src={srcImg}
        />
    )
}