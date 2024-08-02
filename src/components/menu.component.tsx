import { useTypeStore } from "@/state/type.store";
import { FunctionType } from "@/utils/constants/function_type.enum";
import clsx from "clsx";

interface HeaderProps {
  items: FunctionType[];
}

export function MenuComponent({ items }: HeaderProps) {
  const { type, changeType } = useTypeStore((state) => state);

  function handleClick(index: string) {
    changeType(index);
  }

  return (
    <div className="w-full py-2 px-10 hidden lg:flex flex-row flex-wrap gap-4 items-center justify-center bg-zinc-100">
      {items.map((item) => (
        <button
          key={item.index}
          type="button"
          onClick={() => handleClick(item.index)}
          className={clsx(
            item.index == type && "bg-white shadow-sm shadow-zinc-200",
            "rounded-md min-w-30 px-4 py-2 flex items-center justify-center"
          )}
        >
          <span
            className={clsx(
              item.index == type ? "text-zinc-900" : "text-zinc-500",
              "font-medium text-sm"
            )}
          >
            {item.value}
          </span>
        </button>
      ))}
    </div>
  );
}
