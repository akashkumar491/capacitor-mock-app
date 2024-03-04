import React, { useState, useRef } from "react";
import {
  IonModal,
  IonHeader,
  IonToolbar,
  IonButtons,
  IonButton,
  IonTitle,
  IonContent,
  IonItem,
  IonLabel,
  IonInput,
  IonText,
} from "@ionic/react";

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: (email: string) => void;
}

const LoginModal: React.FC<LoginModalProps> = ({
  isOpen,
  onClose,
  onConfirm,
}) => {
  const [email, setEmail] = useState("");
  const modalRef = useRef<HTMLIonModalElement>(null);

  const validateEmail = (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const confirm = () => {
    if (validateEmail(email)) {
      onConfirm(email);
      setEmail("");
      closeModal();
    }
  };

  const closeModal = () => {
    modalRef.current?.dismiss();
  };

  const handleOnClose = () => {
    setEmail("");
    onClose();
  };

  return (
    <IonModal isOpen={isOpen} onDidDismiss={handleOnClose} ref={modalRef}>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonButton color={"dark"} onClick={handleOnClose}>
              Cancel
            </IonButton>
          </IonButtons>
          <IonTitle className="ion-text-center" color={"dark"}>
            Login
          </IonTitle>
          <IonButtons slot="end">
            <IonButton color={"dark"} strong={true} onClick={confirm}>
              Confirm
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonItem>
          <IonLabel
            position="stacked"
            color={"dark"}
            style={{ fontSize: "2rem", marginBottom: 20 }}
          >
            Enter your email
          </IonLabel>
          <IonInput
            color={"dark"}
            type="email"
            placeholder="Enter email"
            value={email}
            onIonChange={(e) => setEmail(e.detail.value!)}
          />
        </IonItem>
        {!validateEmail(email) && email.trim() !== "" && (
          <IonText color="danger">
            <p>Email format is incorrect</p>
          </IonText>
        )}
      </IonContent>
    </IonModal>
  );
};

export default LoginModal;
