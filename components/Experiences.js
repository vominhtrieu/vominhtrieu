import { useEffect, useState } from "react";
import { Container, Button } from "react-bootstrap";
import Image from "next/image";
import styles from "../styles/Experiences.module.css";

export default function Experiences() {
    return <Container className={styles.container} id="experiences">
        <h2 className={styles.title}>Experiences</h2>

        <div className={styles.timeline}>
            <div className={styles.company}>
                {/* <div className={styles.time}>4/2022</div> */}
                <Image className={styles.university} width="150px" height="150px"
                    alt="Phenikaa MaaS's logo"
                    src="/KiteMetric.png" />
                <div className={styles.companyContent}>
                    <h5 className={styles.companyName}>Kite Metric</h5>
                    <h6 className={styles.role}>Software Engineer</h6>
                    <p>4/2022 - Present</p>
                    <p className={styles.description}>
                        Working directly with customers and team on building a coaching system. <br />
                    Highly document workflow. <br/>
                        Tech stack: Python, React.Js, PostgresSQL, Docker, GraphQL, Appolo GraphQL.
                    </p>
                </div>
            </div>
            <div className={styles.company}>
                {/* <div className={styles.time}>6/2021</div> */}
                <Image className={styles.university} width="150px" height="150px"
                    alt="Phenikaa MaaS's logo"
                    src="/PhenikaaMaaS.png" />
                <div className={styles.companyContent}>
                    <h5 className={styles.companyName}>Phenikaa MaaS</h5>
                    <h6 className={styles.role}>Backend Engineer</h6>
                    <p>6/2021 - 3/2022</p>
                    <p className={styles.description}>
                        Working with team on building a school system. <br />
                        Tech stack: Golang, PostgresSQL.
                    </p>
                </div>
            </div>
        </div>
    </Container>
}