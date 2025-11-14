import { z } from "zod";

/* Auth & Users schemas and types */
export const authSchema = z.object({
  name: z.string(),
  lastName: z.string(),
  email: z.string().email(),
  currentPassword: z.string(),
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

export type RequestConfirmationCodeFormData = Pick<Auth, "email">;

export type ForgotPasswordFormData = Pick<Auth, "email">;

export type NewPasswordFormData = Pick<
  Auth,
  "password" | "passwordConfirmation"
>;

export type UpdateCurrentUserPasswordFormData = Pick<
  Auth,
  "currentPassword" | "password" | "passwordConfirmation"
>;

export type CheckPasswordFormData = Pick<Auth, "password">;

export type ConfirmToken = Pick<Auth, "token">;

/* Users schemas and types */
export const userSchema = authSchema
  .pick({
    name: true,
    lastName: true,
    email: true
  })
  .extend({
    _id: z.string()
  });

export type User = z.infer<typeof userSchema>;

export type ProfileFormData = Pick<User, "name" | "lastName" | "email">;

/* Notes schemas and types */
export const noteSchema = z.object({
  _id: z.string(),
  content: z.string(),
  createdBy: userSchema,
  task: z.string(),
  createdAt: z.string()
});

export type Note = z.infer<typeof noteSchema>;

export type NoteFormData = Pick<Note, "content">;

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
  updatedBy: z.array(
    z.object({
      _id: z.string(),
      user: userSchema,
      status: taskStatusSchema
    })
  ),
  notes: z.array(noteSchema),
  createdAt: z.string(),
  updatedAt: z.string()
});

export const taskProjectSchema = taskSchema.pick({
  _id: true,
  name: true,
  description: true,
  status: true
});

export type Task = z.infer<typeof taskSchema>;

export type TaskFormData = Pick<Task, "name" | "description">;

export type TaskProject = z.infer<typeof taskProjectSchema>;

/* Projects schemas and types */
export const projectSchema = z.object({
  _id: z.string(),
  projectName: z.string(),
  clientName: z.string(),
  description: z.string(),
  manager: z.string(userSchema.pick({ _id: true })),
  tasks: z.array(taskProjectSchema),
  team: z.array(z.string(userSchema.pick({ _id: true })))
});

export const dashboardProjectSchema = z.array(
  projectSchema.pick({
    _id: true,
    projectName: true,
    clientName: true,
    description: true,
    manager: true
  })
);

export const editProjectSchema = projectSchema.pick({
  projectName: true,
  clientName: true,
  description: true
});

export type Project = z.infer<typeof projectSchema>;

export type ProjectFormData = Pick<
  Project,
  "projectName" | "clientName" | "description"
>;

export type DashboardProject = z.infer<typeof dashboardProjectSchema>;

/* Team schemas and types */
export const teamMemberSchema = userSchema.pick({
  name: true,
  lastName: true,
  email: true,
  _id: true
});

export const teamMembersSchema = z.object({
  projectName: z.string(),
  team: z.array(teamMemberSchema)
});

export type TeamMember = z.infer<typeof teamMemberSchema>;

export type TeamMemberFormData = Pick<TeamMember, "email">;
