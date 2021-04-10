import Head from 'next/head/';
import Toolbar from '../components/Toolbar';
import styles from '../styles/EOM.module.css';

const EOM = () => {
    const image = "https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8bGFuZHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80";
    return (
        <>
            <Head>
                <title>Employee Of The Month</title>
                <meta
                    name="description"
                    content="This month's employee of the month is Babagana Abba"
                />

                <meta property="og:image" content={image} />
                <meta property="og:title" content="Employee Of The Month" />
                <meta property="og:description" content="This month's employee of the month is Babagana Abba" />

                <meta property="twitter:image" content={image} />
                <meta property="twitter:title" content="Employee Of The Month" />
                <meta property="twitter:description" content="This month's employee of the month is Babagana Abba" />
            </Head>
            <div className="page-container">
                <Toolbar />
                <div className={styles.main}>
                    <h1>Employee of the Month</h1>

                    <div className={styles.employeeOfTheMonth}>
                        <h3>Babagana Abba</h3>
                        <h6>Web Developer</h6>
                        <img src={image} alt=""/>
                        <p>Just a simple web developer guy</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default EOM;