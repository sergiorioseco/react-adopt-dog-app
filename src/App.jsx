import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Card from './components/Card.jsx';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <>
<div className='mainSection'>
<Header text='Adopta un perrito'></Header>
<div className='cardsGrid'>
  <Card
    url='https://images.pexels.com/photos/5966250/pexels-photo-5966250.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    title='Jamón'
    text='Amigable, enérgico, inteligente. Ideal para familias y actividades al aire libre.'
    tagColor='secondary'
    tagText='Yorkshire Terrier'>
  </Card>
  <Card
    url='https://images.pexels.com/photos/2171583/pexels-photo-2171583.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    title='Mortadelo'
    text='Juguetón, cariñoso, de tamaño pequeño. Perfecto para apartamentos y compañía constante.'
    tagColor='primary'
    tagText='Bulldog Francés'>
  </Card>
  <Card
    url='https://images.pexels.com/photos/3709026/pexels-photo-3709026.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    title='Longaniza'
    text='Leal, protector, inteligente. Ideal como perro de trabajo, entrenamiento y compañía fiel.'
    tagColor='warning'
    tagText='Pastor Alemán'>
  </Card>
  <Card
    url='https://images.pexels.com/photos/485294/pexels-photo-485294.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    title='Chorizo'
    text='Pequeño, valiente, leal. Perfecto para hogares tranquilos y dueños que busquen un compañero de tamaño reducido.'
    tagColor='info'
    tagText='Chihuahua'>
  </Card>
</div>
<Footer text='Te invitamos a explorar nuestra página, ver las fotos adorables de nuestros perros y leer sus historias conmovedoras. Si algo te cautiva, no dudes en comunicarte con nosotros. Estaremos encantados de responder a tus preguntas, programar una visita y ayudarte a dar el primer paso hacia la adopción.'></Footer>
</div>
    </>
  )
}

export default App
