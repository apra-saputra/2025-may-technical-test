import React, { useMemo } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";

interface ContentComponentProps {
  source: string;
}

const ContentComponent: React.FC<ContentComponentProps> = ({ source }) => {
  if (!source) return null;

  const memoizedContent = useMemo(() => {
    let mdSource = source
      .replace(
        /<TiktokEmbed url="(.+?)" \/>/g,
        (_, url) => `[Tonton Video TikTok](${url})`
      )
      .replace(
        /<YoutubeEmbed url="(.+?)" \/>/g,
        (_, url) => `<iframe src="${url}"  />`
      )
      .replace(
        /<InstagramEmbed url="(.+?)" \/>/g,
        (_, url) => `[Buka di Instagram](${url})`
      )
      .replace(
        /<TwitterEmbed url="(.+?)" \/>/g,
        (_, url) => `[Buka Twitter](${url})`
      );

    return mdSource;
  }, [source]);

  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      rehypePlugins={[rehypeRaw]}
      components={{
        li: ({ children }) => (
          <li className="ml-4 list-disc mb-2">{children}</li>
        ),
        a: ({ ...props }) => (
          <a
            className="underline text-accent text-xl font-semibold w-full mx-auto hover:brightness-120"
            target="_blank"
            {...props}
          />
        ),
        h1: ({ children }) => (
          <h1 className="text-5xl font-bold mb-4 underline">{children}</h1>
        ),
        h2: ({ children }) => (
          <h2 className="text-3xl font-bold mb-3">{children}</h2>
        ),
        h3: ({ children }) => (
          <h3 className="text-2xl font-bold mb-3">{children}</h3>
        ),
        p: ({ children }) => <p className="mb-3">{children}</p>,

        img: ({ ...props }) => (
          <img {...props} className="rounded-lg mx-auto my-4" />
        ),
        iframe: ({ ...props }) => (
          <iframe
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="rounded-lg w-full aspect-video"
            {...props}
          ></iframe>
        ),
      }}
      children={memoizedContent}
    />
  );
};

export default ContentComponent;
