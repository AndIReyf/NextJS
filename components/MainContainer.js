import ALink from "./ALink";
import Head from "next/head";

const MainContainer = ({children, keyword, title}) => {
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta keywords={`Next, Next.js, pet-project ${keyword}`}/>
            </Head>
            <div className='navbar'>
                <ALink href='/' text='Main page'/>
                <ALink href='/users' text='Users'/>
            </div>
            <div>
                {children}
            </div>
            <style jsx>
                {`
                  .navbar {
                    background-color: #bada55;
                    padding: 15px;
                  }
                `}
            </style>
        </>
    )
}

export default MainContainer