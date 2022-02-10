import { IonAvatar, IonItem, IonLabel } from "@ionic/react";
import React from "react";
import { IPlayer } from "../../modells/player.modell";

interface IProps
{
    player: IPlayer;
}

const PlayerComponent: React.FC<IProps> = (props: IProps): JSX.Element =>
{
    return (
        <IonItem routerLink={`/details/${props.player.id}`} >
            <IonAvatar>
                <img src={props.player.imageLink} alt={props.player.name} />
            </IonAvatar>
            <IonLabel>
                <h2>{props.player.name}</h2>
                <h3>{props.player.birthday}</h3>
            </IonLabel>
        </IonItem>
    );
}

export default PlayerComponent;