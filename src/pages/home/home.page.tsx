import './home.style.css';

import { IonContent, IonList, IonListHeader, IonPage } from '@ionic/react';
import HeaderComponent from '../header.components'; 
import FooterComponent from '../footer.components';
import { useState } from 'react';
import { IPlayer } from '../../modells/player.modell';
import { useEffect } from 'react';
import { playersData } from '../../fakeData/data';
import PlayerComponent from './player.component';
import LoaderComponent from './loader.components';

const Home: React.FC = () => 
{
  const [players,setPlayers] = useState<IPlayer[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  
  useEffect(()=>
  {
      setTimeout(() => 
      {
          setPlayers(playersData);
          setIsLoading(false);
      }, 500);

  }, []);


  const list = (): JSX.Element =>
    <IonList>
      <IonListHeader>Top 20 of all time</IonListHeader>
      {
        players && players.map((player:IPlayer) => <PlayerComponent player={player} key={player.name}/>)
      }
    </IonList>
  
  return (
    <IonPage>
      <HeaderComponent />
      <IonContent fullscreen>
      {
        isLoading ?
          <LoaderComponent /> :
          list()
      }
      </IonContent>
      <FooterComponent />
    </IonPage>
  );
}

export default Home;
