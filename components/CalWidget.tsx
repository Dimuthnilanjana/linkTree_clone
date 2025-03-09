// "use client"; // Ensure it's a client-side component
// import InlineWidget from "@calcom/embed-react";

// const CalWidget = () => {
//   return (
//     <div className="flex justify-center items-center min-h-screen">
//       <InlineWidget 
//         calLink="https://cal.com/dimuth-nilanjana-ibty0q"
//         style={{ height: "600px", width: "100%" }}
//       />
//     </div>
//   );
// };

// export default CalWidget;

import InlineWidget from "@calcom/embed-react";

"use client"; // Ensure this runs in the browser

const CalWidget = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <iframe
        src="https://cal.com/dimuth-nilanjana-ibty0q" // Replace with your actual Cal.com link
        style={{ width: "100%", height: "400px", border: "none" }}
        allowFullScreen
      />
    </div>
  );
};

export default CalWidget;

