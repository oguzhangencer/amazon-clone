import { Container } from "@mantine/core";
import Products from "./Products";

export default function Home() {
  return (
    <div className="bg-gray-300 ">
      <Container>
        <Products />
      </Container>
    </div>
  );
}
