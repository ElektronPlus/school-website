import type { ElementProps } from "react-html-props"

type IconProps = {
  name: string;
} & ElementProps;

const PlaceholderIcon = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
      <path d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" />
    </svg>
  );
};

const getIconUrl = (name: string) =>
  `https://fonts.gstatic.com/s/i/short-term/release/materialsymbolsoutlined/${name}/default/24px.svg`;

export async function Icon({ name, ...props }: IconProps) {
  // if (process.env.NEXT_PUBLIC_OFFLINE_MODE === "true") {
  //   return <PlaceholderIcon />
  // }

  const response = await fetch(getIconUrl(name));

  if (response.ok && response.status >= 200 && response.status < 300) {
    return (
      <span
        className={`material-icon material-icon__${name}`}
        dangerouslySetInnerHTML={{
          __html: await response.text(),
        }}
        {...props}
      />
    );
  }

  return <PlaceholderIcon />;
}
