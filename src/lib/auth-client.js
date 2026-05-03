import { createAuthClient } from "better-auth/react"
export const authClient = createAuthClient({
    /** The base URL of the server (optional if you're using the same domain) */
    baseURL: "https://online-book-borrowing-platformm-wit.vercel.app"
})

export const { signIn, signUp, updateUser, useSession } = createAuthClient();