import Link from 'next/link';

export function TemplateAuthors() {
  const authors = [
    { name: 'Jan Szymański,', link: 'https://github.com/konhi' },
    { name: 'Krystian Wybranowski +', link: 'https://github.com/wybran' },
    {
      name: 'Contributors = ❤✏',
      link: 'https://github.com/ElektronPlus/school-website/graphs/contributors',
    },
  ];

  return (
    <>
      {authors.map((author) => {
        return (
          <Link key={author.link} passHref href={author.link}>
            <a key={author.link}>{author.name}&nbsp;</a>
          </Link>
        );
      })}
    </>
  );
}
