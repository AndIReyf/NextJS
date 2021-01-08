import Link from 'next/link'
import styles from '../styles/ALink.module.css'

const ALink = ({text, href}) => {
    return (
        <Link href={href}>
            <a className={styles.link}>{text}</a>
        </Link>
    )
}

export default ALink