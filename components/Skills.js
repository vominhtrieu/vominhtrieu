import { useEffect, useState } from "react";
import { Container, Button } from "react-bootstrap";
import Image from "next/image";
import styles from "../styles/Skills.module.css";

const FULL_TITLE = "Ho Chi Minh University of Science";

export default function Skills() {
    const [title, setTitle] = useState("");

    useEffect(() => {
        setTimeout(() => {
            if (title.length === FULL_TITLE.length) {
                setTimeout(() => {
                    setTitle("");
                }, 20000);
            } else {
                setTitle(title + FULL_TITLE[title.length]);
            }
        }, 50);
    }, [title]);

    return <Container className={styles.container} id="skills">
        <h2 className={styles.title}>Skills</h2>
        <div>
            <h5 className={styles.textCenter}>Proficient with</h5>
            <div className={styles.skillList}>
                <a href="https://nodejs.org/" className={styles.skillLogo} style={{ backgroundColor: "#333333" }}>
                    <Image src="/NodeJs.svg" alt="NodeJs's Logo" width={80} height={80} title="NodeJs" />
                </a>
                <a href="https://reactjs.org/" className={styles.skillLogo}>
                    <Image src="/ReactJs.svg" alt="ReactJs's Logo" width={80} height={80} title="ReactJs" />
                </a>
                <a href="https://www.javascript.com/" className={styles.skillLogo}>
                    <Image src="/Javascript.png" alt="Javascript's Logo" width={100} height={100} title="Javascript" />
                </a>
                <a href="https://en.wikipedia.org/wiki/HTML" className={styles.skillLogo} style={{ backgroundColor: "white" }}>
                    <Image src="/HTML.png" alt="HTML's Logo" width={80} height={80} title="HTML" />
                </a>
                <a href="https://en.wikipedia.org/wiki/CSS" className={styles.skillLogo} style={{ backgroundColor: "white" }}>
                    <Image src="/CSS.jpg" alt="CSS's Logo" width={75} height={80} title="CSS" />
                </a>
                <a href="https://www.postgresql.org/" className={styles.skillLogo}>
                    <Image src="/PostgresSQL.svg" alt="PostgresSQL's Logo" width={80} height={80} title="PostgresSQL" />
                </a>
                <a href="https://go.dev/" className={styles.skillLogo} style={{ backgroundColor: "white" }}>
                    <Image src="/Golang.png" alt="Golang's Logo" width={80} height={80} title="Golang" />
                </a>
                <a href="https://www.python.org/" className={styles.skillLogo} style={{ backgroundColor: "white" }}>
                    <Image src="/Python.png" alt="Python's Logo" width={80} height={80} title="Python" />
                </a>
            </div>
            <h5 className={styles.textCenter}>Familiar with</h5>
            <div className={styles.skillList}>
                <a href="https://unity.com/" className={styles.skillLogo}>
                    <Image src="/Unity.jpg" alt="Unity's Logo" width={100} height={100} title="Unity" />
                </a>
                <a href="https://nextjs.org/" className={styles.skillLogo} style={{boxShadow: "none !important"}}>
                    <Image src="/NextJs.png" alt="NextJs's Logo" width={100} height={100} title="NextJs" />
                </a>
                <a href="https://www.mongodb.com/" className={styles.skillLogo}>
                    <Image src="/MongoDB.png" alt="MongoDB's Logo" width={80} height={80} title="MongoDB" />
                </a>
                <a href="https://jquery.com/" className={styles.skillLogo}>
                    <Image src="/JQuery.png" alt="JQuery's Logo" width={100} height={100} title="JQuery" />
                </a>
            </div>
        </div>
    </Container>
}