import { defer, type MetaFunction } from "@vercel/remix";
import { Await, useLoaderData } from '@remix-run/react'
import { Suspense } from 'react'
import { SiteNotFound } from '@reproductible/ui'

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

// Sentry.init({
//   dsn: env.SENTRY_DSN,
//   environment: env.NODE_ENV,
//   // enabled: env.NODE_ENV !== 'development',
//   tracesSampleRate: env.NODE_ENV === 'development' ? 1.0 : 0.4,
//   replaysSessionSampleRate: env.NODE_ENV === 'development' ? 1.0 : 0.1,
//   replaysOnErrorSampleRate: 1.0 // If you're not already sampling the entire session, change the sample rate to 100% when sampling sessions where errors occur.
// })

export async function loader() {
  const promise = new Promise((resolve) => setTimeout(() => resolve("'s Deferred Example"), 3000))

  return defer({
    promise
  })
}

export default function Index() {
  const { promise }  = useLoaderData<typeof loader>()

  return (
    <Suspense fallback={<div>Loading</div>}>
      <Await resolve={promise} errorElement={<div>Something went wrong</div>}>
        {(resolved) => {
          return (
          <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
            <h1>Another Remix{resolved as any}</h1>
            <SiteNotFound />
          </div>
        )}}
      </Await>
    </Suspense>
  );
}
