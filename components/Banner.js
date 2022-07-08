import { useEffect, useState } from "react";
import { Container, Button } from "react-bootstrap";
import styles from "../styles/Banner.module.css";

const FULL_TITLE = "Hi, I'm Vo Minh Trieu";

export default function Banner() {
    const [title, setTitle] = useState("");

    useEffect(() => {
        setTimeout(() => {
            if (title.length === FULL_TITLE.length) {
                setTimeout(() => {
                    setTitle("");
                }, 5000);
            } else {
                setTitle(title + FULL_TITLE[title.length]);
            }
        }, 50);
    }, [title]);

    return <Container className={styles.container}>
        <div>
            <h1 className={styles.title}>{title}_</h1>
            <h5 className={styles.secondary}>{"<Software Engineer />"}</h5>
            <p className={styles.description}>
                An web developer with a passion for game and mobile app development
            </p>
        </div>
        <div>
            <img className={styles.avatar} src="/Avatar.jpg" />
        </div>
    </Container>
}