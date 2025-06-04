import { useEffect } from "react";

const useDocumentTitle = (title?: string) => {
  useEffect(() => {
    document.title = `${
      title ? title[0].toUpperCase() + title.slice(1) : "Trip Planner, Guide, Info Destinasi | GetGoing"
    } `;

    const metaDescription = document.querySelector('meta[name="description"]');

    if (metaDescription) {
      metaDescription.setAttribute("content", `Admin Page show page ${title}`);
    }
  }, [title]);

  return null;
};

export default useDocumentTitle;
