import { auth } from "@/auth";

export default async function Home() {
  const session = await auth();
  console.log(session);
  return (
    <div>
      <h1 className="h1-bold">Well come to next js </h1>
      <h1 className="h1-bold font-space-grotesk">Well come to next js </h1>
    </div>
  );
}
