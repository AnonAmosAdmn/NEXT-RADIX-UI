"use client";

import { Box, Heading, Text, Flex, Card } from "@radix-ui/themes";
import React from "react";

export default function ContactPage() {
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
            <Heading size="5">Get in Touch</Heading>
            <Text color="gray">
              I&apos;d love to hear from you — reach out anytime.
            </Text>
            <Flex direction="column" gap="4" align="center" width="100%" mt="2">
              <Text>
                📧 <strong>Email:</strong> contact@jordandoe.dev
              </Text>
              <Text>
                📞 <strong>Phone:</strong> +1 (555) 123-4567
              </Text>
              <Text>
                📍 <strong>Location:</strong> Galaxy City, Cosmos 90000
              </Text>
            </Flex>
            <Text mt="4">
              Whether it&apos;s a project idea, collaboration, or just saying hi — feel free to drop a line.
            </Text>
          </Flex>
        </Card>
      </Flex>
    </Box>
  );
}
