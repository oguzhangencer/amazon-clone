import footer from "../data/footer.json";
import { useWindowScroll } from "@mantine/hooks";
import amazonServices from "../data/amazonServices.json";
import { Button, Text, Group } from "@mantine/core";

export default function Footer() {
  const [scroll, scrollTo] = useWindowScroll();

  return (
    <div className="absolute inset-x-0 bottom-0 flex flex-col">
      {/* Amazon Footer */}
      <div className="bg-slate-700 hover:bg-slate-600 flex items-center justify-center scroll-auto">
        <Group position="center">
          <Button className="text-white" onClick={() => scrollTo({ y: 0 })}>
            Back to top
          </Button>
        </Group>
      </div>
      <div className="bg-slate-800 h-96 flex justify-center gap-x-12 ">
        {footer?.map((item) => (
          <div className="flex flex-col text-white my-10 ">
            <Text className="text-lg  font-bold ">{item?.title}</Text>
            <div className="flex flex-col gap-y-1">
              {item?.items?.map((item) => (
                <Text className="text-sm font-thin">{item}</Text>
              ))}
            </div>
          </div>
        ))}
      </div>
      <hr className="bg-slate-700" />
      <div className="bg-slate-800"></div>
      {/* Description Footer */}
      <div className="bg-gray-900 h-96 grid grid-cols-7 items-center py-5 px-500px">
        {amazonServices?.map((item) => (
          <div className="flex flex-col justify-center text-slate-300 hover:underline ">
            <Text className="text-xs font-bold">{item?.title}</Text>
            <div className="flex flex-col ">
              <Text className="text-xs font-thin ">{item.description}</Text>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
