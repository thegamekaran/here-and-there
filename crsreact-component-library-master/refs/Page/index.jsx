import Head from "next/head";

export default function Page({ title, children, config, className }) {
  return (
    <main className="page">
      <Head>
        <title>{title || "App"}</title>
        {config && (
          <>
            {config.description && (
              <meta name="description" content={config.description} />
            )}
            {config.favicon && <link rel="icon" href={config.favicon} />}
          </>
        )}
      </Head>
      {config && config.splash && config.splash}
      {config && config.header}
      <article className={"app " + className}>{children}</article>
      {config && config.footer && config.footer}
      {config && config.styles && config.styles}
      {config && config.pageFunctions && config.pageFunctions}
    </main>
  );
}
