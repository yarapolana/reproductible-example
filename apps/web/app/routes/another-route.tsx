import { defer, type MetaFunction } from "@vercel/remix";
import { Await, useLoaderData } from '@remix-run/react'
import { Suspense } from 'react'

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

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
            <h1>Welcome to Remix{resolved as any}</h1>
            <ul>
              <li>
                <a
                  target="_blank"
                  href="https://remix.run/tutorials/blog"
                  rel="noreferrer"
                >
                  15m Quickstart Blog Tutorial
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  href="https://remix.run/tutorials/jokes"
                  rel="noreferrer"
                >
                  Deep Dive Jokes App Tutorial
                </a>
              </li>
              <li>
                <a target="_blank" href="https://remix.run/docs" rel="noreferrer">
                  Remix Docs
                </a>
              </li>
            </ul>
          </div>

        )}}
    </Await>
    </Suspense>
  );
}
