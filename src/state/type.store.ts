import { functionType } from "@/utils/constants/function_type.enum";
import { create } from "zustand";

interface TypeStoreProps {
  type: string;
  changeType: (newType: string) => void;
}

export const useTypeStore = create<TypeStoreProps>((set) => ({
  type: functionType.ACCELERATION,
  changeType: (newType: string) => set(() => ({ type: newType })),
}));
