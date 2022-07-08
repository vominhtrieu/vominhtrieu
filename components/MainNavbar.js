import { useEffect } from "react";
import { useState } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { useRouter } from 'next/router';

export function CustomNavLink({ page, currentPage, name, href }) {
    return <Nav.Link className={`${page === currentPage ? "active" : ""}`} href={href}>{name}</Nav.Link>
}

export default function MainNavbar({ pageContainer }) {
    const router = useRouter();
    const [scrolled, setScrolled] = useState(false);
    const [page, setPage] = useState(0);

    useEffect(() => {
        if (!pageContainer.current) {
            return;
        }
        pageContainer.current.onscroll = (e) => {
            setPage(Math.round(e.target.scrollTop / document.body.clientHeight));
        }
    }, []);

    useEffect(() => {
        setTimeout(() => {
            switch (page) {
                case 0:
                    router.replace(router.route, router.route);
                    break;
                case 1:
                    router.replace(router.route, router.route + "#education");
                    break;
            }
        }, 500);
    }, [page]);

    return (
        <Navbar bg="light" expand="lg" fixed="top" className={`${scrolled ? "scrolled" : ""}`}>
            <Container>
                <Navbar.Brand href="#home">Võ Minh Triều</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <CustomNavLink page={0} currentPage={page} href="#home" name="Home" />
                        <CustomNavLink page={1} currentPage={page} href="#education" name="Education" />
                        <CustomNavLink page={2} currentPage={page} href="#experiences" name="Experiences" />
                        <CustomNavLink page={3} currentPage={page} href="#skills" name="Skills" />
                        <CustomNavLink page={4} currentPage={page} href="#projects" name="Projects" />
                        <CustomNavLink page={5} currentPage={page} href="#contact" name="Contact" />
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}