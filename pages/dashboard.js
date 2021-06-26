import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Box, Typography, Image, Button } from "../components/library";

const Dashboard = () => {
  return (
    <Box>
      <Box
        m="5rem"
        as={motion.div}
        layoutId="something"
        width="20px"
        height="400px"
        bg="primary"
      />
      <h1>This is dashboard</h1>
    </Box>
  );
};

export default Dashboard;
