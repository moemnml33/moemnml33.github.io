import { CheckCircleIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { Typography } from "@material-tailwind/react";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";

export default function AlertSuccess({ show }) {
  const [open, setOpen] = useState(show);

  useEffect(() => {
    if (show) {
      setOpen(true);
      const timer = setTimeout(() => setOpen(false), 10000); // Auto-hide after 5 seconds
      return () => clearTimeout(timer);
    }
  }, [show]);

  return (
    <motion.div
      className={`p-4 rounded-xl sm:max-w-lg lg:max-w-screen-md mx-auto fixed top-16 left-0 right-0 bg-green-200 shadow-lg flex items-center`}
      initial={{ opacity: 0 }}
      animate={{ opacity: open ? 1 : 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Message and Check icon container */}
      <div className="flex flex-1 space-x-3">
        <CheckCircleIcon className="h-7 w-7 text-green-900" />
        <div>
          <Typography variant="h5" className="text-green-900">
            Message Sent!
          </Typography>
          <Typography className="mt-2 text-green-600 text-lg">
            Thank you for reaching out! I will get back to you as soon as
            possible :)
          </Typography>
        </div>
      </div>

      {/* Close button */}
      <div className="absolute top-3 right-2">
        <button
          className="text-green-800 hover:text-green-600"
          onClick={() => setOpen(false)}
        >
          <XMarkIcon className="h-6 w-6" />
        </button>
      </div>
    </motion.div>
  );
}
