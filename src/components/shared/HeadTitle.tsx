import Head from 'next/head'

function HeadTitle({ title }: HeadTitleProps) {
  return (
    <Head>
      <title>{title}</title>
      <meta property={`og:${title}`} content={`page ${title}`}  key={`${title}`}  />
    </Head>
  )
}

export interface HeadTitleProps {
  title: string;
}

export default HeadTitle;
