import "@css/header.scss";
import ApplicationLogo from "@components/ApplicationLogo";
import { Link } from "@inertiajs/react";
import Dropdown from "@components/Dropdown";

export default function Header({ ...props }) {
     const urls = ["/", "/tariffs", "/availability", "/contact"];
     const texts = ["welcome", "tariffs", "availability", "contact"];

     const currentRoute = window.location.pathname;
     const classOtherPages =
          "block py-2 px-3 lg:p-0  text-white rounded uppercase  hover:bg-gray-100 lg:hover:bg-transparent hover:text-red_primary duration-500 transition-all";
     const classCurrentPage =
          "lg:font-[Courbe] capitalize lg:hover:bg-transparent sm:hover:bg-gray-100 block py-2 px-3 text-gold_primary  rounded lg:bg-transparent hover:text-red_primary duration-500 transition-all lg:p-0  ";

     const event = () => {
          let div = document.getElementsByClassName("menu-icon")[0];
          // for (let item of div.getElementsByTagName("div")) {
          //      item.classList.remove("no-animation");
          // }
          div.classList.toggle("active");
     };

     return (
          <header>
               <nav className=" bg-black fixed z-20 w-full border-b-[1px] border-[#111111]">
                    <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                         <Link
                              href="/"
                              className="flex items-center space-x-3 "
                         >
                              <ApplicationLogo
                                   black={false}
                                   className="h-16"
                              ></ApplicationLogo>
                         </Link>

                         <div className=" items-center justify-between hidden w-full lg:flex lg:w-auto lg:order-1">
                              <ul className="flex bg-transparent flex-col font-medium p-4 lg:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 lg:space-x-8 lg:flex-row lg:mt-0 lg:border-0 ">
                                   {urls.map((url, index) => (
                                        <li key={url}>
                                             <Link
                                                  href="."
                                                  preserveScroll
                                                  className={
                                                       currentRoute === url
                                                            ? classCurrentPage
                                                            : classOtherPages
                                                  }
                                             ></Link>
                                        </li>
                                   ))}
                              </ul>
                         </div>

                         <div className="flex items-center lg:order-2 space-x-1 lg:space-x-0 rtl:space-x-reverse">
                              <Dropdown>
                                   <Dropdown.Trigger
                                        additionnalActionOnClose={event}
                                   >
                                        <button
                                             onClick={event}
                                             id="header-menu-icon"
                                             className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
                                        >
                                             <span className="sr-only">
                                                  Open main menu
                                             </span>
                                             <div className="menu-icon h-full w-full self-center justify-self-end">
                                                  <div className="square_1 no-animation bg-white"></div>
                                                  <div className="square_2 no-animation bg-white"></div>
                                                  <div className="square_3 no-animation bg-white"></div>
                                             </div>
                                        </button>
                                   </Dropdown.Trigger>
                                   <Dropdown.Content>
                                        <div className="items-center justify-between w-full lg:flex lg:w-auto lg:order-1">
                                             <ul className="flex bg-black flex-col font-medium p-4 lg:p-0 mt-4 border border-gray-100 rounded-lg  lg:space-x-8 lg:flex-row lg:mt-0 lg:border-0 ">
                                                  {urls.map((url, index) => (
                                                       <li key={url}>
                                                            {currentRoute ===
                                                            url ? (
                                                                 <Link
                                                                      href={url}
                                                                      className="lg:font-[Courbe] lg:hover:bg-transparent sm:hover:bg-gray-100 lg:normal-case block sm:uppercase py-2 px-3 text-gold_primary  rounded lg:bg-transparent hover:text-red_primary duration-500 transition-all lg:p-0  "
                                                                      aria-current="page"
                                                                 >
                                                                      {
                                                                           texts[
                                                                                index
                                                                           ]
                                                                      }
                                                                 </Link>
                                                            ) : (
                                                                 <Link
                                                                      href={url}
                                                                      className="block py-2 px-3 lg:p-0  text-white rounded uppercase  hover:bg-gray-100 lg:hover:bg-transparent hover:text-red_primary duration-500 transition-all"
                                                                 >
                                                                      {
                                                                           texts[
                                                                                index
                                                                           ]
                                                                      }
                                                                 </Link>
                                                            )}
                                                       </li>
                                                  ))}
                                             </ul>
                                        </div>
                                   </Dropdown.Content>
                              </Dropdown>
                         </div>
                    </div>
               </nav>
          </header>
     );
}
