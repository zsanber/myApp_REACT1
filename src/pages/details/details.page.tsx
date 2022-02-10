//import "/.details.style.css";

import React from "react";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { playersData } from "../../fakeData/data";
import { IPlayer } from "../../modells/player.modell";
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonPage } from "@ionic/react";
import FooterComponent from "../footer.components";
import HeaderComponent from "../header.components";
import LoaderComponent from "../home/loader.components";

interface IProps extends RouteComponentProps<{id: string}> {}

const DetailsPage : React.FC<IProps> = (props: IProps): JSX.Element =>
{
    const [player, setPlayer] = useState <IPlayer>();
    const [isLoading, setIsloading] = useState <boolean>(true);

    useEffect(() =>
        { 
            setTimeout(() =>
            {
                const id = +props.match.params.id;
                const data: IPlayer | undefined = playersData.find((x: IPlayer) => x.id === id);
                setPlayer(data);

                setIsloading(false);

            }, 1000);

        }, [props.match.params.id]);
    

    const details = (): JSX.Element =>
        <IonCard>
            <img src={player?.imageLink} alt={player?.name} />
            <IonCardHeader>
                <IonCardSubtitle>{player?.club}</IonCardSubtitle>
                <IonCardTitle>{player?.name}</IonCardTitle>
                <p>{player?.birthday}</p>
            </IonCardHeader>
            <IonCardContent>
                <p>{player?.description}</p>
                <p>height: {player?.height} cm</p>
                <p>weight: {player?.weight} kg</p>
            </IonCardContent>
        </IonCard>


    return (
        <IonPage>
        <HeaderComponent />
        <IonContent fullscreen>
        {
            isLoading ?
            <LoaderComponent /> :
            details()
        }
        </IonContent>
        <FooterComponent />
      </IonPage>
    );
}

export default withRouter(DetailsPage);