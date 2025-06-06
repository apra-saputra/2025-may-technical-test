import { useEffect } from "react";

interface MetaHeaderProps {
  title?: string;
  description?: string;
  keywords?: string; // Add keywords
  author?: string; // Add author
}

const useMetaHeader = ({ title, description, keywords, author }: MetaHeaderProps) => {
  useEffect(() => {
    document.title = title ? `DAIRY | ${title}` : "DAIRY";

    // Update or create the meta description tag
    let metaDescription = document.querySelector('meta[name="description"]') as HTMLMetaElement | null;
    if (!metaDescription) {
      metaDescription = document.createElement("meta") as HTMLMetaElement;
      metaDescription.name = "description";
      document.head.appendChild(metaDescription);
    }
    metaDescription.content = description || "My description";

    // Add or update the meta keywords tag
    let metaKeywords = document.querySelector('meta[name="keywords"]') as HTMLMetaElement | null;
    if (!metaKeywords) {
      metaKeywords = document.createElement("meta") as HTMLMetaElement;
      metaKeywords.name = "keywords";
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.content = keywords || "";

    // Add or update the meta author tag
    let metaAuthor = document.querySelector('meta[name="author"]') as HTMLMetaElement | null;
    if (!metaAuthor) {
      metaAuthor = document.createElement("meta") as HTMLMetaElement;
      metaAuthor.name = "author";
      document.head.appendChild(metaAuthor);
    }
    metaAuthor.content = author || "";

    // Clean up on unmount
    return () => {
      if (metaDescription && document.head.contains(metaDescription)) {
        document.head.removeChild(metaDescription);
      }
      if (metaKeywords && document.head.contains(metaKeywords)) {
        document.head.removeChild(metaKeywords);
      }
      if (metaAuthor && document.head.contains(metaAuthor)) {
        document.head.removeChild(metaAuthor);
      }
    };
  }, [title, description, keywords, author]);

  return null;
};


export default useMetaHeader;
