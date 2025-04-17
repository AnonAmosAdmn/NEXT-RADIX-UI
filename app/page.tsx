// app/page.tsx
import { Box, Heading, Text, Flex, Link as RadixLink, IconButton } from "@radix-ui/themes";
import { GitHubLogoIcon, LinkedInLogoIcon, TwitterLogoIcon } from "@radix-ui/react-icons";
import React from "react";

export default function Home() {
  return (
    <Box position="relative" width="100%" height="100vh">
      <Flex direction="column" align="center" justify="center" height="100vh" gap="4">
        <Heading size="9" as="h1">
          Welcome to my <Text color="blue">Portfolio</Text>
        </Heading>

        <Text size="5" color="gold">
          I&apos;m a software developer with a passion for building innovative and user-friendly applications.
        </Text>

        <Flex gap="4" mt="6">
          <RadixLink href="https://github.com/your-username" target="_blank">
            <IconButton variant="outline" size="3">
              <GitHubLogoIcon />
            </IconButton>
          </RadixLink>

          <RadixLink href="https://www.linkedin.com/in/your-linkedin-profile/" target="_blank">
            <IconButton variant="outline" size="3">
              <LinkedInLogoIcon />
            </IconButton>
          </RadixLink>

          <RadixLink href="https://www.twitter.com/your-twitter-profile/" target="_blank">
            <IconButton variant="outline" size="3">
              <TwitterLogoIcon />
            </IconButton>
          </RadixLink>
        </Flex>
      </Flex>
    </Box>
  );
}
