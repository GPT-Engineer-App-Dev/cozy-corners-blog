import { Box, Container, Flex, Heading, Text, VStack, HStack, Link, IconButton, Divider } from "@chakra-ui/react";
import { FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      {/* Navigation Bar */}
      <Flex as="nav" bg="blue.700" color="white" p={4} justifyContent="space-between" alignItems="center">
        <Heading as="h1" size="lg">My Blog</Heading>
        <HStack spacing={8}>
          <Link href="#home" _hover={{ textDecoration: "none", color: "blue.300" }}>Home</Link>
          <Link href="#about" _hover={{ textDecoration: "none", color: "blue.300" }}>About</Link>
          <Link href="#contact" _hover={{ textDecoration: "none", color: "blue.300" }}>Contact</Link>
        </HStack>
      </Flex>

      {/* Main Content */}
      <Flex direction={{ base: "column", md: "row" }} mt={8} px={4}>
        {/* Blog Posts Section */}
        <Box flex="3" mr={{ md: 8 }}>
          <Heading as="h2" size="xl" mb={4}>Blog Posts</Heading>
          <Box mb={8}>
            <Heading as="h3" size="lg">First Blog Post</Heading>
            <Text mt={2}>This is the content of the first blog post. It's a great post that talks about many interesting things.</Text>
          </Box>
          <Box mb={8}>
            <Heading as="h3" size="lg">Second Blog Post</Heading>
            <Text mt={2}>This is the content of the second blog post. It's another great post that talks about even more interesting things.</Text>
          </Box>
        </Box>

        {/* Sidebar */}
        <Box flex="1" mt={{ base: 8, md: 0 }}>
          <Heading as="h2" size="lg" mb={4}>Recent Posts</Heading>
          <VStack align="start" spacing={4}>
            <Link href="#post1" _hover={{ textDecoration: "none", color: "blue.500" }}>First Blog Post</Link>
            <Link href="#post2" _hover={{ textDecoration: "none", color: "blue.500" }}>Second Blog Post</Link>
          </VStack>
        </Box>
      </Flex>

      {/* Footer */}
      <Divider mt={8} />
      <Flex as="footer" bg="blue.700" color="white" p={4} justifyContent="center" alignItems="center" mt={8}>
        <HStack spacing={4}>
          <IconButton as="a" href="https://twitter.com" aria-label="Twitter" icon={<FaTwitter />} />
          <IconButton as="a" href="https://facebook.com" aria-label="Facebook" icon={<FaFacebook />} />
          <IconButton as="a" href="https://instagram.com" aria-label="Instagram" icon={<FaInstagram />} />
        </HStack>
      </Flex>
    </Container>
  );
};

export default Index;