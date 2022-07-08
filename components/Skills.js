import { useEffect, useState } from "react";
import { Container, Button } from "react-bootstrap";
import Image from "next/image";
import styles from "../styles/Banner.module.css";

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
        <div>
            <h2 className={styles.title}>Skills</h2>
            <h5 className={styles.secondary}>8/2018 - 7/2022</h5>
            <p className={styles.description}>
                <b><i>Major: </i></b> Software Engineering <br />
                <b><i>GPA: </i></b> 8.31/10.00 <br /> <br />
                VNUHCM - University of Science has been serving as a pioneer in offering various scientific degrees across Southern Vietnam.
            </p>
        </div>
        <div>
            <Image className={styles.university} width="300px" height="300px" alt="My university" src="/HCMUS.jpg" />
        </div>
    </Container>
}