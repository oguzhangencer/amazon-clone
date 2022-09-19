import { CartContext } from "../context/CartContext";
import { IconStar } from "@tabler/icons";
import { Card, Image, Text, Badge, Button } from "@mantine/core";
import { useContext } from "react";
import { Product } from "../interfaces/interface";

interface Props {
  id: string;
  imgUrl: string;
  name: string;
  price: string;
  rating: string;
  product: Product;
}

export const ProductCart = ({
  imgUrl,
  name,
  price,
  product,
  id,
  rating,
}: Props) => {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="grid grid-cols-4 gap-x-10 gap-y-10 py-10 ">
      <div className="flex items-center">
        <Card
          className="drop-shadow-md flex flex-col items-center justify-center"
          p="lg"
          radius="md"
          withBorder
        >
          <Card.Section>
            <Image src={imgUrl} height="auto" />
          </Card.Section>

          <div className="mt-auto flex flex-col gap-y-2">
            <Text className="text-lg" weight={500}>
              {name}
            </Text>
            <Badge color="pink" variant="light">
              Include Stock
            </Badge>

            <div className="flex items-center justify-between">
              <Text className="text-black text-2xl font-mono">${price}</Text>
              <div className="flex items-center justify-center space-x-1">
                <IconStar />
                <Text className="">{rating}</Text>
              </div>
            </div>

            <Button
              onClick={() => addToCart(product)}
              className="mb-1"
              variant="light"
              color="orange"
              radius="xl"
              size="lg"
            >
              BUY
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
};
