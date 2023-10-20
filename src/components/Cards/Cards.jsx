import Card from '../Card/Card';
import styles from './styles.module.css'

export default function Cards(props) {
    
   return <div className={styles.container}>
      {props.characters.map((el)=>(
         <Card key={el.id} 
         name={el.name}
         status={el.status}
         species={el.species}
         gender={el.gender}
         origin={el.origin.name}
         image={el.image}
         onClose={() => window.alert('Emulamos que se cierra la card')}/>
      ))}
   </div>;
}
