import { PropsWithChildren } from "react";

export default function ErrorMessage({children}:PropsWithChildren) {
  return (
    <p className="bg-red-500 text-white uppercase text-center p-2">
        {children}
    </p>
  )
}
