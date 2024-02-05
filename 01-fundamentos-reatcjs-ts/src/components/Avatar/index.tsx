import styles from './styles.module.css'

interface AvatarProps {
    hasBorder?: boolean;
    srcImg: string;
}

export const Avatar = ({ hasBorder = true, srcImg }: AvatarProps) => {
    return (
        <img 
            className={hasBorder ? styles.avatarWithBorder : styles.avatar}
            src={srcImg}
        />
    )
}