import Intro from "./components/Intro";

export default function Information({section = 0}) {
    let sectionComponent = null;
    switch (section) {
        case 0:
            sectionComponent = <Intro/>;
            break;
        default:
            sectionComponent = <h1>Sorry, I cannot find this page for you</h1>
    }
    return (
        <>
            <div
                style={{top: 0, position: "fixed", right: 0, width: "100vw", maxWidth: 350, height: "100vh"}}>
                <div style={{
                    background: "white",
                    borderTopLeftRadius: 10,
                    borderBottomLeftRadius: 10,
                    width: "100%",
                    height: "100vh",
                    display: "flex",
                    flexDirection: "column"
                }}>
                    <div style={{flexBasis: 1, flexGrow: 1, padding: 20}}>
                        {sectionComponent}
                    </div>
                </div>
            </div>
            <div style={{position: "absolute", left: 10, bottom: 10}}>
                <p style={{color: "#ffffff33", margin: 0}}>Earth's 3D models is provided by &nbsp;
                    <a style={{
                        color: "#ffffff66",
                    }}
                        href="https://solarsystem.nasa.gov/">NASA</a></p>
            </div>
        </>
    )
}