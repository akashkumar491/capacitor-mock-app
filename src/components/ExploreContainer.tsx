import { useEffect, useState } from "react";
import "./ExploreContainer.css";
import { IonButton } from "@ionic/react";

interface ContainerProps {}

// * REPLACE localhost with Your ip address * //

const ExploreContainer: React.FC<ContainerProps> = () => {
  const [analytics, setAnalytics] = useState({ yes: -1, no: -1 });

  const icon = "https://creatives.attn.tv/kay/download_6806f716.png";
  const title = "WOULD YOU LIKE";
  const body = "$25 OFF?";
  const button1 = "YES";
  const button2 = "No, thanks";
  const image =
    "https://www.kay.com/productimages/processed/V-877697300_0_260.jpg?pristine=true";

  useEffect(() => {
     // * REPLACE localhost with Your ip address * //
    const fetchAnalytics = async () => {
      const response = await fetch("http://localhost:3001/analytics");
      const data = await response.json();
      setAnalytics({ ...data });
    };

    fetchAnalytics();
  }, []);

  // * REPLACE localhost with Your ip address * //

  const handleClick = async (buttonType: string) => {
    try {
      let updatedAnalytics = { ...analytics };
      if (buttonType === "yes") {
        updatedAnalytics = { ...analytics, yes: analytics.yes + 1 };
      } else {
        updatedAnalytics = { ...analytics, no: analytics.no + 1 };
      }
      setAnalytics(updatedAnalytics);
      const result = await fetch("http://localhost:3001/analytics", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedAnalytics),
      });

      const res = await fetch("http://localhost:3001/analytics");
      const currentData = await res.json();
      setAnalytics(currentData);
      alert(`Current Count- YES:${currentData.yes}  NO:${currentData.no}`);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container" style={{ backgroundImage: `url(${image})` }}>
      <img src={icon} alt="Icon" className="icon" />
      <h1 className="title">{title}</h1>
      <p className="body">{body}</p>
      <IonButton
        color="dark"
        className="button"
        onClick={() => handleClick("yes")}
      >
        {button1}
      </IonButton>
      <IonButton
        color="light"
        className="button"
        onClick={() => handleClick("no")}
      >
        {button2}
      </IonButton>
    </div>
  );
};

export default ExploreContainer;
