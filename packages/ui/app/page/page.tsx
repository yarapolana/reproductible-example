export function SiteNotFound() {
  return (
    <div className="flex flex-col justify-center items-center w-full h-screen">
      <div className="absolute top-4 left-4">{/* <BackButton to="" /> */}</div>
      <div className="flex flex-col items-center gap-x-5">
        <h1 className="text-5xl font-bold">some title</h1>
        {/* <div className="w-px h-full border-l border-gray-400"></div> */}
        <p className="font-medium text-slate-300">
          Example of page within route
        </p>
      </div>
    </div>
  );
}
