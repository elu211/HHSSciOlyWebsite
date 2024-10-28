// // components/CustomModal.tsx
// import { Dialog, Transition } from '@headlessui/react';
// import { Fragment } from 'react';
// import React from "react";

// type CustomModalProps = {
//   isOpen: boolean;
//   closeModal: () => void;
//   title: string;
//   content: string;
//   imageUrl: string;
// };

// const Modal: React.FC<CustomModalProps> = ({ isOpen, closeModal, title, content, imageUrl }) => {
//   return (
//     <Transition show={isOpen} as={Fragment}>
//       <Dialog as="div" className="relative z-10" onClose={closeModal}>
//         <Transition.Child
//           as={Fragment}
//           enter="ease-out duration-300"
//           enterFrom="opacity-0"
//           enterTo="opacity-100"
//           leave="ease-in duration-200"
//           leaveFrom="opacity-100"
//           leaveTo="opacity-0"
//         >
//           <div className="fixed inset-0 bg-black bg-opacity-50" />
//         </Transition.Child>

//         <div className="fixed inset-0 overflow-y-auto">
//           <div className="flex items-center justify-center min-h-full p-4 text-center">
//             <Transition.Child
//               as={Fragment}
//               enter="ease-out duration-300"
//               enterFrom="opacity-0 scale-95"
//               enterTo="opacity-100 scale-100"
//               leave="ease-in duration-200"
//               leaveFrom="opacity-100 scale-100"
//               leaveTo="opacity-0 scale-95"
//             >
//               <Dialog.Panel className="w-full max-w-md p-6 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
//                 <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900">
//                   {title}
//                 </Dialog.Title>
//                 <div className="mt-2">
//                   <p className="text-sm text-gray-500">
//                     {content}
//                   </p>
//                   <img src={imageUrl} alt={title} className="mt-4" />
//                 </div>

//                 <div className="mt-4">
//                   <button
//                     type="button"
//                     className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-blue-500 border border-transparent rounded-md hover:bg-blue-600"
//                     onClick={closeModal}
//                   >
//                     Closew
//                   </button>
//                 </div>
//               </Dialog.Panel>
//             </Transition.Child>
//           </div>
//         </div>
//       </Dialog>
//     </Transition>
//   );
// };

// export default Modal;
