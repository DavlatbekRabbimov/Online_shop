/*phone caller logic */
// i0mport React from 'react';
// import axios from "axios";
// import qs from 'qs';
//
// export const PhoneCallerWindow = () => {
//
//     const toNumber = '+99890000000'
//
//     const clickCaller = async () => {
//         const data = qs.stringify({toNumber: toNumber});
//
//         await axios.post('http://localhost:8383/api/call', data, {
//             headers: {
//                 'Content-Type': 'application/x-www-form-urlencoded'
//             }
//         })
//             .then(response => console.log(response.data))
//             .catch((error) => {
//                 console.error('Error:', error);
//             });
//     }
//
//     const handleIncomingCall = async (fromNumber, toNumber, conversationUuid) => {
//         const data = qs.stringify({fromNumber: fromNumber, toNumber: toNumber, conversationUuid: conversationUuid});
//
//         await axios.post('http://localhost:8383/api/incoming-call', data, {
//             headers: {
//                 'Content-Type': 'application/x-www-form-urlencoded'
//             }
//         })
//             .then(response => console.log(response.data))
//             .catch((error) => {
//                 console.error('Error:', error);
//             });
//     }
//
//     return (
//         <div className={`absolute top-[300px] left-[250px] w-2/3 h-size-categories-slider rounded-lg
//      bg-white z-0`}>
//             <div className={`flex flex-col justify-center items-center w-full h-full`}>
//                 <button
//                     className={`w-[100px] h-[50px] bg-green-800 hover:bg-green-600 text-white text-[25px] rounded-lg`}
//                     onClick={clickCaller}
//                 >
//                     Caller
//                 </button>
//                 <button
//                     className={`w-[100px] h-[50px] bg-blue-800 hover:bg-blue-600 text-white text-[25px] rounded-lg`}
//                     onClick={() => handleIncomingCall('+9989000000', '+99890000000', 'conversationUuid')}
//                 >
//                     Handle Incoming Call
//                 </button>
//             </div>
//         </div>
//     );
// }
