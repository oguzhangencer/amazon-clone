import { Container } from "@mantine/core";
import Products from "./Products";

export default function Home() {
  return (
    <>
      <Container className="md:container md:mx-auto">
        <Products />
      </Container>
    </>
  );
}
