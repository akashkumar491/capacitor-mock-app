import "./ExploreContainer.css";
import { IonButton } from "@ionic/react";

interface ContainerProps {}

const ExploreContainer: React.FC<ContainerProps> = () => {
  const icon = "https://creatives.attn.tv/kay/download_6806f716.png";
  const title = "WOULD YOU LIKE";
  const body = "$25 OFF?";
  const button1 = "YES";
  const button2 = "No, thanks";
  const image =
    "https://www.kay.com/productimages/processed/V-877697300_0_260.jpg?pristine=true";

  const handleClick = () => {
    alert("Button clicked!");
  };

  return (
    <div className="container" style={{ backgroundImage: `url(${image})` }}>
      <img src={icon} alt="Icon" className="icon" />
      <h1 className="title">{title}</h1>
      <p className="body">{body}</p>
      <IonButton color="dark" className="button" onClick={handleClick}>
        {button1}
      </IonButton>
      <IonButton color="light" className="button" onClick={handleClick}>
        {button2}
      </IonButton>
    </div>
  );
};

export default ExploreContainer;
