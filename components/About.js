import { Container } from "react-bootstrap";
import styles from "../styles/About.module.css";

export default function About() {
    return <Container className="container">
        <div className={styles.timeline}></div>
        <h1>Education</h1>
        <h1>Experiences</h1>
    </Container>
}