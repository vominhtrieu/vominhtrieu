export default function Intro() {
    return (
        <>
            <h1 style={{margin: 0}}><span style={{fontWeight: "normal"}}>Hi, My name is <br/> </span><i>Võ Minh
                Triều</i></h1>
            <h3 style={{marginBottom: 5}}>Introduction</h3>
            <p style={{marginTop: 0}}>
                <p style={{color: "rgba(0,0,0,0.8)"}}>I'm a software engineer. I like coding and 3D design.</p>
            </p>
            <h3 style={{marginBottom: 5}}>Contact</h3>
            <div style={{marginTop: 0}}>
                <ul style={{color: "rgba(0,0,0,0.8)"}}>
                    <li>
                        Email:&nbsp;<a href="mailto:minhtrieuvo600@gmail.com">minhtrieuvo600@gmail.com</a>
                    </li>
                    <li>
                        Upwork:&nbsp;
                        <a href="https://www.upwork.com/freelancers/~01a4827df03a7406d8">Minh Trieu Vo</a>
                    </li>
                </ul>
            </div>
            <h3 style={{marginBottom: 5}}>How to use this website?</h3>
            <ul style={{color: "rgba(0,0,0,0.8)"}}>
                <li>Click, hold and move your mouse to rotate the camera</li>
                <li>Right click, hold and move your mouse to move the camera</li>
                <li>Scroll up to zoom in, scroll down to zoom out</li>
            </ul>

            <h3 style={{marginBottom: 5}}>Disclaimer</h3>
            <p style={{marginTop: 0}}>
                <p style={{color: "rgba(0,0,0,0.8)"}}>
                    This website does not provide any academic information. <br/>
                    Size of planets and distance between them won't be accurate.
                </p>
            </p>
        </>
    )
        ;
}