import {useRouter} from "next/router";
import styles from '../../styles/user.module.scss'
import MainContainer from "../../components/MainContainer";

const User = ({user}) => {

    const {query} = useRouter()

    return (
        <MainContainer title={user.name} keyword={user.name}>
            <div className={styles.user}>
                <span>ID:</span> {query.id}
                <div>
                    <span>Name:</span> {user.name}
                </div>
            </div>
        </MainContainer>
    )
}

export default User

export async function getServerSideProps({params}) {

    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
    const user = await res.json()

    return {
        props: {user}
    }
}
