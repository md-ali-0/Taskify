import { Task, TQueryParam, TResponseRedux } from "@/types";
import { baseApi } from "../../api/baseApi";

const taskApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getAllTasks: builder.query({
            query: (args) => {
                const params = new URLSearchParams();
                if (args) {
                    args.forEach((item: TQueryParam) => {
                        if (item.value !== undefined) {
                            params.append(item.name, item.value as string);
                        }
                    });
                }
                return {
                    url: `/tasks`,
                    params: params,
                };
            },
            transformResponse: (response: TResponseRedux<Task[]>) => {
                return {
                    data: response.data,
                    meta: response.meta,
                };
            },
            providesTags: ["tasks"],
        }),
        getSingleTask: builder.query({
            query: (id) => {
                return {
                    url: `/tasks/${id}`,
                };
            },
            transformResponse: (response: TResponseRedux<Task>) => {
                return response.data;
            },
        }),
        createTask: builder.mutation({
            query: (data) => {
                return {
                    url: `/tasks`,
                    method: "POST",
                    body: data,
                };
            },
            invalidatesTags: ["tasks"],
        }),
        updateTasks: builder.mutation({
            query: (data) => {
                return {
                    url: `/tasks/${data.id}`,
                    method: "PUT",
                    body: data.data,
                };
            },
            invalidatesTags: ["tasks"],
        }),
        deleteTask: builder.mutation({
            query: (id) => {
                return {
                    url: `/tasks/${id}`,
                    method: "DELETE",
                };
            },
            invalidatesTags: ["tasks"],
        }),
    }),
});

export const {
    useGetAllTasksQuery,
    useGetSingleTaskQuery,
    useCreateTaskMutation,
    useUpdateTasksMutation,
    useDeleteTaskMutation,
} = taskApi;
