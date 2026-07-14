import { RiNumber2 } from "react-icons/ri";
import Container from "/src/components/common/Container";
import Flex from "/src/components/common/Flex";
import { TbTruckDelivery } from "react-icons/tb";
import { TbReload } from "react-icons/tb";

const Policy = () => {
  return (
    <div className="py-4 border-b-2 border-[#F0F0F0]">
        <Container>
            <Flex className="justify-between">
                <div className="flex items-center gap-x-2">
            <RiNumber2 /> <p>Two years warranty</p>
            </div>
                <div className="flex items-center gap-x-2">
            <TbTruckDelivery /> <p>Free shipping</p>
            </div>
                <div className="flex items-center gap-x-2">
            <TbReload /> <p>Return policy in 30 days</p>
            </div>
            </Flex>
        </Container>
    </div>
  )
}

export default Policy