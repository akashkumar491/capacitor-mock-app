import {
  IonContent,
  IonButton,
  IonGrid,
  IonRow,
  IonCol,
  IonPage,
  IonImg,
} from "@ionic/react";
import "./Home.css";
import LoginModal from "../components/LoginModal/LoginModal";
import { useEffect, useState } from "react";
import { buttonEnum } from "../utils/Helper";
import InAppMessage from "../components/InAppMessage";

const Home: React.FC = () => {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [email, setEmail] = useState<string | null>(null);
  const [showInAppMessage, setShowInAppMessage] = useState(false);

  const handleConfirm = (newEmail: string) => {
    setEmail(newEmail);
    localStorage.setItem("email", newEmail);
  };

  const handleOpenInAppMessage = () => {
    setShowInAppMessage(true);
  };

  const handleOnClick = (buttonType: string) => {
    alert(
      `User ${email} tracked.\nButton clicked: ${buttonEnum[buttonType].title}`
    );
  };

  useEffect(() => {
    localStorage.removeItem("email");
  }, []);

  const handleLogout = () => {
    setEmail(null);
    localStorage.removeItem("email");
    alert("Logout Triggered!");
  };

  return (
    <IonPage>
      <IonContent fullscreen className="ion-padding">
        {/* Logo at the top of the screen */}
        <IonImg src="insider_logo.png" className="logo-img" />

        <h4 className="title">User Attributes</h4>

        {/* Main Button for Social Proof */}
        <IonButton
          expand="block"
          onClick={() => handleOnClick("btn1")}
          color={"dark"}
          className="full-width-button"
        >
          Set Attribute
        </IonButton>

        <h4 className="title">User Identifiers</h4>
        <IonButton
          expand="block"
          onClick={() => setShowLoginModal(true)}
          color={"dark"}
          className="full-width-button"
        >
          Login
        </IonButton>
        <IonButton
          expand="block"
          color="tertiary"
          className="full-width-button"
          onClick={handleLogout}
        >
          Logout
        </IonButton>
        <h4 className="title">Event</h4>
        <IonButton
          expand="block"
          onClick={() => handleOnClick("btn2")}
          color={"dark"}
          className="full-width-button"
        >
          Trigger Events
        </IonButton>
        <h4 className="title">Product</h4>
        <IonButton
          expand="block"
          color={"medium"}
          className="full-width-button"
          onClick={() => handleOnClick("btn3")}
        >
          Create Product
        </IonButton>

        {/* Title for Page Visit Methods */}
        <h4 className="title">Purchase</h4>

        {/* Buttons Grid */}
        <IonGrid>
          <IonRow>
            {/* Buttons on the left */}
            <IonCol size="6">
              <IonButton
                expand="block"
                color={"dark"}
                className="button-custom"
                onClick={() => handleOnClick("btn4")}
              >
                Item Add To Cart
              </IonButton>
              <IonButton
                expand="block"
                color={"dark"}
                className="button-custom button-spacing"
                onClick={() => handleOnClick("btn5")}
              >
                Item Purchase
              </IonButton>
            </IonCol>

            {/* Buttons on the right */}
            <IonCol size="6">
              <IonButton
                expand="block"
                color={"dark"}
                className="button-custom"
                onClick={() => handleOnClick("btn6")}
              >
                Item Remove From Cart
              </IonButton>
              <IonButton
                expand="block"
                color={"dark"}
                className="button-custom button-spacing"
                onClick={() => handleOnClick("btn7")}
              >
                Cart Clear
              </IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
        <h4 className="title">Smart Recommender</h4>
        <IonButton
          expand="block"
          color={"dark"}
          onClick={() => handleOnClick("btn8")}
          className="full-width-button"
        >
          Get Smart Recommender Data
        </IonButton>
        <h4 className="title">Social Proof</h4>
        <IonButton
          expand="block"
          color={"dark"}
          onClick={() => handleOnClick("btn9")}
          className="full-width-button"
        >
          Trigger Social Proof
        </IonButton>

        <h4 className="title">Page Visit Method</h4>

        {/* Buttons Grid */}
        <IonGrid>
          <IonRow>
            {/* Buttons on the left */}
            <IonCol size="6">
              <IonButton
                expand="block"
                color={"dark"}
                className="button-custom"
                onClick={() => handleOnClick("btn10")}
              >
                Home Page
              </IonButton>
              <IonButton
                expand="block"
                color={"dark"}
                className="button-custom button-spacing"
                onClick={() => handleOnClick("btn11")}
              >
                Cart Page
              </IonButton>
            </IonCol>

            {/* Buttons on the right */}
            <IonCol size="6">
              <IonButton
                expand="block"
                color={"dark"}
                className="button-custom"
                onClick={() => handleOnClick("btn12")}
              >
                Product Page
              </IonButton>
              <IonButton
                expand="block"
                color={"dark"}
                className="button-custom button-spacing"
                onClick={() => handleOnClick("btn13")}
              >
                Category Page
              </IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>

        <h4 className="title">GDPR</h4>
        <IonGrid>
          <IonRow>
            {/* Buttons on the left */}
            <IonCol size="6">
              <IonButton
                expand="block"
                color={"dark"}
                className="button-custom"
                onClick={() => handleOnClick("btn14")}
              >
                GDPR True
              </IonButton>
            </IonCol>

            {/* Buttons on the right */}
            <IonCol size="6">
              <IonButton
                expand="block"
                color={"dark"}
                className="button-custom"
                onClick={() => handleOnClick("btn15")}
              >
                GDPR False
              </IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>

        <h4 className="title">Message Center</h4>
        <IonButton
          expand="block"
          onClick={handleOpenInAppMessage}
          color={"dark"}
          className="full-width-button"
        >
          Get Message Center Data
        </IonButton>

        <h4 className="title">Content Optimizer</h4>
        <IonButton
          expand="block"
          color={"dark"}
          style={{ fontSize: 12 }}
          className="full-width-button"
          onClick={() => handleOnClick("btn16")}
        >
          Get Variable With Content Optimizer
        </IonButton>
        <LoginModal
          isOpen={showLoginModal}
          onClose={() => setShowLoginModal(false)}
          onConfirm={handleConfirm}
        />
        <InAppMessage
          isOpen={showInAppMessage}
          onClose={() => setShowInAppMessage(false)}
          user={email}
        />
      </IonContent>
    </IonPage>
  );
};

export default Home;
