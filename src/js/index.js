import '../css/style.scss';
import img from '../assets/mine.jpg';
import moment from 'moment';


alert(moment().format('YYYY-MM-DD'))


const components = () => {
    const newH1 = document.createElement('h1');
    newH1.innerHTML = 'hello world! I am Alberto Colembi '
    newH1.style.color = 'blue'
    return newH1;
}
const componentsimg = () => {
    const img2 = new Image(300, 300);
    img2.src = img;
    return img2;
}
document.body.appendChild(components())
document.body.appendChild(componentsimg())