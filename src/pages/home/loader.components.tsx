import React from "react";
import {IonSpinner} from "@ionic/react";

const LoaderComponent : React.FC = (): JSX.Element =>
{
    return (
        <div className="loader">
            <IonSpinner name="bubbles" />
        </div>
    );
}

export default LoaderComponent;