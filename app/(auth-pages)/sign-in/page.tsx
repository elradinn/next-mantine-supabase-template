import { signInAction } from "@/app/actions";
import { FormMessage, Message } from "@/components/form-message";
import { Button, TextInput, PasswordInput } from "@mantine/core";
import Link from "next/link";

export default async function Login(props: { searchParams: Promise<Message> }) {
  const searchParams = await props.searchParams;
  return (
    <form className="flex-1 flex flex-col min-w-64">
      <h1 className="text-2xl font-medium">Sign in</h1>
      <p className="text-sm text-foreground">
        Don't have an account?{" "}
        <Link className="text-foreground font-medium underline" href="/sign-up">
          Sign up
        </Link>
      </p>
      <div className="flex flex-col gap-2 [&>input]:mb-3 mt-8">
        <TextInput name="email" placeholder="you@example.com" required />
        <div className="flex justify-between items-center">
          <PasswordInput name="password" placeholder="Your password" required />
          <Link
            className="text-xs text-foreground underline"
            href="/forgot-password"
          >
            Forgot Password?
          </Link>
        </div>
        {/* <TextInput
          type="password"
          name="password"
          placeholder="Your password"
          required
        /> */}
        <Button type="submit" formAction={signInAction}>Sign in</Button>
        <FormMessage message={searchParams} />
      </div>
    </form>
  );
}