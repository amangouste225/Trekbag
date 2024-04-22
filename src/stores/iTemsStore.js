import { create } from "zustand";

import { initialValues } from "../lib/constants";
import { persist } from "zustand/middleware";

export const useItemsStore = create(
  persist(
    (set) => ({
      items: initialValues,
      removeAll: () => {
        set(() => ({ items: [] }));
      },
      addItem: (newItemtext) => {
        const newItem = {
          id: Date.now(),
          name: newItemtext,
          packed: false,
        };
        set((state) => ({ items: [...state.items, newItem] }));
      },
      markAsInCompleteAll: () => {
        set((state) => {
          const newItems = state.items.map((item) => {
            return { ...item, packed: false };
          });
          return { items: newItems };
        });
      },
      markAsCompleteAll: () => {
        set((state) => {
          const newItems = state.items.map((item) => {
            return { ...item, packed: true };
          });
          return { items: newItems };
        });
      },
      handleDelete: (id) => {
        set((state) => {
          const newItems = state.items.filter((item) => item.id !== id);
          return { items: newItems };
        });
      },
      handleCheck: (id) => {
        set((state) => {
          const newItems = state.items.map((item) => {
            if (item.id === id) {
              return {
                ...item,
                packed: !item.packed,
              };
            }
            return item;
          });
          return { items: newItems };
        });
      },
      resetToInitial: () => {
        set(() => ({ items: initialValues }));
      },
    }),
    {
      name: "items",
    }
  )
);
