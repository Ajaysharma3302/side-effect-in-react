import { useEffect } from "react";

const TitleUpdaterComponent = () => {
  useEffect(() => {
    document.title = "Component Mounted!";

    return () => {
      document.title = "Component Unmounted!";
    };
  }, []);

  return <h2>Check the document title!</h2>;
};

export default TitleUpdaterComponent;
