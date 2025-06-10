// import { useEffect } from "react";
// import { motion } from "framer-motion";

// const SplashScreen = ({ onFinish }) => {
//   useEffect(() => {
//     const timer = setTimeout(onFinish, 3000);
//     return () => clearTimeout(timer);
//   }, [onFinish]);

//   const hexagonPath =
//     "M50 5 L93 27.5 L93 72.5 L50 95 L7 72.5 L7 27.5 Z";

//   return (
//     <div className="fixed inset-0 flex items-center justify-center bg-[#0a192f] z-50">
//       <svg width="200" height="200" viewBox="0 0 100 100">
//         <motion.path
//           d={hexagonPath}
//           fill="none"
//           stroke="#fff"
//           strokeWidth="3"
//           initial={{ pathLength: 0 }}
//           animate={{ pathLength: 1 }}
//           transition={{ duration: 2, ease: "easeInOut" }}
//         />
//         <text
//           x="50"
//           y="58"
//           textAnchor="middle"
//           fill="white"
//           fontSize="30"
//           fontWeight="bold"
//           fontFamily="Arial, sans-serif"
//         >
//           A
//         </text>
//       </svg>
//     </div>
//   );
// };

// export default SplashScreen;






import { useEffect } from "react";
import { motion } from "framer-motion";

const SplashScreen = ({ onFinish }) => {
  useEffect(() => {
    const timer = setTimeout(onFinish, 3000);
    return () => clearTimeout(timer);
  }, [onFinish]);

  const hexagonPath =
    "M50 5 L93 27.5 L93 72.5 L50 95 L7 72.5 L7 27.5 Z";

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-[#0a192f] z-50">
      <svg width="200" height="200" viewBox="0 0 100 100">
        <motion.path
          d={hexagonPath}
          fill="none"
          stroke="#38bdf8"       // Light blue stroke
          strokeWidth="3"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, ease: "easeInOut" }}
        />
        <text
          x="50"
          y="58"
          textAnchor="middle"
          fill="white"
          fontSize="30"
          fontWeight="bold"
          fontFamily="Arial, sans-serif"
        >
          A
        </text>
      </svg>
    </div>
  );
};

export default SplashScreen;

