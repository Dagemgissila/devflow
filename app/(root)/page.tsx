import { auth, signOut } from "@/auth";
import { Button } from "@/components/ui/button";
import ROUTES from "@/constant/routes";

export default async function Home() {
  const session = await auth();
  console.log(session);
  return (
    <div>
      <h1 className="h1-bold">Well come to next js </h1>
      <h1 className="h1-bold font-space-grotesk">Well come to next js </h1>

      <form
        action={async () => {
          "use server";
          await signOut({ redirectTo: ROUTES.SIGN_IN });
        }}
      >
        <Button>Log out</Button>
      </form>
    </div>
  );
}
