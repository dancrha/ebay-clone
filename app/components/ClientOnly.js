"use client";

import { useEffect, useState } from "react";

const ClientOnly = ({ children }) => {
  const [isClient, setIsClient] = useState(false);
  useEffect(() => setIsClient(true));

  return <> {isClient ? <div>{children}</div> : null} </>;
};

export default ClientOnly;
