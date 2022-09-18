import Link from 'next/link';

function Content({ message, link }: { message: string; link: string | null }) {
  if (link) {
    return (
      <Link href={link} passHref>
        <a>{message} ➞</a>
      </Link>
    );
  }

  return <>{message}</>;
}

export function Alert({
  message,
  link,
}: {
  message: string;
  link: string | null;
}) {
  return (
    <div
      css={{
        padding: '8px',
        textAlign: 'center',
        borderTop: '#00000075 2px dashed',
        fontWeight: 700,
      }}
    >
      <Content message={message} link={link} />
    </div>
  );
}
