import { PropsWithChildren } from "react";

export default function ErrorMessage({children}:PropsWithChildren) {
  return (
    <p className="bg-red-700 text-white uppercase text-center p-2 font-bold">
        {children}
    </p>
  )
}
