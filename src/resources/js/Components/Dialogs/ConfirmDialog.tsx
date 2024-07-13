import { useEffect, useRef } from "react";

interface Props {
     title?: string;
     message?: string;
     open: boolean;
     onConfirm: () => void;
     onCancel: () => void;
}

export default function ConfirmDialog({
     title,
     onConfirm,
     message,
     onCancel,
     open,
}: Props) {
     const dialogRef = useRef<HTMLDivElement>(null);

     const handleKeyDown = (event: KeyboardEvent) => {
          if (event.key === "Escape") {
               onCancel();
          }
          if (event.key === "Enter") {
               onConfirm();
          }
     };

     useEffect(() => {
          if (open && dialogRef.current) {
               dialogRef.current.focus();
               dialogRef.current.addEventListener("keydown", handleKeyDown);
          }

          return () => {
               if (dialogRef.current) {
                    dialogRef.current.removeEventListener(
                         "keydown",
                         handleKeyDown
                    );
               }
          };
     }, [open]);

     return (
          <>
               {open && (
                    <div className="fixed inset-0 flex overflow-y-auto px-4 py-6 sm:px-0 items-center z-50 transform transition-all">
                         <div
                              onClick={onCancel}
                              className="absolute flex z-50 inset-0 justify-center items-center bg-gray-500/75"
                         >
                              <div
                                   ref={dialogRef}
                                   onClick={(e) => e.stopPropagation()}
                                   tabIndex={-1}
                                   aria-hidden="true"
                                   className="focus:outline-none overflow-y-auto overflow-x-hidden rounded-lg z-50"
                              >
                                   <div className="relative p-4 w-full max-w-2xl max-h-full">
                                        <div className="relative bg-white rounded-lg shadow">
                                             <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t">
                                                  <h3 className="text-xl font-semibold text-gray-900">
                                                       {title}
                                                  </h3>
                                                  <button
                                                       onClick={onCancel}
                                                       type="button"
                                                       className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center"
                                                  >
                                                       <svg
                                                            className="w-3 h-3"
                                                            aria-hidden="true"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            fill="none"
                                                            viewBox="0 0 14 14"
                                                       >
                                                            <path
                                                                 stroke="currentColor"
                                                                 strokeLinecap="round"
                                                                 strokeLinejoin="round"
                                                                 strokeWidth="2"
                                                                 d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                                                            />
                                                       </svg>
                                                       <span className="sr-only">
                                                            Close modal
                                                       </span>
                                                  </button>
                                             </div>
                                             <div className="p-4 md:p-5 space-y-4">
                                                  <p className="text-base leading-relaxed text-gray-500">
                                                       {message}
                                                  </p>
                                             </div>
                                             <div className="flex justify-end items-center p-4 md:p-5 border-t border-gray-200 rounded-b">
                                                  <button
                                                       onClick={onCancel}
                                                       type="button"
                                                       className="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700"
                                                  >
                                                       Annuler
                                                  </button>
                                                  <button
                                                       onClick={onConfirm}
                                                       type="button"
                                                       className="text-white py-2.5 px-5 ms-3 bg-red-600 hover:bg-red-800  font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center"
                                                  >
                                                       Valider
                                                  </button>
                                             </div>
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </div>
               )}
          </>
     );
}
