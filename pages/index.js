import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { css, useTheme } from "@emotion/react";

import { Box, Typography, Image, Button } from "../components/library";
import { useSome } from "components/Providers/SomeProvider";
import Layout from "components/Layout";

export default function Home() {
  const theme = useTheme();
  const [divDisplay, setDivDisplay] = useState(true);
  const { state, dispatch } = useSome();

  return (
    <Layout title="Page Title">
      {/* 
      initial prop defines the intial properties of component i.e. when it enters the screen   
      animate prop defines the final properties of component

      By properties of component, we mean it's position, opacity, rotation and other such properties

      Eg: initial x: 700 means the component will be 700px away from where it is placed on the dom and 
      animate x:100 means the component will travel from 700->100 and will be placed 100px away from where it should have been 

      we can control the animation duration,delay and other properties in the transition object
      for each prop or as a common settings for all props in transition prop 

      reference -> https://www.framer.com/api/motion/
      */}
      <Box
        css={css`
          background: url(/public/images/logo.svg);
          border: 2px solid black;
        `}
        maxWidth="200px"
        as={motion.h1}
        color="primary"
        initial={{ x: 700 /* pixels*/ }}
        animate={{
          x: 100,
          transition: {
            delay: 2 /* seconds*/,
          },
        }}
      >
        This is index
      </Box>

      <Box
      css={css`
          border: 2px solid black;
        `}
        maxWidth="200px"
        as={motion.h1}
        color="primary"
        initial={{ x: 700 }}
        animate={{
          x: 0,
        }}
        transition={{
          duration: 2,
        }}
      >
        This is index
      </Box>

      {/* If some component is leaving the dom and we want to provide exit animation, 
      we can use the exit prop but we also have to wrap it in <AnimatePresence></AnimatePresence> 
      In the exit prop we define the properties of the component just before it leaves the dom
      */}

      <AnimatePresence>
        {divDisplay && (
          <motion.div
            maxWidth="300px"
            initial={{ x: 700, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ duration: 2 }}
            css={css`
              font-size: 60px;
              color: ${theme.colors.primary};
              border:2px solid black;
            `}
          >
            This is from css emotion
          </motion.div>
        )}
      </AnimatePresence>

      <Button onClick={() => setDivDisplay((prev) => !prev)}>
        {divDisplay ? "Hide" : "Show"}
      </Button>

      <Box
        as={motion.div}
        layoutId="something"
        width="300px"
        height="300px"
        bg="primary"
        css={css`
          border: 2px solid black;
        `}
      />

      <Link href="/dashboard">
        <a>Dashboard</a>
      </Link>
      <Box width={[1, 1 / 2]} padding={[2, 3]} marginBottom={[3, 4]} border="1px solid" />
    </Layout>
  );
}
