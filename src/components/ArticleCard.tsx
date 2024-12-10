import { Box, Image, Stack, Heading, Text, Button } from "@chakra-ui/react";
import { IArticle } from "../interfaces";
import { NavLink } from "react-router-dom";

const ArticleCard = ({ article }: { article: IArticle }) => (
  <Box
    key={article.id}
    bg="transparent"
    border="1px solid #a8b5c8"
    mx="auto"
    maxW="250px"
    p="4"
    borderRadius="md"
    boxShadow="md"
  >
    <Box textAlign="center">
      <Image
        src={`http://localhost:1337/${article.thumbnail.url}`}
        alt={article.title}
        boxSize="150px"
        rounded="full"
        mx="auto"
      />
    </Box>
    <Stack mt="4">
      <Heading textAlign="center" size="md">
        {article.title}
      </Heading>
      <Text fontSize="sm" textAlign="center">
        This sofa is perfect for modern tropical spaces, baroque-inspired
        spaces, earthy tones.
      </Text>
      <Button
        as={NavLink}
        color="white"
        bg="#9f7aea"
        _hover={{
          bg: "purple.800",
          color: "black",
        }}
        fontSize="lg"
        mt="2"
      >
        View Details
      </Button>
    </Stack>
  </Box>
);

export default ArticleCard;
