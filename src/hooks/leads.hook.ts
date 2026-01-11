"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

import {
  createDish,
  IPROPS as CreateDishIPROPS,
} from "@/actions/menu/create.action";

import {
  updateDish,
  IPROPS as UpdateDishIPROPS,
} from "@/actions/menu/update.action";

import {
  deleteDish,
  IPROPS as DeleteDishIPROPS,
} from "@/actions/menu/delete.action";

import {
  toggleStatus,
  IPROPS as ToggleStatusIPROPS,
} from "@/actions/menu/activation.action";

export const useCreateDish = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: async (data: CreateDishIPROPS) => {
      return await createDish(data);
    },
    onSuccess: (res) => {
      if (res.success) {
        queryClient.invalidateQueries({
          queryKey: ["menu"],
        });
        toast.success(res.message);
      } else {
        toast.error(res.message);
      }
    },
    onError: () => {
      toast.error("Failed to create dish");
    },
  });

  return mutation;
};

export const useUpdateDish = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: async (data: UpdateDishIPROPS) => {
      return await updateDish(data);
    },
    onSuccess: (res) => {
      if (res.success) {
        queryClient.invalidateQueries({
          queryKey: ["menu"],
        });
        toast.success(res.message);
      } else {
        toast.error(res.message);
      }
    },
    onError: () => {
      toast.error("Failed to update dish");
    },
  });

  return mutation;
};

export const useDeleteDish = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: async (data: DeleteDishIPROPS) => {
      return await deleteDish(data);
    },
    onSuccess: (res) => {
      if (res.success) {
        queryClient.invalidateQueries({
          queryKey: ["menu"],
        });
        toast.success(res.message);
      } else {
        toast.error(res.message);
      }
    },
    onError: () => {
      toast.error("Failed to delete dish");
    },
  });

  return mutation;
};

export const useToggleActivationDish = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: async (data: ToggleStatusIPROPS) => {
      return await toggleStatus(data);
    },
    onSuccess: (res) => {
      if (res.success) {
        queryClient.invalidateQueries({
          queryKey: ["menu"],
        });
        toast.success(res.message);
      } else {
        toast.error(res.message);
      }
    },
    onError: () => {
      toast.error("Failed to update activation status");
    },
  });

  return mutation;
};
