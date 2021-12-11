import { Wrap, WrapItem, Center } from "@chakra-ui/react";
//빨간줄 없애기~

export default function KakaoMapPage() {
  return (
    <Wrap>
      <WrapItem>
        <Center w="180px" h="80px" bg="red.200">
          Box 1
        </Center>
      </WrapItem>
      <WrapItem>
        <Center w="180px" h="80px" bg="green.200">
          Box 2
        </Center>
      </WrapItem>
      <WrapItem>
        <Center w="180px" h="80px" bg="tomato">
          Box 3
        </Center>
      </WrapItem>
      <WrapItem>
        <Center w="180px" h="80px" bg="blue.200">
          Box 4
        </Center>
      </WrapItem>
    </Wrap>
  );
}
