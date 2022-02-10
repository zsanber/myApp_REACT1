import { IonHeader, IonToolbar, IonTitle } from "@ionic/react";
import Reach from "react";

const HeaderComponent: React.FC = (): JSX.Element =>
{
    return(
        <IonHeader>
            <IonToolbar>
                <IonTitle>Amazon's of Wolleyball</IonTitle>
            </IonToolbar>
        </IonHeader>
    );
}

export default HeaderComponent;