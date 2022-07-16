import { UploadFileEntityResponse } from 'generated/graphql';
import { StrapiImageFuture } from 'components/StrapiImageFuture';
import { H } from 'react-accessible-headings';

export function Header({
  header
}: {
  header: UploadFileEntityResponse;
}) {

  return (
    <H
      css={{
        position: 'relative',
        width: '100%',
        height: '2rem',
        display: 'block',
      }}
    >
      <StrapiImageFuture image={header} imageProps={{priority: true, sizes: "400px", style: {width: "auto", height: "2rem"} }}/>
    </H>
  );
}
