import type { MetaFunction } from "@remix-run/node";

import { Header } from "../components/Header";
import Landing from "~/pages/Landing";

export const meta: MetaFunction = () => {
  return [
    { title: "slidetree" },
    { name: "description", content: "welcome to slidetree" },
  ];
};

export default function Index() {
  return (
    <>
    <div className="mx-auto flex h-screen max-w-6xl flex-col">
      <Header />
      <Landing />
    </div>
    </>
  );
}
