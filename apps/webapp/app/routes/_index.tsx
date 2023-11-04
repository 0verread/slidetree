import type { MetaFunction } from "@remix-run/node";

import { Header } from "../components/Header";

export const meta: MetaFunction = () => {
  return [
    { title: "slidetree" },
    { name: "description", content: "welcome to slidetree" },
  ];
};

export default function Index() {
  return (
    <>
      <Header />
    </>
  );
}
