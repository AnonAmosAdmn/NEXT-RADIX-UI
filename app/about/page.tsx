"use client";

import { Box, Heading, Text, Avatar, Flex, Card } from "@radix-ui/themes";
import React from "react";

export default function AboutPage() {
  return (
    <Box position="relative" width="100%" height="100vh">
      <Flex
        direction="column"
        align="center"
        justify="center"
        position="absolute"
        top="0"
        left="0"
        width="100%"
        height="100%"
        px="4"
      >
        <Card
          size="4"
          style={{
            maxWidth: "600px",
            width: "100%",
            backdropFilter: "blur(4px)",
            backgroundColor: "rgba(0, 0, 0, 0.4)",
          }}
        >
          <Flex direction="column" gap="4" align="center">
            <Avatar
              fallback="JD"
              size="6"
              src="https://randomuser.me/api/portraits/men/75.jpg"
              radius="full"
            />
            <Heading size="5">Jordan Doe</Heading>
            <Text color="gray">Full Stack Developer · Tech Enthusiast · Pixel Pusher</Text>
            <Text>
              Hey there! I&apos;m Jordan, a full-stack developer with a passion for building sleek,
              scalable web experiences. I love working with React, TypeScript, and everything in
              between. When I&apos;m not coding, you can catch me exploring hiking trails or leveling up
              in strategy games.
            </Text>
            <Text>
              🚀 Always up for new projects, collaborations, or just talking tech. Hit me up!
            </Text>
          </Flex>
        </Card>
      </Flex>
    </Box>
  );
}
