import { IonFooter, IonToolbar, IonTitle } from "@ionic/react";
import React from "react";

const FooterComponent: React.FC = (): JSX.Element =>
{
    return (
        <IonFooter>
          <IonToolbar>
            <IonTitle size="large">{new Date().getFullYear()}</IonTitle>
          </IonToolbar>
        </IonFooter>
    );
}

export default FooterComponent;