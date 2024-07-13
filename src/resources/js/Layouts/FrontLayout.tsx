import Footer from "./Footer";
import Header from "./Header";
import { ReactNode } from "react";

interface Props {
     children: ReactNode;
}

export default function FrontLayout({ children }: Props) {
     return (
          <div className="bg-black ">
               <Header />
               <main className="text-white pt-[96px] w-full">{children}</main>
               <Footer />
          </div>
     );
}
