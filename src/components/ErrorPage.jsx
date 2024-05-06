import { useRouteError } from 'react-router-dom';

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="mt-5 mb-5">
      <div className="col-10 mx-auto p-5 text-center">
        <h1 className="text-4xl mb-4 pb-3">
          <span className="text-red-500">ERROR 404</span>&nbsp;Page Not Found!!
        </h1>
        <p className="text-lg">ขออภัยในความไม่สะดวก</p>
      </div>
    </div>
  );
}
