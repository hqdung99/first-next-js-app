import Link from "next/link";
import Layout from "../../components/layout";

export default function FirstPost() {
  return (
    <Layout>
      <h1>
        First Post hahahaha
        <Link href="/">Back to home</Link>
      </h1>
    </Layout>
  );
}
