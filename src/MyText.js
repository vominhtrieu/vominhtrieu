import {TextGeometry} from 'three/examples/jsm/geometries/TextGeometry';
import {FontLoader} from 'three/examples/jsm/loaders/FontLoader';
import {extend} from '@react-three/fiber'
import myFont from './Roboto-Regular.ttf';

extend({TextGeometry})


export default function MyText({text}) {
    const font = new FontLoader().parse(myFont);

    return (
        <mesh position={[0, 10, 0]}>
            <textGeometry args={['test', {font, size: 5, height: 1}]}/>
            <meshLambertMaterial attach='material' color={'white'}/>
        </mesh>
    );
}