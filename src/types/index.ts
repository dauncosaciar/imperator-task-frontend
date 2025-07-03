import { z } from "zod";

/* Auth & Users schemas and types */
export const authSchema = z.object({
  name: z.string(),
  lastName: z.string(),
  email: z.string().email(),
  password: z.string(),
  passwordConfirmation: z.string(),
  token: z.string()
});

export type Auth = z.infer<typeof authSchema>;

export type LoginFormData = Pick<Auth, "email" | "password">;

export type RegistrationFormData = Pick<
  Auth,
  "name" | "lastName" | "email" | "password" | "passwordConfirmation"
>;

export type ConfirmToken = Pick<Auth, "token">;

/* Projects schemas and types */
export const projectSchema = z.object({
  _id: z.string(),
  projectName: z.string(),
  clientName: z.string(),
  description: z.string()
});

export const dashboardProjectSchema = z.array(
  projectSchema.pick({
    _id: true,
    projectName: true,
    clientName: true,
    description: true
  })
);

export type Project = z.infer<typeof projectSchema>;

export type ProjectFormData = Pick<
  Project,
  "projectName" | "clientName" | "description"
>;

export type DashboardProject = z.infer<typeof dashboardProjectSchema>;

/* Tasks schemas and types */
export const taskStatusSchema = z.enum([
  "pending",
  "onHold",
  "inProgress",
  "underReview",
  "completed"
]);

export type TaskStatus = z.infer<typeof taskStatusSchema>;

export const taskSchema = z.object({
  _id: z.string(),
  name: z.string(),
  description: z.string(),
  project: z.string(),
  status: taskStatusSchema,
  createdAt: z.string(),
  updatedAt: z.string()
});

export type Task = z.infer<typeof taskSchema>;

export type TaskFormData = Pick<Task, "name" | "description">;
