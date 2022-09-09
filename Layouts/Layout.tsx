import { PropsWithChildren } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function Layout({ children }: PropsWithChildren<any>) {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
