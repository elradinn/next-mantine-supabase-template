import { resetPasswordAction } from "@/app/actions";
import { FormMessage, Message } from "@/components/form-message";
import { Button, Input, TextInput } from "@mantine/core";

export default async function ResetPassword(props: {
  searchParams: Promise<Message>;
}) {
  const searchParams = await props.searchParams;
  return (
    <form className="flex flex-col w-full max-w-md p-4 gap-2 [&>input]:mb-4">
      <h1 className="text-2xl font-medium">Reset password</h1>
      <p className="text-sm text-foreground/60">
        Please enter your new password below.
      </p>
      <TextInput
        type="password"
        name="password"
        placeholder="New password"
        label="New password"
        required
      />
      <TextInput
        type="password"
        name="confirmPassword"
        placeholder="Confirm password"
        label="Confirm password"
        required
      />
      <Button formAction={resetPasswordAction}>Reset password</Button>
      <FormMessage message={searchParams} />
    </form>
  );
}
