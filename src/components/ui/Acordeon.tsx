import {
  Children,
  PropsWithChildren,
  useEffect,
  useRef,
  useState,
} from "react";
import { SlArrowDown, SlClose } from "react-icons/sl";
import autoAnimate from "@formkit/auto-animate";

interface AcordeonProps extends PropsWithChildren {
  nombreVendedor: string;
}

export const Acordeon = ({
  nombreVendedor,
  children,
}: AcordeonProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenMMG = () => {
    setIsOpen(!isOpen);
  };
  const vendedor = useRef(null);

  useEffect(() => {
    vendedor.current &&
      autoAnimate(vendedor.current, { duration: 200 });
  }, [vendedor]);

  return (
    <div className="flex flex-col mb-2" ref={vendedor}>
      <div
        className="bg-[#B8E8FC] rounded-md flex justify-between p-2 items-center mb-2"
        onClick={handleOpenMMG}
      >
        <h2 className="p-1">{nombreVendedor}</h2>
        <span className="block pr-2 transition-all">
          {isOpen ? <SlClose /> : <SlArrowDown />}
        </span>
      </div>

      {isOpen && children}
    </div>
  );
};
